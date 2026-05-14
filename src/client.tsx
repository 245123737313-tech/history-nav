import React from "react";
import ReactDOM from "react-dom/client";
import { StartClient } from "@tanstack/react-start/client";
import { getRouter } from "./router";
import "./styles.css";

// Ensure the router is instantiated so the framework registers it for hydration
getRouter();

ReactDOM.hydrateRoot(document, <StartClient />);
