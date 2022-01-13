FROM node:latest
COPY . /app
WORKDIR /app
RUN npm install 
ENV VUE_APP_API=http://localhost:5000/api
EXPOSE 8080
ENTRYPOINT ["npm","run","serve"]