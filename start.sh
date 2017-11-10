#!/usr/bin/env bash

apt-get update && apt-get upgrade -y

yarn global add nodemon

yarn install --production

NODE_ENV=production yarn run start
