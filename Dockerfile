FROM node:22-alpine
LABEL authors="Ase"

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

EXPOSE 3001

CMD ["npm", "start"]