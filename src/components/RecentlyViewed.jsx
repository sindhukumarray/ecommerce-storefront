import { useSelector } from "react-redux";

function RecentlyViewed() {
  const items = useSelector(
    (state) =>
      state.recentlyViewed.items
  );

  return (
    <div>
      <h2>
        Recently Viewed Products
      </h2>

      {items.map((item) => (
        <p key={item.id}>
          {item.name}
        </p>
      ))}
    </div>
  );
}

export default RecentlyViewed;