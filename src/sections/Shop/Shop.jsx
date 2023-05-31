import React from "react";
import Shops from "../../components/Shops/Shops";
import ShopsProducts from "../../components/ShopsProducts/ShopsProducts";
export default function Shop() {
  return (
    <div className="shopBlock">
      <div style={{ width: "28%" }}>
        <Shops />
      </div>
      <div style={{ width: "70%" }}>
        <ShopsProducts />
      </div>
    </div>
  );
}
