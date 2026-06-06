import esbuild from "esbuild";
import { copyFileSync, mkdirSync } from "node:fs";

// Ensure the output directory exists
mkdirSync("dist/public", { recursive: true });

// Copy CSS to public directory
copyFileSync("src/styles.css", "dist/public/styles.css");

// Client bundle (browser)
esbuild
  .build({
    entryPoints: ["src/client.tsx"],
    bundle: true,
    platform: "browser",
    format: "esm",
    outfile: "dist/public/client.js",
    outbase: "src",
    sourcemap: true,
    define: {
      "process.env.NODE_ENV": '"production"',
    },
  })
  .catch(() => process.exit());

// Server bundle (Node)
esbuild
  .build({
    entryPoints: ["src/server.ts"],
    bundle: true,
    platform: "node",
    format: "esm",
    outfile: "dist/server.js",
    sourcemap: true,
    external: ["express", "react", "react-dom"],
    define: {
      "process.env.NODE_ENV": '"production"',
    },
  })
  .catch(() => process.exit());
