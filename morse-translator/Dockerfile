FROM node:14.18.3-alpine3.14 as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:stable-alpine
COPY /nginx/nginx.conf /etc/nginx/conf.d/
COPY --from=build /app/dist/morse-translator /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]