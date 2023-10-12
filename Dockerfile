FROM node:current

WORKDIR /usr/src/app

COPY . .

ENV VITE_APP_API_ENDPOINT=http://gocargo.jnsl.tk/api/v1

RUN npm run postinstall

WORKDIR /usr/src/app/server/

EXPOSE 3000

CMD ["npm", "run", "start"]
