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
RUN pnpm install --frozen-lockfile

# Verify installation to ensure all dependencies are present
RUN pnpm list

# Build the application using pnpm
RUN pnpm run build

# Modify the default Apache site configuration to point to /app/.output/public
RUN sed -i 's|DocumentRoot /var/www/html|DocumentRoot /app/.output/public|' /etc/apache2/sites-available/000-default.conf

# Ensure Apache can read from the /app/.output/public directory
RUN chmod -R 755 /app/.output/public
RUN chown -R www-data:www-data /app/.output/public

# Set ServerName to suppress the warning
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Allow Apache to access the /app/.output/public directory
RUN echo "<Directory /app/.output/public>\n\
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
