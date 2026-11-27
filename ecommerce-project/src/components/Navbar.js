import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h2>My E-commerce Store</h2>

      <div>
        <Link to="/">Home</Link>

        <Link to="/products/Electronics">Electronics</Link>

        <Link to="/products/Fashion">Fashion</Link>

        <Link to="/products/Shoes">Shoes</Link>

        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
