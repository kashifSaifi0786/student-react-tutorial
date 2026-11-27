
import { useState } from "react";


const ProductCard=({ product, onEdit, onDelete, onSelect })=> {

    return (
        <div>
            <h3>{product.name}</h3>

            <p>Price: ₹{product.price}</p>

            <p>Category: {product.category}</p>

            <button onClick={() => onEdit(product)}>
                Edit
            </button>

            <button onClick={() => onDelete(product.id)}>
                Delete
            </button>

            <button onClick={() => onSelect(product)}>
                Select Product
            </button>
        </div>
    );
}




const ProductLi=()=> {


    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Laptop",
            price: 55000,
            category: "Electronics"
        },
        {
            id: 2,
            name: "Mobile",
            price: 20000,
            category: "Electronics"
        },
        {
            id: 3,
            name: "Shoes",
            price: 2500,
            category: "Fashion"
        }
    ]);


    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");


    const [editId, setEditId] = useState(null);
    const [search, setSearch] = useState("");
    const [filterCategory, setFilterCategory] = useState("All");
    const [selectedProduct, setSelectedProduct] = useState(null);


    const handleSubmit = () => {

        if (
            productName.trim() === "" ||
            price.trim() === "" ||
            category === ""
        ) {
            alert("Please fill all fields");
            return;
        }

        if (Number(price) <= 0) {
            alert("Price must be greater than zero");
            return;
        }

        if (editId === null) {

            const newProduct = {
                id: Date.now(),
                name: productName,
                price: Number(price),
                category: category
            };

            setProducts([...products, newProduct]);

        } else {

            setProducts(
                products.map((product) =>
                    product.id === editId
                        ? {
                            ...product,
                            name: productName,
                            price: Number(price),
                            category: category
                        }
                        : product
                )
            );

            setEditId(null);
        }

        handleReset();
    };


    const handleEdit = (product) => {

        setProductName(product.name);
        setPrice(String(product.price));
        setCategory(product.category);

        setEditId(product.id);
    };


    const handleDelete = (id) => {

        setProducts(
            products.filter((product) => product.id !== id)
        );

        if (selectedProduct?.id === id) {
            setSelectedProduct(null);
        }

        if (editId === id) {
            handleReset();
        }
    };

  
    const handleReset = () => {

        setProductName("");
        setPrice("");
        setCategory("");
        setEditId(null);
    };

   
    const filteredProducts = products.filter((product) => {

        const matchSearch = product.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchCategory =
            filterCategory === "All" ||
            product.category === filterCategory;

        return matchSearch && matchCategory;
    });

    // Child to Parent Communication
    const handleSelect = (product) => {
        setSelectedProduct(product);
    };

    return (
        <div>

            <h1>Product Management</h1>

        

            <h2>
                {editId === null ? "Add Product" : "Edit Product"}
            </h2>

            <input
                type="text"
                placeholder="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
            />

            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />

            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="">Select Category</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Accessories">Accessories</option>
            </select>

            <button onClick={handleSubmit}>
                {editId === null ? "Add Product" : "Update Product"}
            </button>

            <button onClick={handleReset}>
                Reset
            </button>

            <hr />

            <h2>Search Products</h2>

            <input
                type="text"
                placeholder="Search by name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

          
            <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
            >
                <option value="All">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Accessories">Accessories</option>
            </select>


            <h3>Total Products: {products.length}</h3>

            <h3>Matching Products: {filteredProducts.length}</h3>

            <hr />

  

            {filteredProducts.length === 0 ? (

                <h3>No products found</h3>

            ) : (

                filteredProducts.map((product) => (

                    <ProductCard
                        key={product.id}
                        product={product}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        onSelect={handleSelect}
                    />

                ))

            )}

            <hr />

    

            <h2>Selected Product Information</h2>

            {selectedProduct ? (

                <div>
                    <p>Name: {selectedProduct.name}</p>
                    <p>Price: ₹{selectedProduct.price}</p>
                    <p>Category: {selectedProduct.category}</p>
                </div>

            ) : (

                <p>Please select a product</p>

            )}

        </div>
    );
}

export default ProductLi;
