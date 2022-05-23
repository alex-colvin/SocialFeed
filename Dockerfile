FROM node:latest as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install

COPY . ./

#PRODUCTION BUILD
RUN npm run build

#PRODUCTION ENVIRONMENT
FROM nginx:stable-alpine as prod

#COPY FROM BUILD FOLDER TO NGINX FOLDER
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx","-g","daemon off;"]
