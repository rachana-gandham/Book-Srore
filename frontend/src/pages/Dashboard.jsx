// import React, { useState, useEffect, useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Dashboard() {
//     const { user } = useContext(AuthContext);
//     const navigate = useNavigate();
    
//     const [products, setProducts] = useState([]);
//     const [formData, setFormData] = useState({ name: "", description: "", price: "", category: "", stock: "", imageUrl: "" });
//     const [editingProduct, setEditingProduct] = useState(null); // Store product being edited

//     // Fetch seller's products
//     useEffect(() => {
//         if (!user || user.role !== "seller") {
//             alert("Access denied!");
//             navigate("/");
//             return;
//         }

//         axios.get("http://localhost:4001/api/product/seller", {
//             headers: { Authorization: `Bearer ${user.token}` }
//         })
//         .then(res => setProducts(res.data))
//         .catch(err => console.error("Error fetching products:", err));
//     }, [user, navigate]);

//     // Handle form input changes
//     function handleChange(e) {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     }

//     // Add or update a product
//     function handleSubmit(e) {
//         e.preventDefault();

//         const url = editingProduct 
//             ? `http://localhost:4001/api/product/update/${editingProduct._id}`
//             : "http://localhost:4001/api/product/add";

//         const method = editingProduct ? "put" : "post";

//         axios[method](url, formData, {
//             headers: { Authorization: `Bearer ${user.token}` }
//         })
//         .then(() => {
//             alert(editingProduct ? "Product updated" : "Product added");
//             setEditingProduct(null);
//             setFormData({ name: "", description: "", price: "", category: "", stock: "", imageUrl: "" });
//             window.location.reload(); // Reload products
//         })
//         .catch(err => console.error("Error:", err));
//     }

//     // Delete product
//     function handleDelete(productId) {
//         if (window.confirm("Are you sure you want to delete this product?")) {
//             axios.delete(`http://localhost:4001/api/product/delete/${productId}`, {
//                 headers: { Authorization: `Bearer ${user.token}` }
//             })
//             .then(() => {
//                 alert("Product deleted");
//                 setProducts(products.filter(p => p._id !== productId));
//             })
//             .catch(err => console.error("Error deleting product:", err));
//         }
//     }

//     return (
//         <div style={{ padding: "20px" }}>
//             <h2>Seller Dashboard</h2>
            
//             {/* Add / Edit Product Form */}
//             <form onSubmit={handleSubmit} style={{ marginBottom: "20px", display: "grid", gap: "10px" }}>
//                 <input type="text" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} required />
//                 <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
//                 <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
//                 <input type="number" name="stock" placeholder="Stock" value={formData.stock} onChange={handleChange} required />
//                 <input type="text" name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} required />
//                 <select name="category" value={formData.category} onChange={handleChange} required>
//                     <option value="">Select Category</option>
//                     <option value="Fiction">Fiction</option>
//                     <option value="Non-Fiction">Non-Fiction</option>
//                     <option value="Science">Science</option>
//                     <option value="History">History</option>
//                 </select>
//                 <button type="submit">{editingProduct ? "Update Product" : "Add Product"}</button>
//             </form>

//             {/* Product List */}
//             <h3>Your Products</h3>
//             {products.length === 0 ? <p>No products found.</p> : (
//                 <table border="1" cellPadding="10">
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Description</th>
//                             <th>Price</th>
//                             <th>Stock</th>
//                             <th>Category</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {products.map((product) => (
//                             <tr key={product._id}>
//                                 <td>{product.name}</td>
//                                 <td>{product.description}</td>
//                                 <td>${product.price}</td>
//                                 <td>{product.stock}</td>
//                                 <td>{product.category}</td>
//                                 <td>
//                                     <button onClick={() => setEditingProduct(product)}>Edit</button>
//                                     <button onClick={() => handleDelete(product._id)} style={{ marginLeft: "10px", backgroundColor: "red", color: "white" }}>Delete</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// }
// import React from "react";
// import { useNavigate } from "react-router-dom";
// // import "./Dashboard.css"; // You can create a separate CSS file for styling

// export default function Dashboard() {
//     const navigate = useNavigate();

//     return (
//         <div className="dashboard-container">
//             <h2>Seller Dashboard</h2>

//             <button className="add-product-btn" onClick={() => navigate("/add-product")}>
//                 Add New Product
//             </button>

//             {/* Add more dashboard functionalities here like viewing sales, managing products, etc. */}
//         </div>
//     );
// }

// 

// import React, { useState, useEffect, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { AuthContext } from "../context/AuthContext";  // Assuming AuthContext is used to manage authentication

// export default function Dashboard() {
//     const [products, setProducts] = useState([]); // State to store products fetched from the server
//     const { user } = useContext(AuthContext);  // To get the authenticated user
//     const navigate = useNavigate();

//     // Fetch the seller's products when the component mounts
//     useEffect(() => {
//         if (user && user.token) {
//             fetchSellerProducts();  // Fetch products if user is authenticated
//         }
//     }, [user]);

//     // Function to fetch the seller's products from the backend
//     const fetchSellerProducts = async () => {
//         try {
//             const response = await axios.get("http://localhost:4001/api/product/seller", {
//                 headers: {
//                     Authorization: `Bearer ${user.token}`,
//                 },
//             });
//             setProducts(response.data);  // Storing products fetched in state
//         } catch (err) {
//             console.log("Error fetching seller's products:", err);
//         }
//     };

//     // Function to handle the delete button click
//     const handleDelete = async (productId) => {
//         try {
//             await axios.delete(`http://localhost:4001/api/product/${productId}`, {
//                 headers: {
//                     Authorization: `Bearer ${user.token}`,
//                 },
//             });
//             alert("Product deleted successfully");
//             fetchSellerProducts(); // Refresh the product list
//         } catch (err) {
//             console.log("Error deleting product:", err);
//         }
//     };

//     // Function to handle the update button click
//     const handleUpdate = (productId) => {
//         // Navigate to the Update Product page with the productId
//         navigate(`/update-product/${productId}`);
//     };

//     return (
//         <div className="dashboard-container">
//             <h2>Seller Dashboard</h2>
            
//             {/* Button to add a new product */}
//             <button className="add-product-btn" onClick={() => navigate("/add-product")}>
//                 Add Product
//             </button>

//             {/* Displaying the list of products added by the seller */}
//             <div className="seller-products">
//                 <h3>Your Products</h3>

//                 {products.length === 0 ? (
//                     <p>No products found. Start adding products!</p>
//                 ) : (
//                     <div className="product-grid">
//                         {products.map((product) => (
//                             <div key={product._id} className="product-item">
//                                 <img src={product.imageUrl} alt={product.name} className="product-image" />
//                                 <h4>{product.name}</h4>
//                                 <p>{product.description}</p>
//                                 <p><strong>Price:</strong> ${product.price}</p>
                                
//                                 {/* Buttons for Update and Delete */}
//                                 <button onClick={() => handleUpdate(product._id)} className="update-btn">
//                                     Update
//                                 </button>
//                                 <button onClick={() => handleDelete(product._id)} className="delete-btn">
//                                     Delete
//                                 </button>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";  // Assuming AuthContext is used to manage authentication

export default function Dashboard() {
    const [products, setProducts] = useState([]); // State to store products fetched from the server
    const { user } = useContext(AuthContext);  // To get the authenticated user
    const navigate = useNavigate();

    // Fetch the seller's products when the component mounts
    useEffect(() => {
        if (user && user.token) {
            fetchSellerProducts();  // Fetch products if user is authenticated
        }
    }, [user]);

    // Function to fetch the seller's products from the backend
    const fetchSellerProducts = async () => {
        try {
            const response = await axios.get("http://localhost:4001/api/product/seller", {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            setProducts(response.data);  // Storing products fetched in state
        } catch (err) {
            console.log("Error fetching seller's products:", err);
        }
    };

    // Function to handle the delete button click
    const handleDelete = async (productId) => {
        try {
            await axios.delete(`http://localhost:4001/api/product/${productId}`, {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            alert("Product deleted successfully");
            fetchSellerProducts(); // Refresh the product list
        } catch (err) {
            console.log("Error deleting product:", err);
        }
    };

    // Function to handle the update button click
    const handleUpdate = (productId) => {
        // Navigate to the Update Product page with the productId
        navigate(`/update-product/${productId}`);
    };

    return (
        <div className="dashboard-container">
            <h2>Seller Dashboard</h2>
            
            {/* Button to add a new product */}
            <button className="add-product-btn" onClick={() => navigate("/add-product")}>
                Add Product
            </button>

            {/* Displaying the list of products added by the seller */}
            <div className="seller-products">
                <h3>Your Products</h3>

                {products.length === 0 ? (
                    <p>No products found. Start adding products!</p>
                ) : (
                    <div className="product-grid">
                        {products.map((product) => (
                            <div key={product._id} className="product-item">
                                <img src={product.imageUrl} alt={product.name} className="product-image" />
                                <h4>{product.name}</h4>
                                <p>{product.description}</p>
                                <p><strong>Price:</strong> ${product.price}</p>
                                
                                {/* Buttons for Update and Delete */}
                                <button onClick={() => handleUpdate(product._id)} className="update-btn">
                                    Update
                                </button>
                                <button onClick={() => handleDelete(product._id)} className="delete-btn">
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
