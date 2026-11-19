// Header Component

function Header(){
    return(
        <div>
          My Store
        </div>
    )
}

// ProductCard Component

function ProductCard(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Price: {props.price}</p>
      <p>Catergory: {props.category}</p>
    </div>
  );
}


// Footer Component

function Footer() {
  return <h3>Copyright 2026</h3>;
}

function Prod(props){
    return(
        <div>
          <Header />
          <ProductCard 
          name={props.name}
          price={props.price}
          category={props.category}
          />
          <Footer />
           
        </div>
    )
}
 export  {Prod,Footer,Header,ProductCard};
