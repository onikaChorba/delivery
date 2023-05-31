import React from "react";
import Product from "../Product/Product";
import "./ShopsProducts.scss";
export default function ShopsProducts() {
  return (
    <div className="shopProducts">
      <div className="shopProducts__product">
        <Product />
      </div>{" "}
      <div className="shopProducts__product">
        <Product />
      </div>{" "}
      <div className="shopProducts__product">
        <Product />
      </div>{" "}
      <div className="shopProducts__product">
        <Product />
      </div>
    </div>
  );
}
