# Stage 1 → Build Angular app
FROM node:22-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production

# Stage 2 → Serve using nginx
FROM nginx:alpine
# COPY --from=build /app/dist/manojportfolio /usr/share/nginx/html
# rm -rf /var/www/html/*
 COPY -r dist/manojportfolio/browser/* /var/www/html/

EXPOSE 80
CMD ["nginx","-g","daemon off;"]