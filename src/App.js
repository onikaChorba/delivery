import "./App.scss";
import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Shop from "./sections/Shop/Shop";
import ShopingCards from "./sections/ShopingCards/ShopingCards";
import { Header } from "../src/components/Header/Header";
function App() {
  const [selectedStoreId, setSelectedStoreId] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);

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
      products: [
        {
          id: 1,
          name: "Продукт 1",
          description: "Опис продукту 1",
          price: 200,
        },
      ],
    },
    {
      id: 2,
      name: "Магазин 2",
      products: [
        {
          id: 1,
          name: "Продукт 1",
          description: "Опис продукту 1",
          price: 230,
        },
        {
          id: 2,
          name: "Продукт 2",
          description: "Опис продукту 2",
          price: 300,
        },
      ],
    },
    {
      id: 3,
      name: "Магазин 3",
      products: [
        {
          id: 1,
          name: "Продукт 1",
          description: "Опис продукту 1",
          price: 10,
        },
        {
          id: 2,
          name: "Продукт 2",
          description: "Опис продукту 2",
          price: 230,
        },
        {
          id: 3,
          name: "Продукт 3",
          description: "Опис продукту 3",
          price: 290,
        },
        {
          id: 4,
          name: "Продукт 4",
          description: "Опис продукту 4",
          price: 300,
        },
        {
          id: 5,
          name: "Продукт 5",
          description: "Опис продукту 5",
          price: 700,
        },
        {
          id: 6,
          name: "Продукт 6",
          description: "Опис продукту 6",
          price: 800,
        },
      ],
    },
  ];

  const handleAddToCart = (product) => {
    setSelectedProducts((prevSelectedProducts) => [
      ...prevSelectedProducts,
      product,
    ]);
  };
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Shop
                  stores={stores}
                  selectedStoreId={selectedStoreId}
                  handleSelectStore={handleSelectStore}
                  getSelectedStore={getSelectedStore}
                />
              }
            />
            <Route
              path="/shoppingCards"
              element={
                <ShopingCards
                  selectedProducts={selectedProducts}
                  handleAddToCart={handleAddToCart}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
