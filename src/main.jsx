import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import "../styles/style.css";
import {Intro} from "./components/introduction";
import IntroRender from "./components/cvLetter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Intro />
    {/* <IntroRender/> */}
  </StrictMode>,
);
