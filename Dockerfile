FROM node:alpine
WORKDIR /usr/sports-backend
COPY package.json .
RUN npm install\
    && npm install typescript -g
COPY . .
RUN tsc
CMD ["node", "./dist/server/server.js"]