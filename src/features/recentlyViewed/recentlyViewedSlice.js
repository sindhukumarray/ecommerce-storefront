import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const recentlyViewedSlice = createSlice({
  name: "recentlyViewed",

  initialState,

  reducers: {
    addRecentlyViewed: (
      state,
      action
    ) => {
      state.items = [
        action.payload,

        ...state.items.filter(
          (item) =>
            item.id !== action.payload.id
        ),
      ].slice(0, 5);
    },
  },
});

export const {
  addRecentlyViewed,
} = recentlyViewedSlice.actions;

export default recentlyViewedSlice.reducer;