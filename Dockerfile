FROM node:16-alpine

WORKDIR /app

COPY  package*.json ./

COPY public/ public/

COPY server/ server/

RUN npm install 

USER node 

CMD [ "npm", "start" ]

EXPOSE 3000