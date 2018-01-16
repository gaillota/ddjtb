# Dockerfile for prod on
FROM node:9.1

# Bruh
MAINTAINER Antoine Gaillot

# Create app directory
WORKDIR /usr/src/app

RUN yarn global add pm2

# Install app dependencies
COPY package.json .
RUN yarn install --production

# Bundle app files (instead of volumes, thanks to CleverCloud)
COPY . .

EXPOSE 8080

# America ! Fuck yeah !
CMD ["yarn", "run", "serve:prod"]
