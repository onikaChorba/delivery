import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchСlothes = createAsyncThunk("fetchСlothes", async () => {
  const responce = await fetch("https://fakestoreapi.com/products/");
  return responce.json();
});

const clothesSlice = createSlice({
  name: "clothes",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchСlothes.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchСlothes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchСlothes.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

// export const { getFilteredList } = productSlise.actions;
export default clothesSlice.reducer;
