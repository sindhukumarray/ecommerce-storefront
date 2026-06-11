import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },

    searchProducts: (state, action) => {
      state.filteredProducts = state.products.filter(
        (product) =>
          product.title
            .toLowerCase()
            .includes(
              action.payload.toLowerCase()
            )
      );
    },

    filterByCategory: (state, action) => {
      state.filteredProducts =
        state.products.filter(
          (product) =>
            product.category ===
            action.payload
        );
    },

    filterByPrice: (state, action) => {
      state.filteredProducts =
        state.products.filter(
          (product) =>
            product.price <=
            action.payload
        );
    },

    /* Price Sorting */

    sortLowToHigh: (state) => {
      state.filteredProducts = [
        ...state.filteredProducts,
      ].sort(
        (a, b) => a.price - b.price
      );
    },

    sortHighToLow: (state) => {
      state.filteredProducts = [
        ...state.filteredProducts,
      ].sort(
        (a, b) => b.price - a.price
      );
    },

    /* Name Sorting */

    sortAToZ: (state) => {
      state.filteredProducts = [
        ...state.filteredProducts,
      ].sort((a, b) =>
        a.title.localeCompare(
          b.title
        )
      );
    },

    sortZToA: (state) => {
      state.filteredProducts = [
        ...state.filteredProducts,
      ].sort((a, b) =>
        b.title.localeCompare(
          a.title
        )
      );
    },

    resetFilters: (state) => {
      state.filteredProducts =
        state.products;
    },
  },
});

export const {
  setProducts,
  searchProducts,
  filterByCategory,
  filterByPrice,
  sortLowToHigh,
  sortHighToLow,
  sortAToZ,
  sortZToA,
  resetFilters,
} = productsSlice.actions;

export default productsSlice.reducer;