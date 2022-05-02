#!bin/bash

# THIS SCRIPT FOR DEVELOPMENT ENVIRONMENT

# assuming you have a GitHub repository for the app
git pull origin main

yarn install # install app dependencies (or yarn install)
yarn build # build our app for production (or yarn build)

yarn install -g pm2 # install pm2 for running our app detached

# run start/stop
pm2 start npm --name "next" -- start # start next app
# pm2 stop next # for stopping app

echo "MOVE BITCH GET OUT DA WAY!"
