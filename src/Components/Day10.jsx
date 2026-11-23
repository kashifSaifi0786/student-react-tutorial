import { useState } from "react";

const ProductList=()=>{

    const[productName,setProductName]=useState("");
    const[price,setPrice]=useState("");

    const [products,setProducts]=useState([
        {id:1,name:"Laptop",price:50000},
        {id:1,name:"Computer",price:80000}

    ]);

    const [search,setSearch]=useState("");
    const[editId,setEditId]=useState(null);


    const handleAdd=()=>{

        if(productName.trim()===""||price==="")return;

        const newProduct={
            id:Date.now(),
            name:productName,
            price:price
        }

        
        setProducts([...products,newProduct]);

        setProductName("");
        setPrice("");

    }



    const handleDelete=(id)=>{

        setProducts(products.filter((product)=>product.id!==id));
    }


    const handleEdit=(product)=>{

        setProductName(product.name);
        setPrice(product.price);
        setEditId(product.id);

    }


    const handleUpdate=()=>{

        setProducts(products.map((product)=>product.id===editId?{...product,name:productName,price:price}:product));
        setProductName("")
        setEditId(null)
        setPrice("")

    }


    const searchProducts=products.filter((product)=>

        product.name.toLowerCase().includes(search.toLowerCase())
    
    );


    return (
        <div>

        <h2>Dynamic Product List</h2>

        <input
        type="text"
        placeholder="Enter your product name"
        value={productName}
        onChange={(e)=>setProductName(e.target.value)}/>
        

        <input
        type="number"
        placeholder="Enter Price"
        value={price}
        onChange={(e)=>setPrice(e.target.value)}/>

        {editId===null?<button onClick={handleAdd}> ADD </button>:<button onClick={handleUpdate}>UPDATE</button>}

        <br></br>

        <input
        
        type="text"
        placeholder="Search your product"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}/>

        <h3>Product Details</h3>
        {searchProducts.map((product)=>
        <>
        <p key={product.id}>{product.name} - ₹{product.price}</p>

        <button onClick={()=>{handleEdit(product)}}>Edit</button>
        <button onClick={()=>{handleDelete(product.id)}}>Delete</button>
        </>)}

        {searchProducts.length===0&& <p>No products found</p>}

        </div>
    );
}

export default ProductList;