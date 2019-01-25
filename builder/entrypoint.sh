#!/bin/sh
set -e

echo "Starting deployment"

yarn

yarn run deploy

echo "Done!"
