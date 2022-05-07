import ReactDOM from "react-dom/client";
import "./scss/App.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("app_kcal"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
