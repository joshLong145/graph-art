FROM node:16 as ENV

WORKDIR /app

COPY . .

RUN npm install
EXPOSE 9090 9090
CMD ["node", "index.js"]
