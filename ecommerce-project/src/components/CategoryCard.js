import { useNavigate } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${category}`);
  };

  return (
    <div className="category-card">
      <h3>{category}</h3>

      <button onClick={handleClick}>View Products</button>
    </div>
  );
};

export default CategoryCard;
