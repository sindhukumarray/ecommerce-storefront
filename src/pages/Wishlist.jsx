import {
  useSelector,
  useDispatch,
} from "react-redux";

import {
  removeFromWishlist,
} from "../features/wishlist/wishlistSlice";

function Wishlist() {
  const dispatch = useDispatch();

  const items = useSelector(
    (state) => state.wishlist.items
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Wishlist</h1>

      {items.length === 0 ? (
        <p>No Items Added</p>
      ) : (
        items.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h3>{item.name}</h3>

            <p>${item.price}</p>

            <button
              onClick={() =>
                dispatch(
                  removeFromWishlist(
                    item.id
                  )
                )
              }
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Wishlist;