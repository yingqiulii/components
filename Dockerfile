
# FROM node:latest

# WORKDIR /yingqiuli_ui_garden

# COPY package*.json ./

# RUN npm install

# COPY . .

# RUN npm ci

# RUN git config --local core.hooksPath .git/hooks

# EXPOSE 8018

# RUN npm run build-storybook

# RUN npm install -g http-server

# CMD ["http-server", "storybook-static", "-p 8018"]
FROM node:latest

WORKDIR /yingqiuli_ui_garden

COPY package*.json ./

RUN npm install

COPY . .

RUN npm ci

RUN git config --local core.hooksPath .git/hooks

RUN npm test

EXPOSE 8018

RUN npm run build-storybook

RUN npm install -g http-server

CMD ["http-server", "storybook-static", "-p 8018"]
