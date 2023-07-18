import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    savedItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, img, image, name } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      const existingSavedItem = state.savedItems.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else if (existingSavedItem) {
        existingSavedItem.quantity += 1;
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
      const savedItem = state.savedItems.find((item) => item.id === productId);

      if (cartItem) {
        cartItem.quantity += quantity;
        cartItem.totalPrice = cartItem.price * cartItem.quantity;
      } else if (savedItem) {
        savedItem.quantity += quantity;
        savedItem.totalPrice = savedItem.price * savedItem.quantity;
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== productId);
    },
    addToSavedItems: (state, action) => {
      const { id, title, price, img, image, name } = action.payload;
      const existingItem = state.savedItems.find((item) => item.id === id);

      if (!existingItem) {
        state.savedItems.push({
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
  },
});

export const { addToCart, updateQuantity, removeFromCart, addToSavedItems } =
  cartSlice.actions;

export default cartSlice.reducer;
