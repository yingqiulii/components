
FROM node:latest

WORKDIR /yingqiuli_ui_garden

COPY package*.json ./

RUN npm install

COPY . .

RUN npm ci

RUN npm run build-storybook

RUN npm install -g http-server

CMD ["http-server", "storybook-static", "-p 8083"]