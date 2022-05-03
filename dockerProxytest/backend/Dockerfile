FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

EXPOSE 4200

VOLUME ["/app/data"]

CMD ["node", "index.js"]