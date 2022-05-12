FROM node:lts-alpine3.14

EXPOSE 3333

RUN mkdir -p /home/ubuntu/app

RUN npm config set cache /home/node/app/.npm-cache --global

WORKDIR /home/ubuntu/app

COPY . .

CMD ["npm", "run-script", "start:dev"]