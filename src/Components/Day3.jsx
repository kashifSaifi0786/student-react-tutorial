function Product(props){
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Price: {props.price}</p>
            <p>Catergory: {props.catergory}</p>
        </div>
    );
}

export default Product;

