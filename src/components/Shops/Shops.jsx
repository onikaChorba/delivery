import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Shops.scss";
import { fetchСlothes } from "../../store/clothesSlice";
import { fetchBurgers } from "../../store/burgersSlice";
import { fetchDrinks } from "../../store/drinksSlice";
import { addToCart } from "../../store/cartSlice";
import ShopingCard from "../ShoppingCard/ShopingCard";
import { updateQuantity } from "../../store/cartSlice";
import { removeFromCart } from "../../store/cartSlice";
import starBlack from "../../assets/img/starBlack.png";
import starYellow from "../../assets/img/starYellow.png";
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
  const { cartItems } = useSelector((state) => state.cart);
  const [showCart, setShowCart] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const cartRef = useRef(null);

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

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  useEffect(() => {
    const handleClickOutsideCart = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setShowCart(false);
      }
    };

    const handleDocumentClick = (event) => {
      if (!cartRef.current && !event.target.closest(".cart-button")) {
        setShowCart(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("mousedown", handleClickOutsideCart);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
      document.removeEventListener("mousedown", handleClickOutsideCart);
    };
  }, []);

  if (clothesLoading || burgersLoading || drinksLoading) {
    return <h1>Loading....</h1>;
  }

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filterProducts = (items) => {
    if (searchQuery === "") {
      return items;
    }
    return items.filter((item) => {
      const title = item.title || item.name || "";
      return title.toLowerCase().includes(searchQuery.toLowerCase());
    });
  };

  const handleQuantityChange = (productId, quantity) => {
    dispatch(updateQuantity({ productId, quantity }));
  };

  return (
    <div>
      <div className="shops__search">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <div className="shops__button">
          <button
            className="cart-button"
            onClick={() => setShowCart(!showCart)}
          >
            Shopping Cart ({cartItems.length})
          </button>
        </div>
      </div>
      <div className="mainBlock">
        <div className="mainBlock__shopsBlock">
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

          {showCart && (
            <div className="shoppingCardSection" ref={cartRef}>
              <ShopingCard
                cartItems={cartItems}
                handleQuantityChange={handleQuantityChange}
                removeFromCart={handleRemove}
              />
            </div>
          )}
        </div>
        <div className="mainBlock__products">
          <div className="shopProducts">
            {showСlothes &&
              RenderProducts(filterProducts(clothes), handleAddToCart)}
            {showBurgers &&
              RenderProducts(filterProducts(burgers), handleAddToCart)}
            {showDrinks &&
              RenderProducts(filterProducts(drinks), handleAddToCart)}
          </div>
        </div>
      </div>
    </div>
  );
}

function RenderProducts(items, handleAddToCart) {
  return items?.map((item) => (
    <div key={item.id} className="product">
      <img
        className="product__img"
        src={item.image || item.img}
        alt={item.id}
      />
      <h3 className="product__name">{item.title || item.name}</h3>
      <p>
        <b>Price:</b> <span>{item.price}</span>
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "90%",
          marginTop: "20px",
        }}
      >
        <img src={starBlack} alt="like" className="like" />
        <button
          className="product__button"
          onClick={() => handleAddToCart(item)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  ));
}
