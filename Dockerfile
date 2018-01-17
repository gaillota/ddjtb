FROM node:9.1

# Bruh
MAINTAINER Antoine Gaillot

# Create app directory
WORKDIR /usr/src/app

RUN npm install -g nodemon

# Install app dependencies
COPY package.json .
RUN npm install --production

# Bundle app files (instead of volumes, thanks to CleverCloud)
COPY . .

EXPOSE 8080

# America ! Fuck yeah !
CMD ["npm", "run", "serve:prod"]
