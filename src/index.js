import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import FavoriteMovies from "./components/FavoriteMovies";
import { MoviesProvider } from "./context/MoviesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <MoviesProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/favs" element={<FavoriteMovies />} />
      </Routes>
    </BrowserRouter>
  </MoviesProvider>
);
