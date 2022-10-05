FROM node:16-slim
WORKDIR /app

COPY package*.json ./

RUN  npm config set proxy http://172.16.1.6:3128 && npm install
# RUN npm install
COPY . .

EXPOSE 5000

CMD ["npm","start"]