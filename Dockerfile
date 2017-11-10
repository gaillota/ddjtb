FROM node:8

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apt-get update
RUN apt-get upgrade -y
RUN yarn global add nodemon

# Install app dependencies
COPY package.json ./

RUN yarn install --production

# Bundle app source
COPY . .

ENV NODE_ENV production

EXPOSE 8080

CMD ["node","server.js"]
