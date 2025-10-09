# Base image
FROM node:22-alpine

# Create and set the working directory inside the container
WORKDIR /app

# Copy local files to container
COPY . .

RUN npm install

# Docker build will ONLY succeed if unit tests pass
RUN npm test

# Run `npm start` when the container is started
CMD [ "npm", "start" ]