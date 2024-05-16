# Creating multi-stage build for production
FROM node:18-alpine as build
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev git > /dev/null 2>&1
ARG NODE_ENV=production
ENV NODE_ENV=production
ENV APP_KEYS=w9QmpmbiduXAqi4F0ZsBCA==,flPBsJlGX+qzBTqwqsxhiQ==,wxY6ELNGCmg9cexdovRPDg==,oyv9YGw1RDDWuZQUtSL+SA==
ENV API_TOKEN_SALT=sGiJAbQzaDB2vlffhhwiqw==
ENV ADMIN_JWT_SECRET=fv3dDwk+uqB/k0W0Pmfhyg==
ENV TRANSFER_TOKEN_SALT=KEmadvQO4OMYqa8exkvVzA==
ENV JWT_SECRET=Jnw5/CRNwpLEbVKT7H3I2g==

WORKDIR /opt/
COPY package.json package-lock.json ./
RUN npm install -g node-gyp
RUN npm config set fetch-retry-maxtimeout 600000 -g && npm install --only=production
ENV PATH /opt/node_modules/.bin:$PATH
WORKDIR /opt/app
COPY . .
RUN npm run build
RUN npm run strapi import -- -f data.tar.gz.enc --force --key themes12

# Creating final production image
FROM node:18-alpine
RUN apk add --no-cache vips-dev
ARG NODE_ENV=production
ENV NODE_ENV=production
WORKDIR /opt/
COPY --from=build /opt/node_modules ./node_modules
WORKDIR /opt/app
COPY --from=build /opt/app ./
ENV PATH /opt/node_modules/.bin:$PATH

RUN chown -R node:node /opt/app
USER node
EXPOSE 1337
CMD ["npm", "run", "start"]