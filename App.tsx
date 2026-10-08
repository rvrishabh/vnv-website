import { SpeedInsights } from "@vercel/speed-insights/react";
import { AppRoutes } from "./routes";
import "./index.css";

/** Router-agnostic app shell: main.tsx wraps it in BrowserRouter, entry-server.tsx in StaticRouter. */
export default function App() {
  return (
    <>
      <AppRoutes />
      <SpeedInsights />
    </>
  );
}
