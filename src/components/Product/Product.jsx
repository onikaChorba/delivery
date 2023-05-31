import React from "react";
import "./Product.scss";
export default function Product() {
  return (
    <div className="product">
      <div className="product__img"></div>
      <h3 className="product__name">Product Name</h3>
      <button className="product__button">Add card</button>
    </div>
  );
}
