import React from "react";
import Topbar from "../Components/Topbar";
import Items from "../Components/Items";
import Chains from "../Components/Chains";
import FirmCollections from "../Components/FirmCollections";
import Footer from "../Components/Footer";

function LandingPage() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Items />
        <Chains />
        <FirmCollections />
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
