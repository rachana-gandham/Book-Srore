// import React, { useContext, useState } from 'react'
// import axios from "axios"
// import { AuthContext } from '../context/AuthContext'
// import { useNavigate } from 'react-router-dom'

// export default function AddProduct() {
//     const { user } = useContext(AuthContext)
//     const navigate = useNavigate()
//     const [formData, setFormData] = useState({ name: "", description: "", price: null, category: "", stock: 0, imageUrl: "" })
//     function handleChange(e) {
//         setFormData({ ...formData, [e.target.name]: e.target.value })
//     }
//     // function addProduct(e) {
//     //     e.preventDefault()
//     //     axios.post("https://book-srore.onrender.com/api/product/add", formData, {
//     //         headers: { Authorization: `Bearer ${user.token}` }
//     //     })
//     //         .then((res) => {
//     //             console.log("response from add product", res)
//     //             alert("Product added")
//     //         })
//     //         .catch((error)=>{
//     //             console.log("error from add product",error)
//     //         })
//     // }
//     function addProduct(e) {
//         e.preventDefault();
//         // console.log(user)
//         // console.log("Sending token:", `Bearer ${user.token}`);
//         // Ensure the user is logged in
//         if (!user || !user.token) {
//             console.error("User is not logged in or token is missing");
//             alert("You must be logged in to add a product!");
//             return;
//         }
    
//         axios.post("https://book-srore.onrender.com/api/product/add", formData, {
//             headers: { Authorization: `Bearer ${user.token}` }
//         })
//         .then((res) => {
//             console.log("Response from add product:", res);
//             alert("Product added successfully");
//             navigate("/");
//         })
//         .catch((error) => {
//             console.error("Error from add product:", error);
//             alert("Failed to add product. Please check your credentials.");
//         });
//     }
    
//     return (
//         <div>
//             <h2>Add Product</h2>
//             <form encType='multipart/form-data'>
//                 <div>
//                     <input
//                         type="text"
//                         name="name"
//                         placeholder='Enter product name'
//                         onChange={handleChange} required />
//                 </div>
//                 <div>
//                     <input
//                         type="text"
//                         name="description"
//                         placeholder='Enter product description'
//                         onChange={handleChange} required />
//                 </div>
//                 <div>
//                     <input
//                         type="number"
//                         name="price"
//                         placeholder='Enter product price'
//                         onChange={handleChange} required />
//                 </div>
//                 <div>
//                     <input
//                         type="number"
//                         name="stock"
//                         placeholder='Enter products stock'
//                         onChange={handleChange} required />
//                 </div>
//                 <div>
//                     <label><strong>Category:</strong></label>
//                 </div>
//                 <div>
//                     <label>
//                         <input type="radio" name="category" value="Fiction" onChange={handleChange} required />
//                         Fiction
//                     </label>
//                     <label>
//                         <input type="radio" name="category" value="Non-Fiction" onChange={handleChange} required />
//                         Non-Fiction
//                     </label>
//                     <label>
//                         <input type="radio" name="category" value="Science" onChange={handleChange} required />
//                         Science
//                     </label>
//                     <label>
//                         <input type="radio" name="category" value="History" onChange={handleChange} required />
//                         History
//                     </label>
//                 </div>

//                 <div>
//                     <input
//                         type="text"
//                         name="imageUrl"
//                         placeholder='Enter product image'
//                         onChange={handleChange} required />
//                 </div>
//                 <button onClick={addProduct}>Add</button>
//             </form>
//         </div>
//     )
// }

import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addProduct = (e) => {
    e.preventDefault();

    if (!user || !user.token) {
      console.error("User is not logged in or token is missing");
      alert("You must be logged in to add a product!");
      return;
    }

    axios
      .post("https://book-srore.onrender.com/api/product/add", formData, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((res) => {
        console.log("Response from add product:", res);
        alert("Product added successfully");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error from add product:", error);
        alert("Failed to add product. Please check your credentials.");
      });
  };

  return (
    <div className="container">
      <h2>Add Product</h2>
      <form className="product-form" onSubmit={addProduct}>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor="name">Product Name:</label></td>
              <td><input type="text" name="name" id="name" placeholder="Enter product name" onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label htmlFor="description">Description:</label></td>
              <td><input type="text" name="description" id="description" placeholder="Enter product description" onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label htmlFor="price">Price:</label></td>
              <td><input type="number" name="price" id="price" placeholder="Enter product price" onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label htmlFor="stock">Stock:</label></td>
              <td><input type="number" name="stock" id="stock" placeholder="Enter product stock" onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label htmlFor="category">Category:</label></td>
              <td>
                <select name="category" id="category" onChange={handleChange} required>
                  <option value="">Select a category</option>
                  <option value="Fiction">Fiction</option>
                  <option value="Non-Fiction">Non-Fiction</option>
                  <option value="Science">Science</option>
                  <option value="History">History</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="imageUrl">Image URL:</label></td>
              <td><input type="text" name="imageUrl" id="imageUrl" placeholder="Enter product image URL" onChange={handleChange} required /></td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Add Product</button>
      </form>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: #f9f9f9;
        }
        .product-form {
          background: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          width: 400px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        td {
          padding: 10px;
        }
        input[type="text"],
        input[type="number"],
        select {
          width: 100%;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        button {
          width: 100%;
          padding: 10px;
          margin-top: 10px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          background: #0056b3;
        }
      `}</style>
    </div>
  );
}
