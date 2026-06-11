import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>E-Commerce Store</h2>

      <div>
        <Link to="/">Home</Link>

        <Link to="/cart">Cart</Link>

        <Link to="/wishlist">Wishlist</Link>
      </div>
    </nav>
  );
}

export default Navbar;