// src/server.ts
import express from "express";

// src/app.tsx
import React, { useEffect, useRef } from "react";
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}
function Reveal({ children, className = "" }) {
  const ref = useReveal();
  return /* @__PURE__ */ React.createElement("div", { ref, className: `reveal ${className}` }, children);
}
function Nav() {
  return /* @__PURE__ */ React.createElement("nav", { className: "nav", id: "nav" }, /* @__PURE__ */ React.createElement("div", { className: "nav-inner" }, /* @__PURE__ */ React.createElement("span", { className: "nav-brand" }, "SSR From Scratch"), /* @__PURE__ */ React.createElement("ul", { className: "nav-links" }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "#architecture" }, "Architecture")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "#features" }, "Features")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "#code" }, "Code")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "#how-it-works" }, "How It Works")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "#stack" }, "Stack")))));
}
function Hero() {
  return /* @__PURE__ */ React.createElement("section", { className: "hero", id: "hero" }, /* @__PURE__ */ React.createElement("div", { className: "page-container" }, /* @__PURE__ */ React.createElement("span", { className: "hero-label" }, "A Learning Experiment"), /* @__PURE__ */ React.createElement("h1", { className: "hero-title" }, "Server-Side Rendering.", " ", /* @__PURE__ */ React.createElement("span", { className: "highlight" }, "From Scratch.")), /* @__PURE__ */ React.createElement("p", { className: "hero-subtitle" }, "No frameworks. No magic. Just React, Express, and esbuild \u2014 wired together by hand to understand what really happens when HTML streams to the browser."), /* @__PURE__ */ React.createElement("div", { className: "hero-cta-group" }, /* @__PURE__ */ React.createElement("a", { href: "#architecture" }, /* @__PURE__ */ React.createElement("button", { className: "button-primary", id: "cta-explore" }, "Explore the Architecture")), /* @__PURE__ */ React.createElement("a", { href: "#code" }, /* @__PURE__ */ React.createElement("button", { className: "button-secondary", id: "cta-code" }, "View the Code")))));
}
function Architecture() {
  return /* @__PURE__ */ React.createElement("section", { className: "architecture-section", id: "architecture" }, /* @__PURE__ */ React.createElement("div", { className: "page-container" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("span", { className: "section-label" }, "Architecture"), /* @__PURE__ */ React.createElement("h2", { className: "section-title", style: { color: "var(--apple-silver-text)" } }, "The Full Picture"), /* @__PURE__ */ React.createElement("p", { className: "section-subtitle" }, "A request travels from browser to server and back \u2014 streamed as HTML chunks, then hydrated into a fully interactive React app.")), /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("div", { className: "architecture-diagram" }, /* @__PURE__ */ React.createElement("div", { className: "arch-node" }, /* @__PURE__ */ React.createElement("span", { className: "arch-node-icon" }, "\u{1F310}"), /* @__PURE__ */ React.createElement("div", { className: "arch-node-title" }, "Browser"), /* @__PURE__ */ React.createElement("div", { className: "arch-node-desc" }, "Sends GET request")), /* @__PURE__ */ React.createElement("span", { className: "arch-arrow" }, "\u2192"), /* @__PURE__ */ React.createElement("div", { className: "arch-node" }, /* @__PURE__ */ React.createElement("span", { className: "arch-node-icon" }, "\u26A1"), /* @__PURE__ */ React.createElement("div", { className: "arch-node-title" }, "Express"), /* @__PURE__ */ React.createElement("div", { className: "arch-node-desc" }, "Catches all routes")), /* @__PURE__ */ React.createElement("span", { className: "arch-arrow" }, "\u2192"), /* @__PURE__ */ React.createElement("div", { className: "arch-node" }, /* @__PURE__ */ React.createElement("span", { className: "arch-node-icon" }, "\u269B\uFE0F"), /* @__PURE__ */ React.createElement("div", { className: "arch-node-title" }, "React Streaming"), /* @__PURE__ */ React.createElement("div", { className: "arch-node-desc" }, "renderToPipeableStream()")), /* @__PURE__ */ React.createElement("span", { className: "arch-arrow" }, "\u2192"), /* @__PURE__ */ React.createElement("div", { className: "arch-node" }, /* @__PURE__ */ React.createElement("span", { className: "arch-node-icon" }, "\u{1F4C4}"), /* @__PURE__ */ React.createElement("div", { className: "arch-node-title" }, "HTML Stream"), /* @__PURE__ */ React.createElement("div", { className: "arch-node-desc" }, "Chunks piped to res")), /* @__PURE__ */ React.createElement("span", { className: "arch-arrow" }, "\u2192"), /* @__PURE__ */ React.createElement("div", { className: "arch-node" }, /* @__PURE__ */ React.createElement("span", { className: "arch-node-icon" }, "\u{1F4A7}"), /* @__PURE__ */ React.createElement("div", { className: "arch-node-title" }, "Hydration"), /* @__PURE__ */ React.createElement("div", { className: "arch-node-desc" }, "hydrateRoot() binds"))))));
}
var FEATURES = [
  {
    icon: "\u{1F6E0}",
    title: "Zero Abstraction",
    desc: "No Next.js, no Remix, no Gatsby. Every piece is visible and deliberate \u2014 you own every line."
  },
  {
    icon: "\u{1F4E6}",
    title: "esbuild Bundling",
    desc: "Dual builds in under 50ms \u2014 one for the server (Node), one for the client (browser). Blazingly fast."
  },
  {
    icon: "\u{1F30A}",
    title: "Streaming SSR",
    desc: "renderToPipeableStream() sends HTML in chunks as React renders. The shell arrives first, then content streams in \u2014 no waiting for the full tree."
  },
  {
    icon: "\u{1F4A7}",
    title: "React 19 Hydration",
    desc: "Streamed HTML gets hydrated with hydrateRoot(), making the page interactive without re-rendering."
  },
  {
    icon: "\u{1F504}",
    title: "Isomorphic Components",
    desc: "The same App component runs on both server and client. Write once, render everywhere."
  },
  {
    icon: "\u{1F5C2}",
    title: "Static Asset Serving",
    desc: "Express serves the bundled client JS from /dist/public, keeping the architecture dead simple."
  },
  {
    icon: "\u26A1",
    title: "Instant Feedback",
    desc: "Build and run with a single command. The dev loop is tight \u2014 change, build, reload."
  }
];
function Features() {
  return /* @__PURE__ */ React.createElement("section", { className: "features-section", id: "features" }, /* @__PURE__ */ React.createElement("div", { className: "page-container" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("span", { className: "section-label" }, "What We Built"), /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, "Every Piece, By Hand"), /* @__PURE__ */ React.createElement("p", { className: "section-subtitle" }, "Understanding SSR means understanding each layer. Here's what this prototype covers.")), /* @__PURE__ */ React.createElement("div", { className: "features-grid" }, FEATURES.map((f, i) => /* @__PURE__ */ React.createElement(Reveal, { key: i }, /* @__PURE__ */ React.createElement("div", { className: "feature-card", id: `feature-${i}` }, /* @__PURE__ */ React.createElement("span", { className: "feature-icon" }, f.icon), /* @__PURE__ */ React.createElement("h3", { className: "feature-title" }, f.title), /* @__PURE__ */ React.createElement("p", { className: "feature-desc" }, f.desc)))))));
}
function CodeShowcase() {
  return /* @__PURE__ */ React.createElement("section", { className: "code-section", id: "code" }, /* @__PURE__ */ React.createElement("div", { className: "page-container" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("span", { className: "section-label" }, "Under the Hood"), /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, "The Code That Powers It"), /* @__PURE__ */ React.createElement("p", { className: "section-subtitle" }, "Two files. Two sides of the same coin. One renders on the server, the other hydrates on the client.")), /* @__PURE__ */ React.createElement("div", { className: "code-blocks" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("div", { className: "code-block", id: "code-server" }, /* @__PURE__ */ React.createElement("div", { className: "code-block-header" }, /* @__PURE__ */ React.createElement("span", { className: "code-dot red" }), /* @__PURE__ */ React.createElement("span", { className: "code-dot yellow" }), /* @__PURE__ */ React.createElement("span", { className: "code-dot green" }), /* @__PURE__ */ React.createElement("span", { className: "code-block-filename" }, "server.ts")), /* @__PURE__ */ React.createElement("div", { className: "code-block-body" }, /* @__PURE__ */ React.createElement("pre", null, `${serverCode()}`)))), /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("div", { className: "code-block", id: "code-client" }, /* @__PURE__ */ React.createElement("div", { className: "code-block-header" }, /* @__PURE__ */ React.createElement("span", { className: "code-dot red" }), /* @__PURE__ */ React.createElement("span", { className: "code-dot yellow" }), /* @__PURE__ */ React.createElement("span", { className: "code-dot green" }), /* @__PURE__ */ React.createElement("span", { className: "code-block-filename" }, "client.tsx")), /* @__PURE__ */ React.createElement("div", { className: "code-block-body" }, /* @__PURE__ */ React.createElement("pre", null, `${clientCode()}`)))))));
}
function serverCode() {
  return `import express from "express";
import { App } from "./app.tsx";
import React from "react";
import { renderToPipeableStream }
  from "react-dom/server";

const app = express();

app.use("/", (req, res) => {
  const { pipe } =
    renderToPipeableStream(
      React.createElement(App),
      {
        onShellReady() {
          res.statusCode = 200;
          res.write(\`
            <!DOCTYPE html>
            <html lang="en">
            <head>...</head>
            <body><div id="root">
          \`);
          pipe(res);
        },
      }
    );
});

app.listen(3000);`;
}
function clientCode() {
  return `import { App } from "./app";
import { hydrateRoot }
  from "react-dom/client";
import React from "react";

// The magic line \u2014 this takes
// server-rendered HTML and
// "hydrates" it, attaching
// event handlers and making
// it fully interactive.

hydrateRoot(
  document.getElementById("root")!,
  <App />
);`;
}
var STEPS = [
  {
    num: 1,
    title: "esbuild Compiles Everything",
    desc: "Two parallel builds run: one targets Node (server.ts \u2192 dist/server.js), the other targets the browser (client.tsx \u2192 dist/public/client.js). Both finish in milliseconds."
  },
  {
    num: 2,
    title: "Express Starts Listening",
    desc: "The compiled server starts on port 3000. Express serves static files from dist/public and catches all routes with a wildcard handler."
  },
  {
    num: 3,
    title: "React Streams the Shell",
    desc: "When a request hits the server, renderToPipeableStream() begins rendering. The onShellReady callback fires as soon as the initial HTML shell is ready, then pipe(res) streams the content directly to the response."
  },
  {
    num: 4,
    title: "HTML Streams to the Browser",
    desc: "The browser starts receiving HTML chunks immediately. Content becomes visible as it arrives \u2014 the shell renders first, then the rest streams in progressively."
  },
  {
    num: 5,
    title: "Hydration Makes It Interactive",
    desc: "The client bundle loads and calls hydrateRoot(). React walks the existing DOM, attaches event handlers, and the page becomes fully interactive \u2014 without re-rendering."
  }
];
function HowItWorks() {
  return /* @__PURE__ */ React.createElement("section", { className: "steps-section", id: "how-it-works" }, /* @__PURE__ */ React.createElement("div", { className: "page-container" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("span", { className: "section-label" }, "Step by Step"), /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, "How It Works"), /* @__PURE__ */ React.createElement("p", { className: "section-subtitle" }, "From build to interaction \u2014 the lifecycle of a server-rendered React page.")), /* @__PURE__ */ React.createElement("div", { className: "steps-timeline" }, STEPS.map((s) => /* @__PURE__ */ React.createElement(Reveal, { key: s.num }, /* @__PURE__ */ React.createElement("div", { className: "step-item", id: `step-${s.num}` }, /* @__PURE__ */ React.createElement("div", { className: "step-number" }, s.num), /* @__PURE__ */ React.createElement("div", { className: "step-content" }, /* @__PURE__ */ React.createElement("h3", { className: "step-title" }, s.title), /* @__PURE__ */ React.createElement("p", { className: "step-desc" }, s.desc))))))));
}
var TECH = [
  { icon: "\u269B\uFE0F", name: "React 19" },
  { icon: "\u{1F680}", name: "Express 5" },
  { icon: "\u26A1", name: "esbuild" },
  { icon: "\u{1F7E6}", name: "TypeScript" },
  { icon: "\u{1F4E6}", name: "ESM Modules" },
  { icon: "\u{1F7E2}", name: "Node.js" }
];
function TechStack() {
  return /* @__PURE__ */ React.createElement("section", { className: "tech-section", id: "stack" }, /* @__PURE__ */ React.createElement("div", { className: "page-container" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("span", { className: "section-label" }, "Built With"), /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, "The Stack"), /* @__PURE__ */ React.createElement("p", { className: "section-subtitle" }, "Modern, minimal, and production-ready. Every dependency earned its place.")), /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("div", { className: "tech-grid" }, TECH.map((t, i) => /* @__PURE__ */ React.createElement("div", { className: "tech-chip", key: i, id: `tech-${i}` }, /* @__PURE__ */ React.createElement("span", { className: "tech-chip-icon" }, t.icon), t.name))))));
}
function Footer() {
  return /* @__PURE__ */ React.createElement("footer", { className: "footer", id: "footer" }, /* @__PURE__ */ React.createElement("div", { className: "page-container" }, /* @__PURE__ */ React.createElement("p", { className: "footer-text" }, "Built from scratch by", " ", /* @__PURE__ */ React.createElement("a", { href: "https://github.com/arogyabichpuria", target: "_blank", rel: "noopener noreferrer" }, "Arogya Bichpuria"), " ", "\u2014 because the best way to learn is to build.")));
}
var App = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Nav, null), /* @__PURE__ */ React.createElement(Hero, null), /* @__PURE__ */ React.createElement(Architecture, null), /* @__PURE__ */ React.createElement(Features, null), /* @__PURE__ */ React.createElement(CodeShowcase, null), /* @__PURE__ */ React.createElement(HowItWorks, null), /* @__PURE__ */ React.createElement(TechStack, null), /* @__PURE__ */ React.createElement(Footer, null));
};

// src/server.ts
import React2 from "react";
import { renderToPipeableStream } from "react-dom/server";
import path from "node:path";
import { fileURLToPath } from "node:url";
var app = express();
var PORT = process.env.PORT || 3e3;
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
app.use(express.static(path.join(process.cwd(), "public")));
app.use("/", (req, res) => {
  const { pipe } = renderToPipeableStream(React2.createElement(App), {
    onShellReady() {
      res.statusCode = 200;
      res.write(`
        <!DOCTYPE html>
        <html lang="en"> 
            <head> 
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta name="description" content="A deep dive into building Server-Side Rendering with React from scratch \u2014 no frameworks, just React, Express, and esbuild wired together by hand.">
                <title>SSR From Scratch \u2014 React, Express & esbuild</title>
                <link rel="stylesheet" href="/styles.css">
                <script type="module" src="/client.js"></script>
            </head>
            <body> 
                <div id="root">`);
      pipe(res);
    },
    onError(error) {
      console.error(error);
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  });
});
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
var server_default = app;
export {
  server_default as default
};
//# sourceMappingURL=index.js.map
