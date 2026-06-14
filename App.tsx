import { BrowserRouter } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { AppRoutes } from "./routes";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <SpeedInsights />
    </BrowserRouter>
  );
}
