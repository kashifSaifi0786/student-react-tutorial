import { useParams } from "react-router-dom";

import products from "../data/product";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  const { category } = useParams();

  const filteredProducts = products.filter((product) => {
    return product.category === category;
  });

  return (
    <div>
      <h1>{category} Products</h1>

      <div className="product-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
