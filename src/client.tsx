import { App } from "./app";
import { hydrateRoot } from "react-dom/client";
import React from "react";

hydrateRoot(document.getElementById("root")!, <App />);
