import { useSelector } from "react-redux";

import ProductCard from "../components/ProductCard/ProductCard";

function Catalog() {
  const products = useSelector(
    (state) => state.products.filteredProducts
  );

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        Product Catalog
      </h1>

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