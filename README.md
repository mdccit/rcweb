# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

```


Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


## Docker Commands for Running the Application

### 1. Build the Docker Image

To build the Docker image for your application, run the following command:

```bash
docker build -t recruited-app .

```

### 2. Run the Docker Container

```bash
docker run -d -p 80:80 --name recruited-app recruited-app

```

### 3. Stop the Docker Container

```bash
docker stop recruited-app

```

### 4. Stop the Docker Container

```bash
docker rm recruited-app

```

### 5. View Container Logs

```bash
docker logs recruited-app

```