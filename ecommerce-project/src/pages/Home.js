import products from "../data/product";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import { useState } from "react";

const Home = () => {
  const categories = ["Electronics", "Fashion", "Shoes"];
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts];

  if (sortOrder === "lowToHigh") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sortOrder === "highToLow") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div>
      <h1>Welcome to My E-commerce Store</h1>

      <h2>Shop By Category</h2>

      <div className="category-container">
        {categories.map((category) => (
          <CategoryCard key={category} category={category} />
        ))}
      </div>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
        <option value="Shoes">Shoes</option>
      </select>

      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="default">Sort By Price</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
      </select>

      <h2>All Products</h2>

      <div className="product-container">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found!</p>
        )}
      </div>
    </div>
  );
};

export default Home;
