import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBurgers = createAsyncThunk("fetchBurgers", async () => {
  const responce = await fetch(
    "https://fakestoreapi.com/products/category/jewelery"
    // "https://free-food-menus-api-production.up.railway.app/burgers"
  );
  return responce.json();
});

const burgersSlice = createSlice({
  name: "burgers",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBurgers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBurgers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchBurgers.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

// export const { getFilteredList } = productSlise.actions;
export default burgersSlice.reducer;
