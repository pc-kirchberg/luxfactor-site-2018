#!/bin/sh
set -e

echo "Starting deployment"

git config --global user.email "builds@pupilscom-esl1.eu"
git config --global user.name "PC Build System"

yarn

node_modules/.bin/gatsby build --prefix-paths

node_modules/.bin/gh-pages -d public -r "https://x-access-token:$GITHUB_TOKEN@github.com/pupcomesl1/luxfactor-site-2018.git"

echo "Done!"
