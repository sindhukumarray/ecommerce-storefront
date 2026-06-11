import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );

  const [darkMode, setDarkMode] =
  useState(false);

  const toggleTheme = () => {
  setDarkMode(!darkMode);

    document.body.classList.toggle(
      "dark-theme"
    );
  };

  return (
    <nav className="navbar">
      <h2>E-Commerce Store</h2>

      <div>
        <Link to="/">
          Home
        </Link>

        <Link to="/cart">
          Cart ({cartItems.length})
        </Link>

        <Link to="/wishlist">
          Wishlist ({wishlistItems.length})
        </Link>

        <button
          className="theme-btn"
          onClick={toggleTheme}
        >
          {darkMode
            ? "☀️"
            : "🌙"}
        </button>
        
      </div>
    </nav>
  );
}

export default Navbar;