import React, { useState, useEffect } from "react";
import { API_URL } from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

function Chains() {
  const [vendorData, setVendorData] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [loading, setLoading] = useState(true);

  const vendorDataHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/vendor/all-vendors`);
      const newData = await response.json();

      setVendorData(newData);
      setLoading(false);
    } catch (error) {
      alert("Data failed to fetch");
      setLoading(true);
    }
  };

  useEffect(() => {
    vendorDataHandler();
  }, []);

  // javascript code for imageSlider bar
  const scrollHandler = (direction) => {
    const gallery = document.getElementById("chainsGallery");
    const ScrollAmount = 500;

    if (direction === "left") {
      gallery.scrollTo({
        left: gallery.scrollLeft - ScrollAmount,
        behavior: "smooth",
      });
    } else if (direction === "right") {
      gallery.scrollTo({
        left: gallery.scrollLeft + ScrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="loaderSection">
      {loading && (
        <>
          <div className="loader">
            <RotatingLines
              visible={true}
              height="96"
              width="96"
              color="grey"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        </>
      )}
      </div>

      <div className="chainsbtn">
        <h1 className="chainsHeading">Top restaurant chains in Hyderabad</h1>
        <div className="btn">
          <button onClick={() => scrollHandler("left")}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button onClick={() => scrollHandler("right")}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
      <div
        className="chainSection"
        id="chainsGallery"
        onScroll={(e) => setScrollPosition(e.target.scrollLeft)}>
        {vendorData.vendors &&
          vendorData.vendors.map((vendor) => {
            return (
              <>
                <div className="vendorData">
                  {vendor.firm.map((item) => {
                    return (
                      <>
                        <Link
                          to={`/products/${item._id}/${item.firmName}`}
                          className="linkfirm">
                          <div className="firmChains">
                            <div className="firmImage">
                              <img src={`${API_URL}/uploads/${item.image}`} />
                              <div className="firmoffer">{item.offer}</div>
                            </div>
                          </div>
                          <div className="chainsfirm">
                            <ul>
                              <strong>
                                <li className="firmName">{item.firmName}</li>
                              </strong>
                              <li className="category">{item.region}</li>
                              <li className="area">{item.area}</li>
                            </ul>
                          </div>
                        </Link>
                      </>
                    );
                  })}
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}

export default Chains;
