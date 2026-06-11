import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

import { useDispatch } from "react-redux";

import { addToCart } from "../../features/cart/cartSlice";
import { addToWishlist } from "../../features/wishlist/wishlistSlice";

import toast from "react-hot-toast";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));

    toast.success(
      "Product Added To Cart 🛒"
    );
  };

  const handleWishlist = () => {
    dispatch(addToWishlist(product));

    toast.success(
      "Added To Wishlist ❤️"
    );
  };

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.title}
      />

      <h3>{product.title}</h3>

      <p>${product.price}</p>

      <button
        onClick={handleAddToCart}
      >
        Add To Cart
      </button>

      <button
        onClick={handleWishlist}
      >
        <FaHeart />
      </button>

      <br />
      <br />

      <Link to={`/product/${product.id}`}>
        <button>
          View Details
        </button>
      </Link>
    </div>
  );
}

export default React.memo(ProductCard);