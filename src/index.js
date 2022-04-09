import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Car from "./Car";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Car />
  </StrictMode>
);
