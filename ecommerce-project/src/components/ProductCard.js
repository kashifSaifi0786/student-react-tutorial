import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-card">
      <h3>{product.name}</h3>

      <p>Price: ₹{product.price}</p>

      <p>Category: {product.category}</p>

      <button onClick={handleViewDetails}>View Details</button>
    </div>
  );
};

export default ProductCard;
