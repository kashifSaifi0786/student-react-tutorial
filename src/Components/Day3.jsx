function Products(props){
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Price: {props.price}</p>
            <p>Catergory: {props.category}</p>
        </div>
    );
}

export default Products;

