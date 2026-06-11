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
    <div className="cart-container">
      <h1>🛒 Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="empty-cart">
          <h2>Your Cart Is Empty</h2>

          <Link to="/">
            <button>
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <>
          {items.map((item) => (
            <div
              key={item.id}
              className="cart-item"
            >
              <img
                src={item.image}
                alt={item.title}
                className="cart-image"
              />

              <div className="cart-details">
                <h3>{item.title}</h3>

                <p>
                  Price:
                  ${item.price}
                </p>

                <div className="quantity-controls">
                  <button
                    onClick={() =>
                      dispatch(
                        decreaseQuantity(
                          item.id
                        )
                      )
                    }
                  >
                    -
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      dispatch(
                        increaseQuantity(
                          item.id
                        )
                      )
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() =>
                    dispatch(
                      removeFromCart(
                        item.id
                      )
                    )
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <h2>
              Total:
              ${total.toFixed(2)}
            </h2>

            <Link to="/checkout">
              <button className="checkout-btn">
                Proceed To Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;