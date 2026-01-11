import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WeatherSearch from "./WeatherSearch";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="weather">
      <h1>Weather Search Engine</h1>
      <WeatherSearch />
    </div>
  </StrictMode>
);
