import React from "react";
import "./ShopsProducts.scss";
export default function ShopsProducts({ products }) {
  return (
    <div className="shopProducts">
      {products.map((product) => (
        <div key={product.id} className="product">
          <div className="product__img"></div>
          <h3 className="product__name">Product Name</h3>
          <button className="product__button">Add card</button>
        </div>
      ))}
    </div>
  );
}
