import React from "react";
import { useState } from "react";
import "./ShopsProducts.scss";

export default function ShopsProducts({ products }) {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    console.log("k");
  };
  return (
    <div className="shopProducts">
      {products.map((product) => (
        <div key={product.id} className="product">
          <div className="product__img"></div>
          <h3 className="product__name">{product.name}</h3>
          <button
            className="product__button"
            onClick={() => addToCart(product)}
          >
            Add card
          </button>
        </div>
      ))}
    </div>
  );
}
