import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../api";
import Topbar from "./Topbar";
import Footer from "./Footer";
import { useCart } from "./Cart";

function Products() {
  const [products, setProducts] = useState([]);
  const { firmId, firmName } = useParams();
  const { addToCart, cartItems , increaseQuantity,decreaseQuantity} = useCart();

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_URL}/product/get-products/${firmId}`);
      const { products } = await response.json();
      setProducts(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      alert("Products could not be fetched. Please try again.");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Topbar />
      <div className="productData">
        <h1 className="firmHead">{firmName}</h1>
        {products.map((item) => (
          <div className="productGroup" key={item._id}>
            <div className="productsDetails">
              <div className="productHeading">{item.productName}</div>
              <div className="price">₹{item.price}</div>
              <div className="description">{item.description}</div>
            </div>
            <div className="productSection">
              <img src={`${API_URL}/uploads/${item.image}`} alt={item.productName} />
              <div onClick={() => addToCart(item)} className="addbtn">ADD</div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Products;
