import React from "react";
import "../ShoppingCard/ShopingCard.scss";
export default function SaveProduct({ savedItems }) {
  return (
    <div className="shopingCard">
      {savedItems.length === 0 ? (
        <p className="shopingCardBlock__price">Your save cart is empty</p>
      ) : (
        <div className="shopingCardBlock">
          <div className="shopingCardBlock__product">
            {savedItems.map((item) => (
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
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
