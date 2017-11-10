FROM node:8

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY . .

EXPOSE 8080

CMD bash start.sh
