#!/bin/bash

echo "install nodejs modules ----------------------------------"
cd /data && 

if [ -f "/data/pnpm-lock.lock" ]; then
  # used pnpm
  pnpm install --production
elif [ -f "/data/yarn.lock" ]; then
  # used yarn  
  yarn install --production
else
  # used npm
  npm install --production
fi

echo "start pm2 -----------------------------------------------"
pm2 startOrGracefulReload /pm2.json

echo "running -------------------------------------------------"
pm2 log
