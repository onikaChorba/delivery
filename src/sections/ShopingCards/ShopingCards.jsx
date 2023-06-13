import ShopingCard from "../../components/ShoppingCard/ShopingCard";
import { useState } from "react";

function ShopingCards() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div>
      <ShopingCard cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
}

export default ShopingCards;
