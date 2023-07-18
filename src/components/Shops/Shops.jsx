import "./Shops.scss";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchСlothes } from "../../store/clothesSlice";
import { fetchBurgers } from "../../store/burgersSlice";
import { fetchDrinks } from "../../store/drinksSlice";
import {
  addToCart,
  addToSavedItems,
  updateQuantity,
} from "../../store/cartSlice";
import { removeFromCart } from "../../store/cartSlice";
import ShopingCard from "../ShoppingCard/ShopingCard";
import starBlack from "../../assets/img/starBlack.png";
import starYellow from "../../assets/img/starYellow.png";
import ShopingForm from "../ShopingForm/ShopingForm";
import SaveProduct from "../SaveProduct/SaveProduct";

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
  const { cartItems, savedItems } = useSelector((state) => state.cart);
  const [showCart, setShowCart] = useState(false);
  const [showSavedItems, setShowSavedItems] = useState(false);
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

  const handleAddToSavedItems = (product) => {
    dispatch(addToSavedItems(product));
  };

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleToggleSavedItems = () => {
    setShowSavedItems(!showSavedItems);
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
              <button
                className="saved-items-button"
                onClick={handleToggleSavedItems}
              >
                Saved Products ({savedItems.length})
              </button>
              {showSavedItems && (
                <div className="savedItemsSection" ref={cartRef}>
                  <SaveProduct savedItems={savedItems} />
                </div>
              )}
              <ShopingCard
                cartItems={cartItems}
                handleQuantityChange={handleQuantityChange}
                handleRemove={handleRemove}
              />
              <ShopingForm />
            </div>
          )}
        </div>
        <div className="mainBlock__products">
          <div className="shopProducts">
            {showСlothes &&
              RenderProducts(
                filterProducts(clothes),
                handleAddToCart,
                handleAddToSavedItems,
                savedItems
              )}
            {showBurgers &&
              RenderProducts(
                filterProducts(burgers),
                handleAddToCart,
                handleAddToSavedItems,
                savedItems
              )}
            {showDrinks &&
              RenderProducts(
                filterProducts(drinks),
                handleAddToCart,
                handleAddToSavedItems,
                savedItems
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

function RenderProducts(
  items,
  handleAddToCart,
  handleAddToSavedItems,
  savedItems
) {
  return items?.map((item) => {
    const isSaved = savedItems.some((savedItem) => savedItem.id === item.id);

    return (
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
        <div className="buttonSave">
          <img
            src={isSaved ? starYellow : starBlack}
            alt="like"
            className="like"
            onClick={() => handleAddToSavedItems(item)}
          />
          <button
            className="product__button"
            onClick={() => handleAddToCart(item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  });
}
