import React from "react";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
      />

      <h3>{product.name}</h3>

      <p>${product.price}</p>

      <span>{product.category}</span>

      <br />
      <br />

      <button>Add To Cart</button>

      <button>
        <FaHeart />
      </button>
    </div>
  );
};

export default ProductCard;