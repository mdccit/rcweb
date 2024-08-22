# Recruited Web Application - Pipeline Integration Guide

This document provides guidance for engineers responsible for integrating CI/CD pipelines for the RCWeb application.

## Overview

RCWeb is a Nuxt 3 application designed for user management and other administrative functions. The application is built using modern web technologies, including Nuxt 3, Tailwind CSS, Element Plus, and Pinia for state management.

## Prerequisites

Ensure the following tools are installed on the CI/CD environment:

- Node.js (version 20 or later)
- npm, pnpm, or yarn (depending on the package manager used)
- Docker (optional, for containerized builds)
- Any required environment variables for runtime configuration

## Environment Configuration

The application uses environment variables defined in a `.env` file. Ensure these variables are set correctly in the CI/CD environment:

- `NUXT_PUBLIC_API_URL`: The base URL for the API.
- `ACCESS_KEY`: Access key for authentication.
- `DEFAULT_LANG`: Default language for the application.

Example `.env` file:
```plaintext
NUXT_PUBLIC_API_URL=https://api.example.com
ACCESS_KEY=your-access-key
DEFAULT_LANG=en
```

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

```

## Production

Build the application for production:

```bash
# npm
npm run build

```

Locally preview production build:

```bash
# npm
npm run preview

```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
