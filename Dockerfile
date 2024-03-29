FROM node:21-alpine3.18

RUN apk add --no-cache mongodb-tools

ENV MONGODB_URI=mongodb://mongodb:27017/food_db

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN yarn install

COPY --chown=node:node . .

EXPOSE 3000

CMD [ "node", "app.js" ]
