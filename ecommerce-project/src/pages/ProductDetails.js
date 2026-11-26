import { useParams, useNavigate } from "react-router-dom";
import products from "../data/product";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((item) => {
    return item.id === Number(id);
  });

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div className="product-details">
      <h1>Product Details</h1>

      <h2>{product.name}</h2>

      <p>Price: ₹{product.price}</p>

      <p>Category: {product.category}</p>

      <button onClick={() => navigate(-1)}>Back to Products</button>
    </div>
  );
};

export default ProductDetails;
