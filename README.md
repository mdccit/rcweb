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

# Build and Run Guide


## Build for Development

```bash
pnpm run build:dev
```

### Run Development Build
```bash
node dist/dev/server/index.mjs
```

### Build for QA
```bash
pnpm run build:qa
```

### Run QA Build
```bash
node dist/qa/server/index.mjs
```


## Build for UAT
```bash
pnpm run build:uat
```

## Run UAT Build
```bash
node dist/uat/server/index.mjs
```

## Build for Production
```bash
pnpm run build:prod
```

## Run Production Build
```bash
node dist/production/server/index.mjs
```
