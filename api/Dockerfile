FROM node:16.13.2

ENV NODE_OPTIONS="--max-old-space-size=2048"

WORKDIR ./

COPY package*.json ./

RUN npm install --silent

COPY . .

EXPOSE 5000

CMD ["npm","start"]