# Set the base image
FROM node:12
#Environment variable
ENV udagram_username=postgres
ENV udagram_password=database-1
ENV udagram_database=udagram
ENV udagram_host=database-1.cjqzv1eedxia.eu-central-1.rds.amazonaws.com
# Create app directory
WORKDIR /usr/src/app
# Copy package.json AND package-lock.json
COPY package*.json ./
# Install all dependencies
RUN npm ci 
# Copy the rest of the code
COPY . .
# Expose the port 
EXPOSE 8080
# Define the command that should be executed
CMD [ "npm", "run", "dev" ]