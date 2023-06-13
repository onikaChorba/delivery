import React from "react";
import Shops from "../../components/Shops/Shops";
import ShopsProducts from "../../components/ShopsProducts/ShopsProducts";
export default function Shop({
  stores,
  handleSelectStore,
  getSelectedStore,
  selectedStoreId,
}) {
  return (
    <div className="shopBlock">
      <div style={{ width: "28%" }}>
        <Shops stores={stores} onSelectStore={handleSelectStore} />
      </div>
      <div style={{ width: "70%" }}>
        {selectedStoreId && (
          <ShopsProducts products={getSelectedStore().products} />
        )}
      </div>
    </div>
  );
}
