// src/server.ts
import express from "express";

// src/app.tsx
import { useEffect, useRef } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx("div", { ref, className: `reveal ${className}`, children });
}
function Nav() {
  return /* @__PURE__ */ jsx("nav", { className: "nav", id: "nav", children: /* @__PURE__ */ jsxs("div", { className: "nav-inner", children: [
    /* @__PURE__ */ jsx("span", { className: "nav-brand", children: "SSR From Scratch" }),
    /* @__PURE__ */ jsxs("ul", { className: "nav-links", children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#architecture", children: "Architecture" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#features", children: "Features" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#code", children: "Code" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#how-it-works", children: "How It Works" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#stack", children: "Stack" }) })
    ] })
  ] }) });
}
function Hero() {
  return /* @__PURE__ */ jsx("section", { className: "hero", id: "hero", children: /* @__PURE__ */ jsxs("div", { className: "page-container", children: [
    /* @__PURE__ */ jsx("span", { className: "hero-label", children: "A Learning Experiment" }),
    /* @__PURE__ */ jsxs("h1", { className: "hero-title", children: [
      "Server-Side Rendering.",
      " ",
      /* @__PURE__ */ jsx("span", { className: "highlight", children: "From Scratch." })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "hero-subtitle", children: "No frameworks. No magic. Just React, Express, and esbuild \u2014 wired together by hand to understand what really happens when HTML streams to the browser." }),
    /* @__PURE__ */ jsxs("div", { className: "hero-cta-group", children: [
      /* @__PURE__ */ jsx("a", { href: "#architecture", children: /* @__PURE__ */ jsx("button", { className: "button-primary", id: "cta-explore", children: "Explore the Architecture" }) }),
      /* @__PURE__ */ jsx("a", { href: "#code", children: /* @__PURE__ */ jsx("button", { className: "button-secondary", id: "cta-code", children: "View the Code" }) })
    ] })
  ] }) });
}
function Architecture() {
  return /* @__PURE__ */ jsx("section", { className: "architecture-section", id: "architecture", children: /* @__PURE__ */ jsxs("div", { className: "page-container", children: [
    /* @__PURE__ */ jsxs(Reveal, { children: [
      /* @__PURE__ */ jsx("span", { className: "section-label", children: "Architecture" }),
      /* @__PURE__ */ jsx("h2", { className: "section-title", style: { color: "var(--apple-silver-text)" }, children: "The Full Picture" }),
      /* @__PURE__ */ jsx("p", { className: "section-subtitle", children: "A request travels from browser to server and back \u2014 streamed as HTML chunks, then hydrated into a fully interactive React app." })
    ] }),
    /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "architecture-diagram", children: [
      /* @__PURE__ */ jsxs("div", { className: "arch-node", children: [
        /* @__PURE__ */ jsx("span", { className: "arch-node-icon", children: "\u{1F310}" }),
        /* @__PURE__ */ jsx("div", { className: "arch-node-title", children: "Browser" }),
        /* @__PURE__ */ jsx("div", { className: "arch-node-desc", children: "Sends GET request" })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "arch-arrow", children: "\u2192" }),
      /* @__PURE__ */ jsxs("div", { className: "arch-node", children: [
        /* @__PURE__ */ jsx("span", { className: "arch-node-icon", children: "\u26A1" }),
        /* @__PURE__ */ jsx("div", { className: "arch-node-title", children: "Express" }),
        /* @__PURE__ */ jsx("div", { className: "arch-node-desc", children: "Catches all routes" })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "arch-arrow", children: "\u2192" }),
      /* @__PURE__ */ jsxs("div", { className: "arch-node", children: [
        /* @__PURE__ */ jsx("span", { className: "arch-node-icon", children: "\u269B\uFE0F" }),
        /* @__PURE__ */ jsx("div", { className: "arch-node-title", children: "React Streaming" }),
        /* @__PURE__ */ jsx("div", { className: "arch-node-desc", children: "renderToPipeableStream()" })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "arch-arrow", children: "\u2192" }),
      /* @__PURE__ */ jsxs("div", { className: "arch-node", children: [
        /* @__PURE__ */ jsx("span", { className: "arch-node-icon", children: "\u{1F4C4}" }),
        /* @__PURE__ */ jsx("div", { className: "arch-node-title", children: "HTML Stream" }),
        /* @__PURE__ */ jsx("div", { className: "arch-node-desc", children: "Chunks piped to res" })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "arch-arrow", children: "\u2192" }),
      /* @__PURE__ */ jsxs("div", { className: "arch-node", children: [
        /* @__PURE__ */ jsx("span", { className: "arch-node-icon", children: "\u{1F4A7}" }),
        /* @__PURE__ */ jsx("div", { className: "arch-node-title", children: "Hydration" }),
        /* @__PURE__ */ jsx("div", { className: "arch-node-desc", children: "hydrateRoot() binds" })
      ] })
    ] }) })
  ] }) });
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
  return /* @__PURE__ */ jsx("section", { className: "features-section", id: "features", children: /* @__PURE__ */ jsxs("div", { className: "page-container", children: [
    /* @__PURE__ */ jsxs(Reveal, { children: [
      /* @__PURE__ */ jsx("span", { className: "section-label", children: "What We Built" }),
      /* @__PURE__ */ jsx("h2", { className: "section-title", children: "Every Piece, By Hand" }),
      /* @__PURE__ */ jsx("p", { className: "section-subtitle", children: "Understanding SSR means understanding each layer. Here's what this prototype covers." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "features-grid", children: FEATURES.map((f, i) => /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "feature-card", id: `feature-${i}`, children: [
      /* @__PURE__ */ jsx("span", { className: "feature-icon", children: f.icon }),
      /* @__PURE__ */ jsx("h3", { className: "feature-title", children: f.title }),
      /* @__PURE__ */ jsx("p", { className: "feature-desc", children: f.desc })
    ] }) }, i)) })
  ] }) });
}
function CodeShowcase() {
  return /* @__PURE__ */ jsx("section", { className: "code-section", id: "code", children: /* @__PURE__ */ jsxs("div", { className: "page-container", children: [
    /* @__PURE__ */ jsxs(Reveal, { children: [
      /* @__PURE__ */ jsx("span", { className: "section-label", children: "Under the Hood" }),
      /* @__PURE__ */ jsx("h2", { className: "section-title", children: "The Code That Powers It" }),
      /* @__PURE__ */ jsx("p", { className: "section-subtitle", children: "Two files. Two sides of the same coin. One renders on the server, the other hydrates on the client." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "code-blocks", children: [
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "code-block", id: "code-server", children: [
        /* @__PURE__ */ jsxs("div", { className: "code-block-header", children: [
          /* @__PURE__ */ jsx("span", { className: "code-dot red" }),
          /* @__PURE__ */ jsx("span", { className: "code-dot yellow" }),
          /* @__PURE__ */ jsx("span", { className: "code-dot green" }),
          /* @__PURE__ */ jsx("span", { className: "code-block-filename", children: "server.ts" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "code-block-body", children: /* @__PURE__ */ jsx("pre", { children: `${serverCode()}` }) })
      ] }) }),
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "code-block", id: "code-client", children: [
        /* @__PURE__ */ jsxs("div", { className: "code-block-header", children: [
          /* @__PURE__ */ jsx("span", { className: "code-dot red" }),
          /* @__PURE__ */ jsx("span", { className: "code-dot yellow" }),
          /* @__PURE__ */ jsx("span", { className: "code-dot green" }),
          /* @__PURE__ */ jsx("span", { className: "code-block-filename", children: "client.tsx" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "code-block-body", children: /* @__PURE__ */ jsx("pre", { children: `${clientCode()}` }) })
      ] }) })
    ] })
  ] }) });
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
  return /* @__PURE__ */ jsx("section", { className: "steps-section", id: "how-it-works", children: /* @__PURE__ */ jsxs("div", { className: "page-container", children: [
    /* @__PURE__ */ jsxs(Reveal, { children: [
      /* @__PURE__ */ jsx("span", { className: "section-label", children: "Step by Step" }),
      /* @__PURE__ */ jsx("h2", { className: "section-title", children: "How It Works" }),
      /* @__PURE__ */ jsx("p", { className: "section-subtitle", children: "From build to interaction \u2014 the lifecycle of a server-rendered React page." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "steps-timeline", children: STEPS.map((s) => /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "step-item", id: `step-${s.num}`, children: [
      /* @__PURE__ */ jsx("div", { className: "step-number", children: s.num }),
      /* @__PURE__ */ jsxs("div", { className: "step-content", children: [
        /* @__PURE__ */ jsx("h3", { className: "step-title", children: s.title }),
        /* @__PURE__ */ jsx("p", { className: "step-desc", children: s.desc })
      ] })
    ] }) }, s.num)) })
  ] }) });
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
  return /* @__PURE__ */ jsx("section", { className: "tech-section", id: "stack", children: /* @__PURE__ */ jsxs("div", { className: "page-container", children: [
    /* @__PURE__ */ jsxs(Reveal, { children: [
      /* @__PURE__ */ jsx("span", { className: "section-label", children: "Built With" }),
      /* @__PURE__ */ jsx("h2", { className: "section-title", children: "The Stack" }),
      /* @__PURE__ */ jsx("p", { className: "section-subtitle", children: "Modern, minimal, and production-ready. Every dependency earned its place." })
    ] }),
    /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("div", { className: "tech-grid", children: TECH.map((t, i) => /* @__PURE__ */ jsxs("div", { className: "tech-chip", id: `tech-${i}`, children: [
      /* @__PURE__ */ jsx("span", { className: "tech-chip-icon", children: t.icon }),
      t.name
    ] }, i)) }) })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "footer", id: "footer", children: /* @__PURE__ */ jsx("div", { className: "page-container", children: /* @__PURE__ */ jsxs("p", { className: "footer-text", children: [
    "Built from scratch by",
    " ",
    /* @__PURE__ */ jsx("a", { href: "https://github.com/arogyabichpuria", target: "_blank", rel: "noopener noreferrer", children: "Arogya Bichpuria" }),
    " ",
    "\u2014 because the best way to learn is to build."
  ] }) }) });
}
var App = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Architecture, {}),
    /* @__PURE__ */ jsx(Features, {}),
    /* @__PURE__ */ jsx(CodeShowcase, {}),
    /* @__PURE__ */ jsx(HowItWorks, {}),
    /* @__PURE__ */ jsx(TechStack, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
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
