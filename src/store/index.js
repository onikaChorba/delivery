import { configureStore } from "@reduxjs/toolkit";
import clothesSlice from "./clothesSlice";
import burgersSlice from "./burgersSlice";
export const store = configureStore({
  reducer: {
    clothes: clothesSlice,
    burgers: burgersSlice,
  },
});
