import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, img, image, name } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          id,
          name,
          title,
          price,
          quantity: 1,
          img,
          image,
        });
      }
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === productId);
      if (cartItem) {
        cartItem.quantity += quantity;
        cartItem.totalPrice = cartItem.price * cartItem.quantity;
      }
    },
  },
});

export const { addToCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
