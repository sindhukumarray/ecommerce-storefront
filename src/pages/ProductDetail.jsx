import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { addRecentlyViewed } from "../features/recentlyViewed/recentlyViewedSlice";


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
      dispatch(addRecentlyViewed(product));
    }
  }, [product, dispatch]);

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    
    <div>
      <h1>{product.name}</h1>

      <p>${product.price}</p>
    </div>
  );
}

export default ProductDetail;