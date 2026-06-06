# SSR From Scratch — React, Express & esbuild

A deep dive into building Server-Side Rendering (SSR) with React from scratch. This project completely bypasses heavy frameworks, giving you full control by wiring together **React 19**, **Express**, and **esbuild** completely by hand.

## Features

- **Custom SSR Engine:** Fully custom React rendering logic using `renderToPipeableStream`.
- **Lightning Fast Builds:** Powered by `esbuild` to compile both the client and server bundles concurrently.
- **TypeScript First:** Type-safe development from the server entry point to the React components.
- **Vercel Ready:** Seamlessly deployable as a Serverless function.

## Getting Started

### Prerequisites
Make sure you have Node.js and `npm` (or your preferred package manager) installed.

### Installation

1. Clone the repository and install dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Architecture

- `src/server.ts`: The Express server that handles incoming requests, statically serves the public directory, and Server-Side Renders the React component tree.
- `src/client.tsx`: The client-side entry point for React hydration.
- `src/app.tsx`: The root React component.
- `build.ts`: The custom esbuild configuration that manages the Node server bundle and the Browser client bundle separately.

## Deployment

This app is pre-configured for instant deployment to **Vercel**. 

Vercel natively understands the structure:
- `public/` directory is automatically served via Vercel's Edge Network CDN.
- `api/index.js` acts as a Serverless Function to run the Express app.
- `vercel.json` rewrites all requests to the serverless function.

**To deploy:**
1. Push the code to a GitHub repository.
2. Import the project in your Vercel Dashboard.
3. Vercel will automatically run `npm run build` and route the app accordingly. No further configuration is required!
