# Dockerfile for prod on
FROM node:9.1

# Bruh
MAINTAINER Antoine Gaillot

# Set homedir as env variable
ENV HOME_DIR /usr/src/app

# Create app directory
WORKDIR $HOME_DIR

RUN apt-get update
RUN apt-get upgrade -y
RUN yarn global add nodemon

# Install app dependencies
COPY package.json .
RUN yarn install --production

EXPOSE 3000

# America ! Fuck yeah !
CMD ["yarn", "run", "serve:prod"]
