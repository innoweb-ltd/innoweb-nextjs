# Innoweb Repository

## Local development

```
npm run dev
```

The dev script installs dependencies on first run.

## Deployment

Deploys are automated by `.github/workflows/deploy.yml`: every push to `master` (and manual `workflow_dispatch` runs) builds the `Dockerfile` via Cloud Build and rolls it out to Cloud Run service `innoweb-nextjs` in `europe-west1` of GCP project `innowebltd`.

`NEXT_PUBLIC_HOSTNAME` controls the `<meta name="robots">` tag: only when it equals `www.innoweb.ltd` is the site marked indexable. Anywhere else (local dev, raw `*.run.app` URL) defaults to `noindex, nofollow`.

### One-time GCP setup

Run these once against the `innowebltd` project, as a user with `Owner` (or equivalent) on the project.

```bash
PROJECT_ID=innowebltd
REPO=innoweb-ltd/innoweb-nextjs   # owner/repo on GitHub
SA_NAME=github-deploy
SA_EMAIL="${SA_NAME}@${PROJECT_ID}.iam.gserviceaccount.com"
POOL=github
PROVIDER=github

gcloud config set project "$PROJECT_ID"

# 1. Enable APIs
gcloud services enable \
  run.googleapis.com \
  cloudbuild.googleapis.com \
  artifactregistry.googleapis.com \
  iamcredentials.googleapis.com

# 2. Create the deploy service account
gcloud iam service-accounts create "$SA_NAME" \
  --display-name="GitHub Actions deploy"

# 3. Grant it the roles needed for `gcloud run deploy --source .`
for role in \
  roles/run.admin \
  roles/iam.serviceAccountUser \
  roles/cloudbuild.builds.editor \
  roles/artifactregistry.writer \
  roles/storage.admin \
  roles/logging.logWriter; do
  gcloud projects add-iam-policy-binding "$PROJECT_ID" \
    --member="serviceAccount:${SA_EMAIL}" --role="$role"
done

# 4. Pre-create the Artifact Registry repo Cloud Run will push images to
#    (the deploy SA only has writer rights, not create rights — by design)
gcloud artifacts repositories create cloud-run-source-deploy \
  --repository-format=docker \
  --location=europe-west1 \
  --description="Cloud Run source deploys"

# 5. Create the Workload Identity pool + provider for GitHub
gcloud iam workload-identity-pools create "$POOL" \
  --location=global --display-name="GitHub Actions"

gcloud iam workload-identity-pools providers create-oidc "$PROVIDER" \
  --location=global --workload-identity-pool="$POOL" \
  --display-name="GitHub" \
  --issuer-uri="https://token.actions.githubusercontent.com" \
  --attribute-mapping="google.subject=assertion.sub,attribute.repository=assertion.repository" \
  --attribute-condition="assertion.repository=='${REPO}'"

PROJECT_NUMBER=$(gcloud projects describe "$PROJECT_ID" --format='value(projectNumber)')

# 6. Let the GitHub repo impersonate the service account
gcloud iam service-accounts add-iam-policy-binding "$SA_EMAIL" \
  --role=roles/iam.workloadIdentityUser \
  --member="principalSet://iam.googleapis.com/projects/${PROJECT_NUMBER}/locations/global/workloadIdentityPools/${POOL}/attribute.repository/${REPO}"

# 7. Print the values to paste into GitHub secrets
echo "GCP_SERVICE_ACCOUNT=${SA_EMAIL}"
echo "GCP_WORKLOAD_IDENTITY_PROVIDER=projects/${PROJECT_NUMBER}/locations/global/workloadIdentityPools/${POOL}/providers/${PROVIDER}"
```

### Required GitHub secrets

Add both at **Settings → Secrets and variables → Actions**:

- `GCP_SERVICE_ACCOUNT` — service account email (printed by step 7 above).
- `GCP_WORKLOAD_IDENTITY_PROVIDER` — full provider resource path (printed by step 7 above).

### Domain mapping

Both `www.innoweb.ltd` and `innoweb.ltd` are mapped to the Cloud Run service. DNS is hosted at Namecheap.

```bash
gcloud beta run domain-mappings create \
  --service=innoweb-nextjs \
  --domain=www.innoweb.ltd \
  --region=europe-west1 \
  --project=innowebltd

gcloud beta run domain-mappings create \
  --service=innoweb-nextjs \
  --domain=innoweb.ltd \
  --region=europe-west1 \
  --project=innowebltd
```

Each command prints the DNS records to add at Namecheap (Advanced DNS):

- `www` → `CNAME` → `ghs.googlehosted.com.`
- `@` → `A` / `AAAA` records (four of each, Google anycast IPs)

The apex (`innoweb.ltd`) is served by Cloud Run too — the Next.js `redirects()` block in `next.config.js` 308s any request with `Host: innoweb.ltd` to `https://www.innoweb.ltd/:path*`. This is done in-app (not via Namecheap URL Redirect) because Namecheap's redirect only serves HTTP and breaks HTTPS-first browsers.

Cert provisioning takes 15–60 min after DNS resolves. Check with:

```bash
gcloud beta run domain-mappings describe \
  --domain=www.innoweb.ltd --region=europe-west1 --project=innowebltd
```
