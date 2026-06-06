import esbuild from "esbuild";
import { copyFileSync, mkdirSync } from "node:fs";

try {
  // Ensure the output directories exist
  mkdirSync("public", { recursive: true });
  mkdirSync("api", { recursive: true });

  // Copy CSS to public directory
  copyFileSync("src/styles.css", "public/styles.css");

  // Client bundle (browser)
  const clientBuild = esbuild.build({
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
  });

  // Server bundle (Node)
  const serverBuild = esbuild.build({
    entryPoints: ["src/server.ts"],
    bundle: true,
    platform: "node",
    format: "esm",
    outfile: "api/index.js",
    sourcemap: true,
    external: ["express", "react", "react-dom"],
  });

  await Promise.all([clientBuild, serverBuild]);
  console.log("Build completed successfully!");
} catch (error) {
  console.error("Build failed:", error);
  process.exit(1);
}
