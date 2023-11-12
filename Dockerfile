# Creating multi-stage build for production
FROM node:18.18-alpine as build
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
RUN apk update && apk add build-base gcc autoconf automake zlib-dev libpng-dev vips-dev git > /dev/null 2>&1
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/
COPY package.json ./
RUN npm set registry https://registry.npmmirror.com
RUN npm config set fetch-retry-maxtimeout 600000 -g && npm install
ENV PATH /opt/node_modules/.bin:$PATH
WORKDIR /opt/app
COPY . .
RUN npm run build


# Creating final production image
FROM nginx:1.19-alpine

WORKDIR /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

# Remove the default NGINX configuration file
# RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/nginx.conf

# Copy the static website files to the NGINX document root
COPY --from=build /opt/app/build /usr/share/nginx/html
# COPY ./build ./

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]