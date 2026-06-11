import {
  useSelector,
  useDispatch,
} from "react-redux";

import { Link } from "react-router-dom";

import {
  removeFromWishlist,
} from "../features/wishlist/wishlistSlice";

function Wishlist() {
  const dispatch = useDispatch();

  const items = useSelector(
    (state) => state.wishlist.items
  );

  return (
    <div className="wishlist-container">
      <h1>❤️ My Wishlist</h1>

      {items.length === 0 ? (
        <div className="empty-wishlist">
          <h2>
            No Items In Wishlist
          </h2>

          <Link to="/">
            <button>
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div className="wishlist-grid">
          {items.map((item) => (
            <div
              key={item.id}
              className="wishlist-card"
            >
              <img
                src={item.image}
                alt={item.title}
              />

              <h3>{item.title}</h3>

              <p>
                ${item.price}
              </p>

              <button
                className="remove-btn"
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
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;