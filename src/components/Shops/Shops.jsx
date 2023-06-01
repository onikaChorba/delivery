import React from "react";
import "./Shops.scss";
export default function Shops({ stores, onSelectStore, setSelectedStore }) {
  const handleStoreClick = (store) => {
    onSelectStore(store.id);
  };

  return (
    <div className="shops">
      <h1 className="shops__title">Shops:</h1>
      <ul>
        {stores.map((store) => (
          <li
            key={store.id}
            onClick={() => handleStoreClick(store)}
            className="shops__name"
          >
            {store.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
