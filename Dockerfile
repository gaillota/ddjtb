FROM node:9.1

MAINTAINER Antoine Gaillot

# Create app directory
WORKDIR /usr/src/app

RUN yarn global add nodemon

# Install app dependencies
COPY package.json .
RUN yarn install --production

EXPOSE 3000

CMD yarn run serve
