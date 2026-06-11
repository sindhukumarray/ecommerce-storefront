import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

import { useDispatch } from "react-redux";

import { addToCart } from "../../features/cart/cartSlice";
import { addToWishlist } from "../../features/wishlist/wishlistSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.title}
      />

      <h3>{product.title}</h3>

      <p>${product.price}</p>

      <button
        onClick={() =>
          dispatch(addToCart(product))
        }
      >
        Add To Cart
      </button>

      <button
        onClick={() =>
          dispatch(addToWishlist(product))
        }
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