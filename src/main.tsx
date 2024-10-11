import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/styles.css";
import DefaultRouter from "./routes/DefaultRouter.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DefaultRouter />
  </StrictMode>
);
