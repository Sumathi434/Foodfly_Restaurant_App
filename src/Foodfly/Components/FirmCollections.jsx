import React, { useState, useEffect } from "react";
import { API_URL } from "../api";
import { Link } from "react-router-dom";

function FirmCollections() {
  const [firmData, setFirmData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [active, setActive] = useState("all");

  const firmDataHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/vendor/all-vendors`);
      const newFirmData = await response.json();
      setFirmData(newFirmData.vendors);
    } catch (error) {
      alert("Firm data failed to fetch");
    }
  };

  useEffect(() => {
    firmDataHandler();
  }, []);

  const filterHandler = (region, category) => {
    setSelectedRegion(region);
    setActive(category);
  };

  return (
    <>
      <h1 className="firmHeading">
        Restaurants with online food delivery in Hyderabad
      </h1>
      <div className="filterButton">
        <button
          onClick={() => filterHandler("All", "all")}
          className={active === "all" ? "activeButton" : ""}
        >
          All
        </button>
        <button
          onClick={() => filterHandler("South-Indian", "south-indian")}
          className={active === "south-indian" ? "activeButton" : ""}
        >
          South-Indian
        </button>
        <button
          onClick={() => filterHandler("North-Indian", "north-indian")}
          className={active === "north-indian" ? "activeButton" : ""}
        >
          North-Indian
        </button>
        <button
          onClick={() => filterHandler("Chinese", "chinese")}
          className={active === "chinese" ? "activeButton" : ""}
        >
          Chinese
        </button>
        <button
          onClick={() => filterHandler("Bakery", "bakery")}
          className={active === "bakery" ? "activeButton" : ""}
        >
          Bakery
        </button>
      </div>
      <div className="firmChainSection">
        {firmData.map((props) => {
          return props.firm.map((item) => {
            if (
              selectedRegion === "All" ||
              item.region.includes(selectedRegion.toLocaleLowerCase())
            ) {
              return (
                <Link
                  to={`/products/${item._id}/${item.firmName}`}
                  className="linkfirm"
                  key={item._id}
                >
                  <div className="firmBox">
                    <div className="sectionFirm">
                      <img
                        src={`${API_URL}/uploads/${item.image}`}
                        alt={item.firmName}
                      />
                    </div>
                    <div className="firmDetails">
                      <ul>
                        <li className="firmname">{item.firmName}</li>
                        <li className="cateArea">{item.region}</li>
                        <li className="cateArea">{item.area}</li>
                      </ul>
                    </div>
                  </div>
                </Link>
              );
            } else {
              return null;
            }
          });
        })}
      </div>
    </>
  );
}

export default FirmCollections;
