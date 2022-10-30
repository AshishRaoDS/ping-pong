FROM node:16-alpine

WORKDIR /app

COPY  package*.json ./
RUN npm run install

USER node 

CMD [ "npm", "start" ]

EXPOSE 3000