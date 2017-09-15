# Angular App ========================================
FROM johnpapa/angular-cli as angular-app
LABEL authors="Shayne Boyer, John Papa"
# Copy and install the Angular app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN ng build --prod

#Express server =======================================
FROM node:6.11-alpine as express-server
WORKDIR /app
COPY /src/server /app
RUN npm install --production --silent

#Final image ========================================
FROM node:6.11-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY --from=express-server /app /usr/src/app
COPY --from=angular-app /app/dist /usr/src/app
ENV PORT 80
#ENV API_URL we-could-set-this-here-as-default
CMD [ "node", "index.js" ]
