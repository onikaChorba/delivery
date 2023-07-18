import React from "react";
import "./ShopingCard.scss";

function ShopingCard({ cartItems, handleQuantityChange, handleRemove }) {
  const handleIncrement = (productId) => {
    handleQuantityChange(productId, 1);
  };

  const handleDecrement = (productId) => {
    handleQuantityChange(productId, -1);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const item of cartItems) {
      totalPrice += item.price * item.quantity;
    }
    return totalPrice;
  };

  return (
    <div className="shopingCard">
      {cartItems.length === 0 ? (
        <p className="shopingCardBlock__price">Your cart is empty</p>
      ) : (
        <div className="shopingCardBlock">
          <div className="shopingCardBlock__price">
            Total price: <span>{calculateTotalPrice()}</span>
          </div>
          <div className="shopingCardBlock__product">
            {cartItems.map((item) => (
              <div key={item.id} className="selectProduct__block">
                <div>
                  <img
                    src={item.image || item.img}
                    alt={item.id}
                    className="selectProduct__img2"
                  />
                </div>
                <div className="selectProduct__info">
                  <h3 className="cart-item__name">{item.title || item.name}</h3>
                  <p className="cart-item__price">
                    <b>Price: </b>
                    {item.price} x {item.quantity} ={" "}
                    {item.price * item.quantity}
                  </p>
                </div>
                <div className="cart-item__quantity">
                  <button onClick={() => handleDecrement(item.id)}>-</button>
                  <span className="quantity">{item.quantity}</span>
                  <button onClick={() => handleIncrement(item.id)}>+</button>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="remove"
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ShopingCard;
