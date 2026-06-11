import React from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { addToCart } from "../../features/cart/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
      />

      <h3>{product.name}</h3>

      <p>${product.price}</p>

      <button
        onClick={() =>
          dispatch(addToCart(product))
        }
      >
        Add To Cart
      </button>

      <br />

      <Link to={`/product/${product.id}`}>
        <button>
          View Details
        </button>
      </Link>
    </div>
  );
}

export default ProductCard;