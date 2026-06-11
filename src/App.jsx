import React, {lazy,Suspense,} from "react";

import {BrowserRouter,Routes,Route,} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar/Navbar";

import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Footer from "./components/Footer/Footer";

const Checkout = lazy(() =>
  import("./pages/Checkout")
);

function App() {
  return (
    <BrowserRouter>

    <Toaster
      position="top-right"
    />
      <Navbar />

      <Suspense
        fallback={<h2>Loading...</h2>}
      >
        <Routes>
          <Route
            path="/"
            element={<Catalog />}
          />

          <Route
            path="/product/:id"
            element={<ProductDetail />}
          />

          <Route
            path="/cart"
            element={<Cart />}
          />

          <Route
            path="/wishlist"
            element={<Wishlist />}
          />

          <Route
            path="/checkout"
            element={<Checkout />}
          />
        </Routes>
      </Suspense>
        <Footer />
    </BrowserRouter>
  );
}

export default App;