FROM node:latest

EXPOSE 4173
ENV PATH /app/node_modules/.bin:$PATH

WORKDIR /app
RUN npm install -g vite

COPY package.json ./

RUN npm install


COPY . .

RUN npm run build

CMD [ "npm", "run", "preview" ]