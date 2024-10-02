# Stage 1: Compile and Build angular codebase
FROM --platform=linux/amd64 node:20.15.1 as build
RUN export NODE_OPTIONS="--max-old-space-size=8192"
WORKDIR /app
COPY package.json /app/
COPY package-lock.json /app/
RUN npm ci
COPY . /app
RUN npm run build-prod

FROM nginx:alpine

# Copy configuration
COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 4200
