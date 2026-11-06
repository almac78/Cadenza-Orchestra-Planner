/* Loads Bootstrap's CSS, and my own CSS on top of it. */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//Enables client-side routing
import { BrowserRouter } from "react-router-dom";
//Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
//Custom application styling (loaded after Bootstrap so it can override Bootstrap styles)
import "./styles/app.css";

import App from "./App";
// Context providers to make login state available to every component inside it.
import { AuthProvider } from "./contexts/AuthProvider";
import { EventsProvider } from "./contexts/EventsProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <EventsProvider>
          <App />
        </EventsProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
