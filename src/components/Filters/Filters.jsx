import { useDispatch } from "react-redux";

import {
  searchProducts,
  filterByCategory,
  filterByPrice,
  resetFilters,
  sortLowToHigh,
  sortHighToLow,
  sortAToZ,
  sortZToA,
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
            searchProducts(
              e.target.value
            )
          )
        }
      />

      <button
        onClick={() =>
          dispatch(
            filterByCategory(
              "electronics"
            )
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
          dispatch(
            filterByPrice(100)
          )
        }
      >
        Under $100
      </button>

      {/* Sorting Dropdown */}

      <select
        onChange={(e) => {
          const value =
            e.target.value;

          if (
            value === "low"
          ) {
            dispatch(
              sortLowToHigh()
            );
          }

          if (
            value === "high"
          ) {
            dispatch(
              sortHighToLow()
            );
          }

          if (
            value === "az"
          ) {
            dispatch(
              sortAToZ()
            );
          }

          if (
            value === "za"
          ) {
            dispatch(
              sortZToA()
            );
          }
        }}
      >
        <option value="">
          Sort By
        </option>

        <option value="low">
          Price Low → High
        </option>

        <option value="high">
          Price High → Low
        </option>

        <option value="az">
          A → Z
        </option>

        <option value="za">
          Z → A
        </option>
      </select>

      <button
        onClick={() =>
          dispatch(
            resetFilters()
          )
        }
      >
        Reset
      </button>
    </div>
  );
}

export default Filters;