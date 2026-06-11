import { useParams } from "react-router-dom";
import {
  useSelector,
  useDispatch,
} from "react-redux";

import { useEffect } from "react";

import reviews from "../api/reviews.json";

import { addRecentlyViewed }
from "../features/recentlyViewed/recentlyViewedSlice";

function ProductDetail() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.products.products.find(
      (item) => item.id === Number(id)
    )
  );

  useEffect(() => {
    if (product) {
      dispatch(
        addRecentlyViewed(product)
      );
    }
  }, [product, dispatch]);

  if (!product) {
    return (
      <h2>
        Product Not Found
      </h2>
    );
  }

  return (
    <div
      className="product-detail"
    >
      <img
        src={product.image}
        alt={product.title}
        className="detail-image"
      />

      <h1>{product.title}</h1>

      <p>
        <strong>
          Category:
        </strong>{" "}
        {product.category}
      </p>

      <p>
        <strong>
          Price:
        </strong>{" "}
        ${product.price}
      </p>

      <p>
        {product.description}
      </p>

      <hr />

      <h2>
        Customer Reviews
      </h2>

      <div className="reviews">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="review-card"
          >
            <h4>
              {review.user}
            </h4>

            <p>
              ⭐ {review.rating}/5
            </p>

            <p>
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDetail;