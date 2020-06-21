FROM node:12.18-alpine
ENV PORT=3000
ENV HOST=128.199.252.245
ENV DB_HOST=128.199.252.245
ENV DB_PORT=27017
ENV DB_NAME=admin
ENV DB_USER=root
ENV DB_PASS=varchris*1234
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]
# docker run --name food-finder-api -v /www/food-finder-api/public:/app/public -p 3000:3000 -d food-finder-api