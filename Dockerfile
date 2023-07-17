# Stage 1: Build the React app
FROM node:14 as build-stage

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code to the container
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the built app using NGINX
FROM nginx:latest as production-stage

# Copy the built app from the previous stage to the NGINX container
COPY --from=build-stage /app/build /usr/share/nginx/html

# Expose a port (if needed)
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
