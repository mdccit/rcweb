# Use Ubuntu 22.04 as the base image
FROM ubuntu:22.04

# Set environment variables to avoid prompts during package installation
ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y \
    curl \
    apache2

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

# Modify the default Apache site configuration to point to /app/dist/public
RUN sed -i 's|DocumentRoot /var/www/html|DocumentRoot /app/dist/public|' /etc/apache2/sites-available/000-default.conf

# Ensure Apache can read from the /app/dist directory
RUN chown -R www-data:www-data /app/dist/public

# Enable the Apache rewrite module (if your app uses routing)
RUN a2enmod rewrite

# Expose the application port for Apache (typically port 80)
EXPOSE 80

# Start both Apache and the Node.js application
CMD ["sh", "-c", "apachectl start"]
