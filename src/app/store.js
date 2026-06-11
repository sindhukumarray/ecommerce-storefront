import { configureStore } from "@reduxjs/toolkit";
import recentReducer from"../features/recentlyViewed/recentlyViewedSlice";
import productsReducer from "../features/products/productsSlice";
import cartReducer from "../features/cart/cartSlice";
import wishlistReducer from "../features/wishlist/wishlistSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    recentlyViewed: recentReducer,
  },
});