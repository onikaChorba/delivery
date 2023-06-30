import { configureStore } from "@reduxjs/toolkit";
import clothesSlice from "./clothesSlice";
import burgersSlice from "./burgersSlice";
import drinksSlice from "./drinksSlice";
import cartReducer from "./cartSlice";
export const store = configureStore({
  reducer: {
    drinks: drinksSlice,
    burgers: burgersSlice,
    clothes: clothesSlice,
    cart: cartReducer,
  },
});
