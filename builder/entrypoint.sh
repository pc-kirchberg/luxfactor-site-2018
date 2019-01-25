#!/bin/sh
set -e

echo "Starting deployment"

git config --global user.email "builds@pupilscom-esl1.eu"
git config --global user.name "PC Build System"

yarn

yarn run deploy

echo "Done!"
