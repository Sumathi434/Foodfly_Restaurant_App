import React from 'react';
import { useCart } from "./Cart";
import { API_URL } from "../api";
import Topbar from "../Components/Topbar";

function UserCart() {
    const { cartItems, addToCart , removeFromCart} = useCart();
  
    const handleRemove = (item)=>{
        removeFromCart(item)
    }

    return (
        <>
          <Topbar/>
            <div className='cartheading'>
                <h2>Cart Items</h2>
            </div>
            {cartItems.length === 0 ? (
                <h3 className='cartpara'>Your cart is empty</h3>
            ) : (
                <div>
                    {cartItems.map((item, index) => (
                        <div className='cart-items' key={index}>
                            <div className='cart-img'>
                                <img src={`${API_URL}/uploads/${item.image}`} alt={item.productName} />
                            </div>
                            <div className='nextLine'>
                                <div className='cart-details'>
                                    <h2>{item.productName}</h2>
                                </div>
                                <div className='price-product'>
                                    <h2>₹{item.price}</h2>
                                </div>
                            </div>
                            <div className='removebtn'>
                                <p onClick={()=>handleRemove(item)}>Remove</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default UserCart;
