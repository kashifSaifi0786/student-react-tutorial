const Product=({ name, price, category })=> {
    return (
        <div>

            <h2>{name}</h2>

            <p>Category: {category}</p>

            <h3>Price: ₹{price}</h3>

            <button>Buy Now</button>
            

        </div>
    );
}

export default Product;