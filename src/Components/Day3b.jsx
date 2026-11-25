
const ProductRender = ({ name, price, category }) => {
    return (
        <div className="product">
            <h2>{name}</h2>
            <p>Category: {category}</p>
            <p>Price: ₹{price}</p>
        </div>
    );
};

export default ProductRender;
