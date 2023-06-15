import React, { useState } from "react";
import "./ShopsProducts.scss";
import ShopingCard from "../ShoppingCard/ShopingCard";

export default function ShopsProducts({ products }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div className="shopProducts" style={{ width: "70%" }}>
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
      <div style={{ width: "28%" }}>
        <ShopingCard cartItems={cartItems} />
      </div>
    </div>
  );
}
