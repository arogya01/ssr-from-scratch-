import React, { useEffect, useRef } from "react";

/* ——— Scroll Reveal Hook ——— */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

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

/* ——— Reveal Wrapper ——— */
function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

/* ——— Navigation ——— */
function Nav() {
  return (
    <nav className="nav" id="nav">
      <div className="nav-inner">
        <span className="nav-brand">SSR From Scratch</span>
        <ul className="nav-links">
          <li><a href="#architecture">Architecture</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#code">Code</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#stack">Stack</a></li>
        </ul>
      </div>
    </nav>
  );
}

/* ——— Hero Section ——— */
function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="page-container">
        <span className="hero-label">A Learning Experiment</span>
        <h1 className="hero-title">
          Server-Side Rendering.{" "}
          <span className="highlight">From Scratch.</span>
        </h1>
        <p className="hero-subtitle">
          No frameworks. No magic. Just React, Express, and esbuild — wired together
          by hand to understand what really happens when HTML streams to the browser.
        </p>
        <div className="hero-cta-group">
          <a href="#architecture">
            <button className="button-primary" id="cta-explore">Explore the Architecture</button>
          </a>
          <a href="#code">
            <button className="button-secondary" id="cta-code">View the Code</button>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ——— Architecture Diagram ——— */
function Architecture() {
  return (
    <section className="architecture-section" id="architecture">
      <div className="page-container">
        <Reveal>
          <span className="section-label">Architecture</span>
          <h2 className="section-title" style={{ color: "var(--apple-silver-text)" }}>
            The Full Picture
          </h2>
          <p className="section-subtitle">
            A request travels from browser to server and back — streamed as HTML
            chunks, then hydrated into a fully interactive React app.
          </p>
        </Reveal>

        <Reveal>
          <div className="architecture-diagram">
            <div className="arch-node">
              <span className="arch-node-icon">🌐</span>
              <div className="arch-node-title">Browser</div>
              <div className="arch-node-desc">Sends GET request</div>
            </div>

            <span className="arch-arrow">→</span>

            <div className="arch-node">
              <span className="arch-node-icon">⚡</span>
              <div className="arch-node-title">Express</div>
              <div className="arch-node-desc">Catches all routes</div>
            </div>

            <span className="arch-arrow">→</span>

            <div className="arch-node">
              <span className="arch-node-icon">⚛️</span>
              <div className="arch-node-title">React Streaming</div>
              <div className="arch-node-desc">renderToPipeableStream()</div>
            </div>

            <span className="arch-arrow">→</span>

            <div className="arch-node">
              <span className="arch-node-icon">📄</span>
              <div className="arch-node-title">HTML Stream</div>
              <div className="arch-node-desc">Chunks piped to res</div>
            </div>

            <span className="arch-arrow">→</span>

            <div className="arch-node">
              <span className="arch-node-icon">💧</span>
              <div className="arch-node-title">Hydration</div>
              <div className="arch-node-desc">hydrateRoot() binds</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ——— Features ——— */
const FEATURES = [
  {
    icon: "🛠",
    title: "Zero Abstraction",
    desc: "No Next.js, no Remix, no Gatsby. Every piece is visible and deliberate — you own every line.",
  },
  {
    icon: "📦",
    title: "esbuild Bundling",
    desc: "Dual builds in under 50ms — one for the server (Node), one for the client (browser). Blazingly fast.",
  },
  {
    icon: "🌊",
    title: "Streaming SSR",
    desc: "renderToPipeableStream() sends HTML in chunks as React renders. The shell arrives first, then content streams in — no waiting for the full tree.",
  },
  {
    icon: "💧",
    title: "React 19 Hydration",
    desc: "Streamed HTML gets hydrated with hydrateRoot(), making the page interactive without re-rendering.",
  },
  {
    icon: "🔄",
    title: "Isomorphic Components",
    desc: "The same App component runs on both server and client. Write once, render everywhere.",
  },
  {
    icon: "🗂",
    title: "Static Asset Serving",
    desc: "Express serves the bundled client JS from /dist/public, keeping the architecture dead simple.",
  },
  {
    icon: "⚡",
    title: "Instant Feedback",
    desc: "Build and run with a single command. The dev loop is tight — change, build, reload.",
  },
];

function Features() {
  return (
    <section className="features-section" id="features">
      <div className="page-container">
        <Reveal>
          <span className="section-label">What We Built</span>
          <h2 className="section-title">Every Piece, By Hand</h2>
          <p className="section-subtitle">
            Understanding SSR means understanding each layer. Here's what this
            prototype covers.
          </p>
        </Reveal>

        <div className="features-grid">
          {FEATURES.map((f, i) => (
            <Reveal key={i}>
              <div className="feature-card" id={`feature-${i}`}>
                <span className="feature-icon">{f.icon}</span>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ——— Code Showcase ——— */
function CodeShowcase() {
  return (
    <section className="code-section" id="code">
      <div className="page-container">
        <Reveal>
          <span className="section-label">Under the Hood</span>
          <h2 className="section-title">The Code That Powers It</h2>
          <p className="section-subtitle">
            Two files. Two sides of the same coin. One renders on the server,
            the other hydrates on the client.
          </p>
        </Reveal>

        <div className="code-blocks">
          <Reveal>
            <div className="code-block" id="code-server">
              <div className="code-block-header">
                <span className="code-dot red"></span>
                <span className="code-dot yellow"></span>
                <span className="code-dot green"></span>
                <span className="code-block-filename">server.ts</span>
              </div>
              <div className="code-block-body">
                <pre>{`${serverCode()}`}</pre>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="code-block" id="code-client">
              <div className="code-block-header">
                <span className="code-dot red"></span>
                <span className="code-dot yellow"></span>
                <span className="code-dot green"></span>
                <span className="code-block-filename">client.tsx</span>
              </div>
              <div className="code-block-body">
                <pre>{`${clientCode()}`}</pre>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
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

// The magic line — this takes
// server-rendered HTML and
// "hydrates" it, attaching
// event handlers and making
// it fully interactive.

hydrateRoot(
  document.getElementById("root")!,
  <App />
);`;
}

/* ——— How It Works (Timeline) ——— */
const STEPS = [
  {
    num: 1,
    title: "esbuild Compiles Everything",
    desc: "Two parallel builds run: one targets Node (server.ts → dist/server.js), the other targets the browser (client.tsx → dist/public/client.js). Both finish in milliseconds.",
  },
  {
    num: 2,
    title: "Express Starts Listening",
    desc: "The compiled server starts on port 3000. Express serves static files from dist/public and catches all routes with a wildcard handler.",
  },
  {
    num: 3,
    title: "React Streams the Shell",
    desc: "When a request hits the server, renderToPipeableStream() begins rendering. The onShellReady callback fires as soon as the initial HTML shell is ready, then pipe(res) streams the content directly to the response.",
  },
  {
    num: 4,
    title: "HTML Streams to the Browser",
    desc: "The browser starts receiving HTML chunks immediately. Content becomes visible as it arrives — the shell renders first, then the rest streams in progressively.",
  },
  {
    num: 5,
    title: "Hydration Makes It Interactive",
    desc: "The client bundle loads and calls hydrateRoot(). React walks the existing DOM, attaches event handlers, and the page becomes fully interactive — without re-rendering.",
  },
];

function HowItWorks() {
  return (
    <section className="steps-section" id="how-it-works">
      <div className="page-container">
        <Reveal>
          <span className="section-label">Step by Step</span>
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            From build to interaction — the lifecycle of a server-rendered React page.
          </p>
        </Reveal>

        <div className="steps-timeline">
          {STEPS.map((s) => (
            <Reveal key={s.num}>
              <div className="step-item" id={`step-${s.num}`}>
                <div className="step-number">{s.num}</div>
                <div className="step-content">
                  <h3 className="step-title">{s.title}</h3>
                  <p className="step-desc">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ——— Tech Stack ——— */
const TECH = [
  { icon: "⚛️", name: "React 19" },
  { icon: "🚀", name: "Express 5" },
  { icon: "⚡", name: "esbuild" },
  { icon: "🟦", name: "TypeScript" },
  { icon: "📦", name: "ESM Modules" },
  { icon: "🟢", name: "Node.js" },
];

function TechStack() {
  return (
    <section className="tech-section" id="stack">
      <div className="page-container">
        <Reveal>
          <span className="section-label">Built With</span>
          <h2 className="section-title">The Stack</h2>
          <p className="section-subtitle">
            Modern, minimal, and production-ready. Every dependency earned its place.
          </p>
        </Reveal>

        <Reveal>
          <div className="tech-grid">
            {TECH.map((t, i) => (
              <div className="tech-chip" key={i} id={`tech-${i}`}>
                <span className="tech-chip-icon">{t.icon}</span>
                {t.name}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ——— Footer ——— */
function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="page-container">
        <p className="footer-text">
          Built from scratch by{" "}
          <a href="https://github.com/arogyabichpuria" target="_blank" rel="noopener noreferrer">
            Arogya Bichpuria
          </a>{" "}
          — because the best way to learn is to build.
        </p>
      </div>
    </footer>
  );
}

/* ——— App ——— */
export const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Architecture />
      <Features />
      <CodeShowcase />
      <HowItWorks />
      <TechStack />
      <Footer />
    </>
  );
};
