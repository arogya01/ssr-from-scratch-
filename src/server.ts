import express from "express";
import { App } from "./app.tsx";
import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

app.use("/", (req, res) => {
  const { pipe } = renderToPipeableStream(React.createElement(App), {
    onShellReady() {
      res.statusCode = 200;
      res.write(`
        <!DOCTYPE html>
        <html lang="en"> 
            <head> 
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta name="description" content="A deep dive into building Server-Side Rendering with React from scratch — no frameworks, just React, Express, and esbuild wired together by hand.">
                <title>SSR From Scratch — React, Express & esbuild</title>
                <link rel="stylesheet" href="/styles.css">
                <script type="module" src="/client.js"></script>
            </head>
            <body> 
                <div id="root"></div> 
            </body>             
        </html> 
        `);
      pipe(res);
    },
    onError(error) {
      console.error(error);
      res.statusCode = 500;
      res.end("Internal Server Error");
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
