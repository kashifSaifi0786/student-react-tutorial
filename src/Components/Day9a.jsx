// function Products(){

//     const products = [
//         { id: 1, name: "Laptop", price: 50000 },
//         { id: 2, name: "Mouse", price: 1000 },
//         { id: 3, name: "Keyboard", price: 2500 },
//         { id: 4, name: "Mobile", price: 20000 }
//     ];

//     const expensiveProducts=products.filter((product)=>product.price>5000);

//     return(
//         <div>
//             <h2>Expensive Products</h2>

//             {expensiveProducts.map((product)=>{
//                 return (
//                 <div key={product.id}>
//                     <h2>{product.name}</h2>
//                     <p>Price: {product.price}</p>

//                 </div>
//                 )
//             })}
//         </div>
//     )
// }

// export default Products;

import {useState} from "react";

function Products(){
    const products=[
        { id: 1, name: "Laptop" },
        { id: 2, name: "Mouse" },
        { id: 3, name: "Keyboard" },
        { id: 4, name: "Mobile" }
    ];
    
    const [search , setSearch]=useState("");

    const filteredProducts=products.filter((product)=>(
        product.name.toLowerCase().includes(search.toLowerCase())
    ))


    return(
        <div>
            <h2>Search Product</h2>
            <input type="text" placeholder="Enter product name" value={search} onChange={(e)=> setSearch(e.target.value)} />
            <button onClick={setSearch}>Search</button>

            {filteredProducts.map((product)=>(
                <h2 key={product.id}> {product.name}</h2>
            ))
            }
        </div>
    )
}

export default Products;