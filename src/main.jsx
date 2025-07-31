import { createRoot } from "react-dom/client";
import "./index.css"; // Ensure you have an index.css for Tailwind
import App from "./App.jsx";
import { ThemeProvider } from "./Context/ThemeContext.js";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
