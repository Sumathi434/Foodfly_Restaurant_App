import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../api";
import Topbar from "./Topbar";
import Footer from "./Footer";

function Products() {
  const [product, setProducts] = useState([]);
  const { firmId, firmName } = useParams();

  const productHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/product/get-products/${firmId}`);
      const newProductData = await response.json();
      setProducts(newProductData.products);
    } catch (error) {
      alert("Products not fetch try again", error);
    }
  };

  useEffect(() => {
    productHandler();
  }, []);

  return (
    <>
      <Topbar />
      <div className="productData">
        <h1 className="firmHead">{firmName}</h1>
        {product.map((item) => {
          return (
            <>
              <div className="productGroup">
                <div className="productsDetails">
                  <div className="productHeading">{item.productName}</div>
                  <div className="price">₹{item.price}</div>
                  <div className="description">{item.description}</div>
                </div>
                <div className="productSection">
                  <img src={`${API_URL}/uploads/${item.image}`} />
                  <div className="addbtn">ADD</div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <Footer/>
    </>
    
  );
}

export default Products;
