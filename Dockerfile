FROM node:9.1

MAINTAINER Antoine Gaillot

# Create app directory
WORKDIR /usr/src/app

RUN apt-get update
RUN apt-get upgrade -y
RUN yarn global add pm2

# Install app dependencies
COPY package.json .

RUN yarn install --production

# Bundle app source
COPY . .

EXPOSE 8080

CMD yarn run start
