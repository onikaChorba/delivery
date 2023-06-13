import React from "react";
import { useState } from "react";
import "./ShopsProducts.scss";

export default function ShopsProducts({ products }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    console.log("Product added to cart:", product);
    console.log("Updated cart items:", cartItems);
  };

  console.log("Received products:", products);

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
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
