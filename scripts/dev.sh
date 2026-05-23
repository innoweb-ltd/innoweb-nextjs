if [ ! -d "node_modules" ]; then
  echo "$(tput setaf 3)::NODE_MODULES NOT FOUND, INSTALLING DEPENDENCIES...$(tput sgr 0)"
  npm install
fi

echo "$(tput setaf 2)::STARTING DEV SERVER$(tput sgr 0)"
next
