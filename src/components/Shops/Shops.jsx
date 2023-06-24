import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Shops.scss";
import { fetchСlothes } from "../../store/clothesSlice";
import { fetchBurgers } from "../../store/burgersSlice";

export default function Shops() {
  const dispatch = useDispatch();
  const { data: clothes, isLoading: clothesLoading } = useSelector(
    (state) => state.clothes
  );
  const [showСlothes, setShowСlothes] = useState(false);
  const { data: burgers, isLoading: burgersLoading } = useSelector(
    (state) => state.burgers
  );
  const [showBurgers, setShowBurgers] = useState(false);

  useEffect(() => {
    dispatch(fetchСlothes());
    dispatch(fetchBurgers());
  }, [dispatch]);

  const handleButtonClick = () => {
    setShowСlothes((prevShowСlothes) => {
      if (prevShowСlothes) {
        setShowBurgers(false);
      }
      return !prevShowСlothes;
    });
  };

  const handleButtonClick1 = () => {
    setShowBurgers((prevShowBurgers) => {
      if (prevShowBurgers) {
        setShowСlothes(false);
      }
      return !prevShowBurgers;
    });
  };

  if (clothesLoading || burgersLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="mainBlock">
      <div className="mainBlock__shops">
        <h1 className="shops__title">Shops:</h1>
        <div className="shops__button">
          <button onClick={handleButtonClick} className="shops__name">
            Сlothes
          </button>
          <button className="shops__name" onClick={handleButtonClick1}>
            Burgers
          </button>
        </div>
      </div>
      <div className="mainBlock__products">
        <div className="shopProducts">
          {showСlothes && renderProducts(clothes)}
          {showBurgers && renderProducts(burgers)}
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
