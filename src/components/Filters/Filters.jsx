import { useDispatch } from "react-redux";

import {
  searchProducts,
  filterByCategory,
  filterByPrice,
  resetFilters,
} from "../../features/products/productsSlice";

function Filters() {
  const dispatch = useDispatch();

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search Product..."
        onChange={(e) =>
          dispatch(
            searchProducts(e.target.value)
          )
        }
      />

      <button
        onClick={() =>
          dispatch(
            filterByCategory("electronics")
          )
        }
      >
        Electronics
      </button>

      <button
        onClick={() =>
          dispatch(
            filterByCategory(
              "men's clothing"
            )
          )
        }
      >
        Men's Clothing
      </button>

      <button
        onClick={() =>
          dispatch(
            filterByCategory(
              "women's clothing"
            )
          )
        }
      >
        Women's Clothing
      </button>

      <button
        onClick={() =>
          dispatch(filterByPrice(100))
        }
      >
        Under $100
      </button>

      <button
        onClick={() =>
          dispatch(resetFilters())
        }
      >
        Reset
      </button>
    </div>
  );
}

export default Filters;