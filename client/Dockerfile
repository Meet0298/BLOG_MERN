# Build react client
FROM node:16.13.2

#ENV NODE_OPTIONS="--max-old-space-size=2048"

WORKDIR ./

COPY package*.json ./

###  Installing dependencies
RUN npm install --silent

COPY . .

EXPOSE 3000

CMD ["npm","start"]