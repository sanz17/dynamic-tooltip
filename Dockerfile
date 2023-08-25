FROM node:lts-alpine

WORKDIR /dynamic-tooltip

COPY public/ /dynamic-tooltip/public
COPY src/ /dynamic-tooltip/src
COPY package.json /dynamic-tooltip/


COPY package*.json ./
RUN npm i
COPY . .

RUN npm run build

CMD ["npm","start"]