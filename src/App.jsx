import React from "react";
import "./App.css";
import "./stylesheet.css";
import "./MediaQueries.css";
import LandingPage from "./Foodfly/Pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import Products from "./Foodfly/Components/Products";
import Usercart from "./Foodfly/Components/Usercart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products/:firmId/:firmName" element={<Products />} />
        <Route path="/cart" element={<Usercart/>}/>
      </Routes>
    </>
  );
}

export default App;
