FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json package-lock.json ./

RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 8080

CMD ["node","server.js"]

EXPOSE 8080
