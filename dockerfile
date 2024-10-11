# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory inside the container
WORKDIR .

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port on which the app will run
EXPOSE 8089

# Command to run the application
CMD ["npm", "start"]
