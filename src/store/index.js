import { configureStore } from "@reduxjs/toolkit";
import clothesSlice from "./clothesSlice";
export const store = configureStore({
  reducer: {
    clothes: clothesSlice,
  },
});
