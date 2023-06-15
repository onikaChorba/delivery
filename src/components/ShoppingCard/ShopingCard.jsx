import React, { useState } from "react";
import "./ShopingCard.scss";

export default function ShopingCard({ cartItems }) {
  const [value, setValue] = useState(1);

  const handleIncrease = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const handleDecrease = () => {
    setValue((prevValue) => (prevValue > 1 ? prevValue - 1 : 1));
  };

  return (
    <div className="shopingCard">
      <div className="shopingCardBlock">
        <div className="shopingCard__selectProduct">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="selectProduct__block">
                  <div>
                    <div className="selectProduct__img2"></div>
                    {item.name}
                  </div>
                  <div className="selectProduct__quantity">
                    <button onClick={handleIncrease}>+</button>
                    <input
                      type="number"
                      value={value}
                      readOnly
                      className="quantityInput"
                    />
                    <button onClick={handleDecrease}>-</button>
                  </div>
                </li>
              ))}
              <div>
                Total price: <span>10000</span>
              </div>
            </ul>
          )}
        </div>
      </div>
      <form className="shopingCard__user">
        <label className="userLabel">Name:</label>
        <input type="text" className="userInput" />
        <label className="userLabel">Email:</label>
        <input type="email" className="userInput" />
        <label className="userLabel">Phone:</label>
        <input type="phone" className="userInput" />
        <label className="userLabel">Address:</label>
        <input type="text" className="userInput" />
      </form>

      <div className="shopingCard__total">
        <button className="submitBtn">Submit</button>
      </div>
    </div>
  );
}
