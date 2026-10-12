import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./TaTeTi.css";

const elemento = document.getElementById("ta-te-ti");

if (elemento) {
  createRoot(elemento).render(<App />);
}