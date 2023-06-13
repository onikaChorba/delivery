import React from "react";
import { useState } from "react";
import "./ShopingCard.scss";
export default function ShopingCard({ cartItems }) {
  const [value, setValue] = useState(0);

  const handleIncrease = () => {
    setValue(value + 1);
  };

  const handleDecrease = () => {
    setValue(value - 1);
  };
  return (
    <div className="shopingCard">
      <div className="shopingCardBlock">
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
        <div className="shopingCard__selectProduct">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.name}
                  <div>
                    <button onClick={handleIncrease}>+</button>
                    <input type="number" value={value} readOnly />
                    <button onClick={handleDecrease}>-</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div>
        <div>
          Total price: <span>10000</span>
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
}
