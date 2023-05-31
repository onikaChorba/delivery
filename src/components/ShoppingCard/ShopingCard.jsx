import React from "react";
import { useState } from "react";
import "./ShopingCard.scss";
export default function ShopingCard() {
  const [value, setValue] = useState(0);

  const handleIncrease = () => {
    setValue(value + 1);
  };

  const handleDecrease = () => {
    setValue(value - 1);
  };
  return (
    <div className="shopingCard">
      <div>
        <div>
          <div className="shopingCard__user">
            <form>
              <label>Name:</label>
              <input type="text" />
              <label>Email:</label>
              <input type="email" />
              <label>Phone:</label>
              <input type="phone" />
              <label>Address:</label>
              <input type="text" />
            </form>
          </div>
          <div className="shopingCard__selectProduct">
            <div>img </div>
            <div>
              <div> name</div>
              <div>
                Price: <span>Number</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button onClick={handleIncrease}>+</button>
          <input type="number" value={value} readOnly />
          <button onClick={handleDecrease}>-</button>
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
