#!/bin/bash

# ====

CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

HOST_USER=$"labcodes@159.203.127.36"
HOST_PATH=$"/home/labcodes/boilerplate/$CURRENT_BRANCH/build"

BUILD_PATH=$"./build/*"

# ====

echo "Initializing the Setup"
sudo apt-get install rsync

echo "Connecting by SSH and create branch folder"
ssh -o "StrictHostKeyChecking no" $HOST_USER "mkdir -p $HOST_PATH"

echo "Deploy to Ditigal Ocean"
rsync -e "ssh -o StrictHostKeyChecking=no" -ru $BUILD_PATH $HOST_USER:$HOST_PATH

echo "You can now try your feature here: https://$CURRENT_BRANCH.boilerplate.labcod.es"