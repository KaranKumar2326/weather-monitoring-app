# Use an official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire backend code into the container
COPY . .

# Expose the backend port
EXPOSE 5000

# Command to run the backend server
CMD ["node", "app.js"]
