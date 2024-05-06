import React, { useState } from "react";
import { logoImage } from "../data";

function Footer() {
  const [store, setStore] = useState(logoImage);

  return (
    <>
      <div className="footerSection">
        <div className="footerHeader">
          <h2>
            <b>For better experience,download the Foodfly app now</b>
          </h2>
          <div className="appImage">
            {store.map((item) => {
              return (
                <>
                  <img src={item.item_uri} alt="playStore" />
                </>
              );
            })}
          </div>
        </div>
      </div>
       <div className="footerBelowsection">
        <div className="allsections">
          <div className="section1">
            <h2>Foodfly</h2>
            <p>
              Foodfly Restaurant designed and
              developed by Nagasumathi
            </p>
          </div>
          <div className="section2">
            <ul>
              <li>
                <h3>Company</h3>
              </li>
              <li>About</li>
              <li>Careers</li>
              <li>Team</li>
              <li>Foodfly one</li>
              <li>Foodfly Instamart</li>
            </ul>
          </div>
          <div className="section3">
            <ul>
              <li>
                <h3>Contact us</h3>
              </li>
              <li>Help & Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
              <li>
                <h3>Legal</h3>
              </li>
              <li>Terms & Conditions</li>
              <li>Cookie Policy</li>
              <li>Privacy policy</li>
              <li>Investor Relations</li>
            </ul>
          </div>
          <div className="section4">
            <ul>
              <li>
                <h3>We deliver to:</h3>
              </li>
              <li>Bangalore</li>
              <li>Gurgaon</li>
              <li>Hyderabad</li>
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Pune</li>
            </ul>
          </div> 
        </div>
      </div> 
    </>
  );
}

export default Footer;
