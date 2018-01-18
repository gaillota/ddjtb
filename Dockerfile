# Dockerfile for prod on
FROM node:9.1

# Bruh
MAINTAINER Antoine Gaillot

# Set homedir as env variable
ENV HOME_DIR /app

# Create app directory
WORKDIR $HOME_DIR

RUN apt-get update
RUN apt-get upgrade -y
RUN npm install -g nodemon cross-env

# Install app dependencies
COPY package*.json /app
RUN npm install --only=production

COPY . /app

EXPOSE 3000

# America ! Fuck yeah !
CMD ["npm", "run", "serve:prod"]
