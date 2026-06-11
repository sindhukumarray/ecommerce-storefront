import { useSelector } from "react-redux";

import ProductCard from "../components/ProductCard/ProductCard";

import Filters from "../components/Filters/Filters";
import RecentlyViewed from"../components/RecentlyViewed";

function Catalog() {
  const products = useSelector(
    (state) =>
      state.products.filteredProducts
  );

  return (
    <div>
      <h1 className="catalog-title">
        Product Catalog
      </h1>

      <Filters />

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Catalog;