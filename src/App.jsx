import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;