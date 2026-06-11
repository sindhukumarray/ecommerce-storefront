import { useSelector } from "react-redux";

function RecentlyViewed() {
  const items = useSelector(
    (state) => state.recentlyViewed.items
  );

  if (items.length === 0) return null;

  return (
    <div className="recently-viewed">
      <h2>
        Recently Viewed Products
      </h2>

      <div className="product-grid">
        {items.map((item) => (
          <div
            key={item.id}
            className="product-card"
          >
            <img
              src={item.image}
              alt={item.title}
            />

            <h3>{item.title}</h3>

            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentlyViewed;