import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import "../styles/style.css";
import { Intro } from "./components/introduction";
// import { TemplateA4 } from "./components/templateA4";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Intro />
  </StrictMode>,
);
