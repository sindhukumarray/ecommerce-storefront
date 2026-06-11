import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductDetail() {
  const { id } = useParams();

  const product = useSelector((state) =>
    state.products.products.find(
      (item) => item.id === Number(id)
    )
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <img
        src={product.image}
        alt={product.name}
        width="300"
      />

      <h1>{product.name}</h1>

      <h2>${product.price}</h2>

      <p>Category: {product.category}</p>
    </div>
  );
}

export default ProductDetail;