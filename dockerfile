# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the rest of the application code
COPY . .

# Expose the port on which the app will run
EXPOSE 8089

# Command to run the application
CMD ["npm", "start"]
