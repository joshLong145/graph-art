FROM node:16 as ENV

WORKDIR /app

COPY . .

RUN npm install
EXPOSE 8080 8080
CMD ["node", "index.js"]
