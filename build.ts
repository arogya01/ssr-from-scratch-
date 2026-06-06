import esbuild from "esbuild";
import { copyFileSync, mkdirSync } from "node:fs";

// Ensure the output directories exist
mkdirSync("public", { recursive: true });
mkdirSync("api", { recursive: true });

// Copy CSS to public directory
copyFileSync("src/styles.css", "public/styles.css");

// Client bundle (browser)
esbuild
  .build({
    entryPoints: ["src/client.tsx"],
    bundle: true,
    platform: "browser",
    format: "esm",
    outfile: "public/client.js",
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
    outfile: "api/index.js",
    sourcemap: true,
    external: ["express", "react", "react-dom"],
  })
  .catch(() => process.exit());
