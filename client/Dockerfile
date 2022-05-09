FROM node
WORKDIR /usr/src/client
COPY package.json .
RUN yarn install
COPY src ./src
COPY public ./public
EXPOSE 3000
CMD [ "yarn", "start" ]