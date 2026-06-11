import { useEffect } from "react";
import { useDispatch, useSelector,} from "react-redux";

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

    <div className="hero">
      <h1>Welcome to Our Store</h1>
      <p>Discover Amazing Products</p>
    </div>

    <h1 className="catalog-title">
      Product Catalog
    </h1>

    <Filters />

    <RecentlyViewed />

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