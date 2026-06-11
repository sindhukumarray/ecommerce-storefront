import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [darkMode, setDarkMode] =
    useState(false);

  const [menuOpen, setMenuOpen] =
    useState(false);

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle(
      "dark-theme"
    );
  };

  return (
    <nav className="navbar">
      <h2 className="logo">
        E-Commerce Store
      </h2>

      <div className="desktop-menu">
        <Link to="/">Home</Link>

        <Link to="/cart">
          Cart ({cartItems.length})
        </Link>

        <Link to="/wishlist">
          Wishlist (
          {wishlistItems.length})
        </Link>

        <button
          className="theme-btn"
          onClick={toggleTheme}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      <div className="mobile-actions">
        <button
          className="theme-btn"
          onClick={toggleTheme}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <div
          className="menu-icon"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >
          {menuOpen ? (
            <FaTimes />
          ) : (
            <FaBars />
          )}
        </div>
      </div>

      <div
        className={`mobile-menu ${
          menuOpen ? "active" : ""
        }`}
      >
        <Link
          to="/"
          onClick={() =>
            setMenuOpen(false)
          }
        >
          Home
        </Link>

        <Link
          to="/cart"
          onClick={() =>
            setMenuOpen(false)
          }
        >
          Cart ({cartItems.length})
        </Link>

        <Link
          to="/wishlist"
          onClick={() =>
            setMenuOpen(false)
          }
        >
          Wishlist (
          {wishlistItems.length})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;