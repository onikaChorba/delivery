import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDrinks = createAsyncThunk("fetchDrinks", async () => {
  const responce = await fetch(
    "https://fakestoreapi.com/products/"
    // "https://free-food-menus-api-production.up.railway.app/drinks"
  );
  return responce.json();
});

const drinksSlice = createSlice({
  name: "drinks",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDrinks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchDrinks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchDrinks.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

// export const { getFilteredList } = productSlise.actions;
export default drinksSlice.reducer;
