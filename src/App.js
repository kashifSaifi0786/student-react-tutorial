import Day2a from "./Components/Day2a";
import Day2b from "./Components/Day2b";
import Product from "./Components/Day3a";
import ProductRender from "./Components/Day3b";

const App = () => {
  const products = [
    { id: 1, name: "Laptop", price: 50000, category: "Electronics" },
    { id: 2, name: "Mobile", price: 20000, category: "Electronics" },
    { id: 3, name: "Shoes", price: 2500, category: "Fashion" },
    { id: 4, name: "Watch", price: 1500, category: "Accessories" },
    { id: 5, name: "Bag", price: 1000, category: "Fashion" },
  ];

  return (
    <div>
      {/* <Day2a /> */}
      {/* <Day2b /> */}
      {/* <Product
        name="Laptop"
        price={50000}
        category="Electronics"
        description="Best laptop for students"
      />

      <Product
        name="Mobile"
        price={20000}
        category="Electronics"
        description="Latest smartphone"
      /> */}

      <h1>Product List</h1>

      {products.map((product) => (
        <ProductRender
          key={product.id}
          name={product.name}
          price={product.price}
          category={product.category}
        />
      ))}
    </div>
  );
};

export default App;
