import { useSelector } from "react-redux";
import { useState } from "react";

function Checkout() {
  const items = useSelector(
    (state) => state.cart.items
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    payment: "COD",
  });

  const total = items.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Order Placed Successfully 🎉"
    );
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          required
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
        />

        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
        />

        <textarea
          placeholder="Address"
          required
          onChange={(e) =>
            setFormData({
              ...formData,
              address: e.target.value,
            })
          }
        />

        <select
          onChange={(e) =>
            setFormData({
              ...formData,
              payment: e.target.value,
            })
          }
        >
          <option value="COD">
            Cash On Delivery
          </option>

          <option value="UPI">
            UPI
          </option>

          <option value="CARD">
            Card
          </option>
        </select>

        <button type="submit">
          Place Order
        </button>
      </form>

      <div>
        <h2>Order Summary</h2>

        {items.map((item) => (
          <div key={item.id}>
            <p>
              {item.title} ×
              {item.quantity}
            </p>
          </div>
        ))}

        <h3>Total: ${total}</h3>
      </div>
    </div>
  );
}

export default Checkout;