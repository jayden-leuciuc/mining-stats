FROM node
WORKDIR /usr/src/server
COPY package.json .
RUN npm install --legacy--peer-deps
COPY . .
EXPOSE 3001
CMD [ "npm", "start" ]