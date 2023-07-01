function ShopingCard({ cartItems, handleQuantityChange }) {
  const handleIncrement = (productId) => {
    handleQuantityChange(productId, 1);
  };

  const handleDecrement = (productId) => {
    handleQuantityChange(productId, -1);
  };

  return (
    <div className="shopingCard">
      <div className="shopingCardBlock">
        <div className="shopingCard__selectProduct">
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div>
              <div>
                Total price: <span>10000</span>
              </div>
              {cartItems.map((item) => (
                <div key={item.id} className="selectProduct__block">
                  <div>
                    <img
                      style={{ height: "100px" }}
                      src={item.image || item.img}
                      alt={item.id}
                      className="selectProduct__img2"
                    />
                  </div>
                  <div>
                    <h3 className="cart-item__name">
                      {item.title || item.name}
                    </h3>
                    <p className="cart-item__price">{item.price}</p>
                  </div>
                  <div className="cart-item__quantity">
                    <button onClick={() => handleDecrement(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrement(item.id)}>+</button>
                  </div>
                </div>
              ))}
            </div>
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
export default ShopingCard;
