import React from "react";
import "./ShopingForm.scss";
export default function ShopingForm() {
  return (
    <div className="ShoppingCardForm">
      <form className="ShoppingCardForm__user">
        <label className="userLabel">Name:</label>
        <input type="text" className="userInput" />
        <label className="userLabel">Email:</label>
        <input type="email" className="userInput" />
        <label className="userLabel">Phone:</label>
        <input type="phone" className="userInput" />
        <label className="userLabel">Address:</label>
        <input type="text" className="userInput" />
      </form>

      <div className="ShoppingCardForm__total">
        <button className="submitBtn">Submit</button>
      </div>
    </div>
  );
}
