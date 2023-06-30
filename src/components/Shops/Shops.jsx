import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Shops.scss";
import { fetchСlothes } from "../../store/clothesSlice";
import { fetchBurgers } from "../../store/burgersSlice";
import { fetchDrinks } from "../../store/drinksSlice";

export default function Shops() {
  const dispatch = useDispatch();
  const { data: clothes, isLoading: clothesLoading } = useSelector(
    (state) => state.clothes
  );
  const [showСlothes, setShowСlothes] = useState(false);
  const { data: burgers, isLoading: burgersLoading } = useSelector(
    (state) => state.burgers
  );
  const [showDrinks, setShowDrinks] = useState(false);
  const { data: drinks, isLoading: drinksLoading } = useSelector(
    (state) => state.drinks
  );
  const [showBurgers, setShowBurgers] = useState(false);

  useEffect(() => {
    dispatch(fetchСlothes());
    dispatch(fetchBurgers());
    dispatch(fetchDrinks());
  }, [dispatch]);

  const handleButtonClick = (category) => {
    setShowСlothes(category === "clothes");
    setShowBurgers(category === "burgers");
    setShowDrinks(category === "drinks");
  };

  if (clothesLoading || burgersLoading || drinksLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="mainBlock">
      <div className="mainBlock__shops">
        <h1 className="shops__title">Shops:</h1>
        <div className="shops__button">
          <button
            className="shops__name"
            onClick={() => handleButtonClick("drinks")}
          >
            Drinks
          </button>
          <button
            className="shops__name"
            onClick={() => handleButtonClick("burgers")}
          >
            Burgers
          </button>
          <button
            className="shops__name"
            onClick={() => handleButtonClick("clothes")}
          >
            Clothes
          </button>
        </div>
      </div>
      <div className="mainBlock__products">
        <div className="shopProducts">
          {showСlothes && renderProducts(clothes)}
          {showBurgers && renderProducts(burgers)}
          {showDrinks && renderProducts(drinks)}
        </div>
      </div>
    </div>
  );
}

function renderProducts(items) {
  return items?.map((item) => (
    <div key={item.id} className="product">
      <img
        className="product__img"
        src={item.image || item.img}
        alt={item.id}
      ></img>
      <h3 className="product__name">{item.title || item.name}</h3>
      <p>
        <b>Price:</b> <span>{item.price}</span>
      </p>
      <button className="product__button">Add to Cart</button>
    </div>
  ));
}
