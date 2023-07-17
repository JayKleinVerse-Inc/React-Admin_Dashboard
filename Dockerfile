# Base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the entire project
COPY . .

# Build the project
RUN npm run build

# Expose the desired port
EXPOSE 3000

# Start the application
CMD [ "npm", "start" ]
