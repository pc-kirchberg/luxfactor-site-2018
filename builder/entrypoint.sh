#!/bin/sh
set -e

echo "Starting deployment"

git config user.email "builds@pupilscom-esl1.eu"
git config user.name "PC Build System"

yarn

yarn run deploy

echo "Done!"
