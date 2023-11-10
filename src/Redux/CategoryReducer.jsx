import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "Category",
  initialState: {
    Category: null,
  },
  reducers: {
    setCategory: (state, action) => {
      state.Category = action.payload;
    },
  },
});

export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;
