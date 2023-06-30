import { configureStore } from "@reduxjs/toolkit";
import clothesSlice from "./clothesSlice";
import burgersSlice from "./burgersSlice";
import drinksSlice from "./drinksSlice";
export const store = configureStore({
  reducer: {
    drinks: drinksSlice,
    burgers: burgersSlice,
    clothes: clothesSlice,
  },
});
