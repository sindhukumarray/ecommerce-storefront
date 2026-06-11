import React, { useMemo } from "react";
import { Link } from "react-router-dom";

import {
  useSelector,
  useDispatch,
} from "react-redux";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../features/cart/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const items = useSelector(
    (state) => state.cart.items
  );

  const total = useMemo(() => {
    return items.reduce(
      (sum, item) =>
        sum + item.price * item.quantity,
      0
    );
  }, [items]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Cart</h1>

      {items.length === 0 ? (
        <h3>Cart is Empty</h3>
      ) : (
        items.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              marginBottom: "10px",
              padding: "10px",
            }}
          >
            <h3>{item.title}</h3>

            <p>${item.price}</p>

            <button
              onClick={() =>
                dispatch(
                  decreaseQuantity(item.id)
                )
              }
            >
              -
            </button>

            <span
              style={{
                margin: "0 10px",
              }}
            >
              {item.quantity}
            </span>

            <button
              onClick={() =>
                dispatch(
                  increaseQuantity(item.id)
                )
              }
            >
              +
            </button>

            <br />
            <br />

            <button
              onClick={() =>
                dispatch(
                  removeFromCart(item.id)
                )
              }
            >
              Remove
            </button>
          </div>
        ))
      )}

      <h2>Total: ${total.toFixed(2)}</h2>

      {items.length > 0 && (
        <Link to="/checkout">
          <button>
            Proceed To Checkout
          </button>
        </Link>
      )}
    </div>
  );
}

export default Cart;