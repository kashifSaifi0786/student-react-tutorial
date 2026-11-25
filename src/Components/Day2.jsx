
// Header Component

function Header() {
    return (
    <h1>Welcome to My Website</h1>
  );
}


// Card Component

function Card() {
  return (
    <div>
      <h2>Product Name: Laptop</h2>
      <p>Price: ₹50,000</p>
    </div>
  );
}


// Footer Component

function Footer() {
  return <h3>Copyright 2026</h3>;
}

function Comp(){
    return(
        <div>
            <Header />
             <Card />
            <Footer />
           
        </div>
    )
}
 export default Comp;
