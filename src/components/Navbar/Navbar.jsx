import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );

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
      </div>
    </nav>
  );
}

export default Navbar;