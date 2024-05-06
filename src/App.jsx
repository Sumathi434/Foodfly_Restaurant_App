import React from "react";
import "./App.css";
import "./stylesheet.css";
import "./MediaQueries.css";
import LandingPage from "./Foodfly/Pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import Products from "./Foodfly/Components/Products";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products/:firmId/:firmName" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
