FROM node:current

WORKDIR /usr/src/app

COPY . .

RUN npm run postinstall

WORKDIR /usr/src/app/server/

EXPOSE 3000

CMD ["npm", "run", "start"]
