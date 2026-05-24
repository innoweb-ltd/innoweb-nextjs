# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the dev server.
- `npm run build` — production build. Produces `.next/standalone` because `output: "standalone"` is set; the container entrypoint is `node server.js`.
- `npm start` — run the built app locally. Requires `PORT` (e.g. `PORT=3000 npm start`).
- `npm run commit` — wraps `git add --all && git commit -m "[Project] - <message>" && git push` via `scripts/commit.sh`. All commits in this repo follow the `[Project] - <message>` prefix convention.

There is no test framework, linter, or type checker configured. Verify changes by running `npm run dev` and exercising the affected pages in a browser.

No env vars are required for local dev. `NEXT_PUBLIC_HOSTNAME` is only consumed by `_document.js` to gate the `robots` meta tag — when it equals `www.innoweb.ltd` the site is `index, follow`, otherwise `noindex, nofollow`. It is set in production via `gcloud run deploy --set-env-vars`.

## Architecture

**Pages Router with translation-driven routing.** `src/pages/[page].js` is the single dynamic route that backs every non-home page. `getStaticPaths` reads `locales/<locale>/router.json` (which maps internal page keys → translated URL slugs) and generates one static path per (locale, slug). At render time, the slug is reverse-mapped back to a page key (`cases`, `projects`, `team`, `contact`, `data`, `cookie`) which selects the component to mount. To add a new page: add the key to `router.json`, register its translation namespace in `i18n.js`, create the component, and wire it into the switch in `[page].js`.

**i18n** is handled by `next-translate-plugin` (configured in `next.config.js`). The page→namespace map lives in `i18n.js`; namespace JSON files live under `locales/<locale>/`. Currently only `us` is shipped, but the routing is locale-aware. Domain-based locale routing pins the production locale to `www.innoweb.ltd` (set in `next.config.js` `i18n.domains`).

**Styling** uses `react-jss` with full SSR. `src/pages/_document.js` collects styles into a `SheetsRegistry` per request and injects them as `<style id="server-side-styles">`; `_app.js` removes that node on mount so the client-side JSS takeover is clean. All style files live under `src/styles/<area>/<name>.styles.js` and export `useStyles` / `useCommons` hooks via `createUseStyles`.

**Webpack aliases** (defined in `next.config.js`): `@actions` → `src/store/actions`, `@utils` → `src/utils`, `@components` → `src/components`, `@styles` → `src/styles`, `@i18n` → `i18n`. Note that `@actions` and a Redux store do **not** exist in the codebase even though `react-redux` is a dependency — treat the dep as vestigial unless you're intentionally adding Redux.

**Analytics** is hardwired: GTM ID `GTM-KC6PD84` (in `src/utils/index.js`), loaded in `_document.js`, and `pageview()` is fired from `_app.js` on every `routeChangeComplete`.

**Images** are served from `public/images/`. There is no third-party image host — historical references to `NEXT_PUBLIC_WEBKIT_URL` / ImageKit have been removed. Use `next/image` with local paths.

## Deployment

Target is **Google Cloud Run**, project `innowebltd`, region `europe-west1`, service `innoweb-nextjs`. The `Dockerfile` does a multi-stage build (`deps → builder → runner`) on `node:20-alpine`, runs as a non-root `nextjs` user, listens on `$PORT` (8080), and runs the standalone `server.js`.

Deploys are automated: `.github/workflows/deploy.yml` runs on every push to `master` and on manual `workflow_dispatch`. It authenticates via Workload Identity Federation (no JSON keys) using GitHub secrets `GCP_SERVICE_ACCOUNT` and `GCP_WORKLOAD_IDENTITY_PROVIDER`, then runs `gcloud run deploy --source .`. The one-time GCP-side setup commands (APIs, deploy SA, WIF pool, pre-created Artifact Registry repo) are in `README.md`.

Both `www.innoweb.ltd` (CNAME → `ghs.googlehosted.com`) and `innoweb.ltd` (A/AAAA → Google anycast IPs) have Cloud Run domain mappings; DNS is at Namecheap. The apex → www redirect is in-app via the `redirects()` block in `next.config.js` (matches `host: innoweb.ltd`, 308s to `https://www.innoweb.ltd/:path*`) — Namecheap's URL Redirect Record was rejected because it only serves HTTP.
