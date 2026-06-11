import { useEffect } from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";

import ProductCard from "../components/ProductCard/ProductCard";
import Filters from "../components/Filters/Filters";
import RecentlyViewed from "../components/RecentlyViewed";

import { setProducts } from "../features/products/productsSlice";

function Catalog() {
  const dispatch = useDispatch();

  const products = useSelector(
    (state) => state.products.filteredProducts
  );

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setProducts(data));
      })
      .catch((error) =>
        console.log(error)
      );
  }, [dispatch]);

  return (
    <div>

      {/* Hero Section */}

      <div className="hero">
        <div className="hero-content">
          <span className="offer-badge">
            🔥 Summer Sale 50% OFF
          </span>

          <h1>
            Discover Amazing Products
          </h1>

          <p>
            Shop Electronics,
            Fashion, Accessories
            and much more at
            unbeatable prices.
          </p>

          <button className="hero-btn">
            Shop Now →
          </button>
        </div>

        <div className="hero-image">
          <div className="circle"></div>
        </div>
      </div>

      {/* Title */}

      <h1 className="catalog-title">
        Featured Products
      </h1>

      {/* Filters */}

      <Filters />

      {/* Products */}

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      {/* Recently Viewed */}

      <RecentlyViewed />

    </div>
  );
}

export default Catalog;