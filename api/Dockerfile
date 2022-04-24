FROM node:16.13.2

ENV NODE_OPTIONS="--max-old-space-size=4096"

ENV GENERATE_SOURCEMAP false 

# ENV MONGO_URL = mongodb+srv://user:123@blogweb.gpn4x.mongodb.net/BLOG?retryWrites=true&w=majority

WORKDIR ./

COPY package*.json ./

RUN npm install --silent

COPY . .

EXPOSE 5000

CMD ["npm","start"]