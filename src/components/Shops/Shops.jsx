import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Shops.scss";
import { fetchСlothes } from "../../store/clothesSlice";
export default function Shops() {
  const dispatch = useDispatch();
  const clothes = useSelector((state) => state.clothes);
  const [showСlothes, setShowСlothes] = useState(false);

  useEffect(() => {
    dispatch(fetchСlothes());
  }, [dispatch]);

  const handleButtonClick = () => {
    setShowСlothes((prevShowСlothes) => !prevShowСlothes);
  };

  if (clothes.isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="mainBlock">
      <div className="mainBlock__shops">
        <h1 className="shops__title">Shops:</h1>
        <button onClick={handleButtonClick} className="shops__name">
          Сlothes
        </button>
      </div>
      <div className="mainBlock__products">
        <div className="shopProducts">
          {showСlothes &&
            clothes.data?.map((cloth) => (
              <div key={cloth.id} className="product">
                <img
                  className="product__img"
                  src={cloth.image}
                  alt={cloth.id}
                ></img>
                <h3 className="product__name">{cloth.title}</h3>
                <p>
                  <b>Price:</b> <span>{cloth.price}</span>
                </p>
                <button className="product__button">Add to Cart</button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
