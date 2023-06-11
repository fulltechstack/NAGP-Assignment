# Base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code to the container
COPY . .

# Expose the port on which your Node.js application listens
EXPOSE 3000

# Start the Node.js application
CMD ["node", "index.js"]