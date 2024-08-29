# Use Ubuntu 22.04 as the base image
FROM ubuntu:22.04

# Set environment variables to avoid prompts during package installation
ENV DEBIAN_FRONTEND=noninteractive

# Update the package list and install curl
RUN apt-get update && apt-get install -y curl

# Install Node.js v20.9.0
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs=20.9.0-1nodesource1

# Install npm v10.1.0
RUN npm install -g npm@10.1.0

# Install pnpm globally
RUN npm install -g pnpm

# Verify the installation of Node.js, npm, and pnpm
RUN node -v && npm -v && pnpm -v

# Set the working directory
WORKDIR /app

# Copy the application code into the /app directory
COPY . .

# Install the application dependencies using pnpm
RUN pnpm install

# Build the application using pnpm
RUN pnpm run generate

# Expose the application port (change if necessary)
EXPOSE 3000

