import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },

    updateQuantity(state, action) {
      const { productId, quantity } = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === productId);
      if (cartItem) {
        if (typeof cartItem.quantity === "number") {
          cartItem.quantity += quantity;
        } else {
          cartItem.quantity = quantity;
        }
        if (typeof cartItem.price === "number") {
          cartItem.price = cartItem.price * cartItem.quantity;
        }
      }
    },
  },
});

export const { addToCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
