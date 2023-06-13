import ShopingCard from "../../components/ShoppingCard/ShopingCard";
import { useState } from "react";

function ShopingCards({ products }) {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div>
      <ShopingCard
        products={products}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </div>
  );
}

export default ShopingCards;
