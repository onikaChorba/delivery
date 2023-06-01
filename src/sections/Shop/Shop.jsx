import React from "react";
import { useState } from "react";
import Shops from "../../components/Shops/Shops";
import ShopsProducts from "../../components/ShopsProducts/ShopsProducts";
export default function Shop() {
  const [selectedStoreId, setSelectedStoreId] = useState(null);

  const handleSelectStore = (storeId) => {
    setSelectedStoreId(storeId);
  };

  const getSelectedStore = () => {
    return stores.find((store) => store.id === selectedStoreId);
  };

  const stores = [
    {
      id: 1,
      name: "Магазин 1",
      products: [{ id: 1, name: "Продукт 1", description: "Опис продукту 1" }],
    },
    {
      id: 2,
      name: "Магазин 2",
      products: [
        { id: 1, name: "Продукт 1", description: "Опис продукту 1" },
        { id: 2, name: "Продукт 2", description: "Опис продукту 2" },
      ],
    },
    {
      id: 3,
      name: "Магазин 3",
      products: [
        { id: 1, name: "Продукт 1", description: "Опис продукту 1" },
        { id: 2, name: "Продукт 2", description: "Опис продукту 2" },
        { id: 3, name: "Продукт 3", description: "Опис продукту 3" },
      ],
    },
  ];

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
