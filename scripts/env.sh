# CHECK IF ENV LOCAL EXIST
if
  [ ! -f .env.local ]
then
  echo -n "::Enter your GITHUB_USERNAME and press [ENTER]: "
  read GITHUB_USERNAME
  echo -n "::Enter your GITHUB_TOKEN and press [ENTER]: "
  read GITHUB_TOKEN

  # CREATE NEEDED RESSOURCES
  echo "@archsplace:registry=https://npm.pkg.github.com/archsplace \nregistry=https://registry.npmjs.org" > .npmrc
  echo "GITHUB_TOKEN=$GITHUB_TOKEN \nGITHUB_USERNAME=$GITHUB_USERNAME" > .env.local
  echo "semi: false \ntrailingComma: \"none\" \narrowParens: \"avoid\" \nprintWidth: 150" > .prettierrc.yml
else
  GITHUB_TOKEN=$(grep GITHUB_TOKEN .env.local | cut -d '=' -f2)
  GITHUB_USERNAME=$(grep GITHUB_USERNAME .env.local | cut -d '=' -f2)
fi


# AUTHENTIFY THE USER TO GITHUB PACKAGES
echo "Authenticating in npm registry as ${GITHUB_USERNAME}"
npm set //npm.pkg.github.com/:_authToken $GITHUB_TOKEN
echo "Authenticating in docker registry"
docker login https://docker.pkg.github.com -u $GITHUB_USERNAME -p $GITHUB_TOKEN
