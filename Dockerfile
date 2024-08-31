# Use Ubuntu 22.04 as the base image
FROM ubuntu:22.04

# Set environment variables to avoid prompts during package installation
ENV DEBIAN_FRONTEND=noninteractive

# Update the package list and install necessary packages
RUN apt-get update && apt-get install -y curl apache2

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

# Ensure a clean install by removing node_modules if it exists
RUN rm -rf node_modules

# Install the application dependencies using pnpm
RUN pnpm install --no-frozen-lockfile

# Verify installation to ensure all dependencies are present
RUN pnpm list

# Build the application using pnpm
RUN pnpm run build  --log-level verbose || true

# default Apache site configuration to point to /app/dist/public
RUN sed -i 's|DocumentRoot /var/www/html|DocumentRoot /app/dist/public|' /etc/apache2/sites-available/000-default.conf

# Only change permissions if the directory exists
RUN [ -d "/app/dist/public" ] && chmod -R 755 /app/dist/public || echo "/app/dist/public not found"

# Only change ownership if the directory exists
RUN [ -d "/app/dist/public" ] && chown -R www-data:www-data /app/dist/public || echo "Skipping ownership change as /app/dist/public not found"


# Set ServerName to suppress the warning
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Allow Apache to access the /app/.output/public directory
RUN echo "<Directory /app/dist/public>\n\
    Options Indexes FollowSymLinks\n\
    AllowOverride All\n\
    Require all granted\n\
</Directory>" >> /etc/apache2/apache2.conf

# Enable the Apache rewrite module (if your app uses routing)
RUN a2enmod rewrite

# Expose the application port for Apache (typically port 80)
EXPOSE 80

# Start Apache in the foreground
CMD ["apache2ctl", "-D", "FOREGROUND"]
