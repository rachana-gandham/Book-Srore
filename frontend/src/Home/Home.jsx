// import React, { useState, useContext, useEffect } from 'react'
// import { AuthContext } from '../context/AuthContext'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

// export default function Home() {
//   const [products,setProducts]=useState([])
//   const {user}=useContext(AuthContext)
//   const navigate=useNavigate()
//   useEffect(()=>{
//     fetchProducts();
//   },[])
//   async function fetchProducts(){
//     await axios.get("http://localhost:4001/api/product")
//       .then((res)=>{
//         console.log(res)
//         setProducts(res.data)
//       })
//       .catch((err)=>{
//         console.log("Error from home at fetching products",err)
//       })
//   }
//   async function addCart(productId){
//     console.log(productId)
//     if(!user || !user.token){
//       alert("Please log in first")
//       return 
//     }
//     try{
//       await axios.post("http://localhost:4001/api/cart/add",{productId},{
//         headers:{Authorization:`Bearer ${user.token}`}
//       })
//         .then((res)=>{
//           alert("Product added to cart")
//           navigate("/cart")
//         })
//     }
//     catch(err){
//       console.log(err)
//     }
//   }
//   return (
//     <div>
//       <h2>Books</h2>
//       <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"10px"}}>
//         {
//           products.map((productItem)=>(
//             <div key={productItem._id} style={{boxShadow:"0px 1px 4px black",padding:"10px"}}>
//               <h3>{productItem.name}</h3>
//               <p>Price:{productItem.price}</p>
//               <p>Description:{productItem.description}</p>
//               <p>Stock:{productItem.stock}</p>
//               <p>Category:{productItem.category}</p>
//               <p>
//                 <img width="30%" src={productItem.imageUrl} alt={productItem.name} />
//               </p>
//               {user && user.role==="buyer"&&(
//                 <button onClick={()=>addCart(productItem._id)}>Add to cart</button>
//               )}
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   )
// }

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function Home() {
//     const [category, setCategory] = useState(""); // Selected category
//     const [books, setBooks] = useState([]); // Books to display

//     function fetchBooks(selectedCategory) {
//         axios
//             .get(`http://localhost:4001/api/books?category=${selectedCategory}`)
//             .then((res) => {
//                 setBooks(res.data); // Update state with books
//             })
//             .catch((err) => {
//                 console.log("Error fetching books:", err);
//             });
//     }
   
  

//     // Handle dropdown change
//     function handleCategoryChange(e) {
//         const selectedCategory = e.target.value;
//         setCategory(selectedCategory);
//         fetchBooks(selectedCategory);
//         console.log(selectedCategory)
//     }

//     return (
//         <div>
//             <h2>Book Store</h2>
            
//             {/* Dropdown List for Categories */}
//             <label>Select Category: </label>
//             <select value={category} onChange={handleCategoryChange}>
//                 <option value="">-- Select a Category --</option>
//                 <option value="Fiction">Fiction</option>
//                 <option value="Non-Fiction">Non-Fiction</option>
//                 <option value="Science">Science</option>
//                 <option value="History">History</option>
//             </select>

//             {/* Display Books */}
//             <div>
//                 {books.length > 0 ? (
//                     books.map((book) => (
//                         <div key={book._id}>
//                             <h3>{book.name}</h3>
//                             <p>{book.description}</p>
//                             <p>Price: ${book.price}</p>
//                             <p>Stock: {book.stock}</p>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No books available for this category.</p>
//                 )}
//             </div>
//         </div>
//     );
// }
// import React, { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import { AuthContext } from "../context/AuthContext"; // Import AuthContext for user authentication
// import { useNavigate } from "react-router-dom";

// export default function Home() {
//     const [category, setCategory] = useState(""); // Selected category
//     const [books, setBooks] = useState([]); // Books to display
//     const { user } = useContext(AuthContext); // Get logged-in user info
//     const navigate = useNavigate();

//     function fetchBooks(selectedCategory) {
//         axios
//             .get(`http://localhost:4001/api/books?category=${selectedCategory}`)
//             .then((res) => {
//                 setBooks(res.data); // Update state with books
//             })
//             .catch((err) => {
//                 console.log("Error fetching books:", err);
//             });
//     }

//     // Handle dropdown change
//     function handleCategoryChange(e) {
//         const selectedCategory = e.target.value;
//         setCategory(selectedCategory);
//         fetchBooks(selectedCategory);
//     }

//     // Add to cart function
//     async function addCart(bookId) {
//         if (!user || !user.token) {
//             alert("Please log in first.");
//             return;
//         }

//         try {
//             await axios.post(
//                 "http://localhost:4001/api/cart/add",
//                 { productId: bookId },
//                 { headers: { Authorization: `Bearer ${user.token}` } }
//             );
//             alert("Book added to cart!");
//             navigate("/cart");
//         } catch (err) {
//             console.log("Error adding book to cart:", err);
//         }
//     }

//     return (
//         <div style={{ padding: "20px" }}>
//             <h2>Book Store</h2>
            
//             {/* Dropdown List for Categories */}
//             <label>Select Category: </label>
//             <select value={category} onChange={handleCategoryChange}>
//                 <option value="">-- Select a Category --</option>
//                 <option value="Fiction">Fiction</option>
//                 <option value="Non-Fiction">Non-Fiction</option>
//                 <option value="Science">Science</option>
//                 <option value="History">History</option>
//             </select>

//             {/* Books Grid */}
//             <div style={{ 
//                 display: "grid", 
//                 gridTemplateColumns: "repeat(3, 1fr)",  // 3 books per row
//                 gap: "15px", 
//                 marginTop: "20px"
//             }}>
//                 {books.length > 0 ? (
//                     books.map((book) => (
//                         <div key={book._id} 
//                             style={{
//                                 boxShadow: "0px 1px 4px black",
//                                 padding: "15px",
//                                 borderRadius: "8px",
//                                 textAlign: "center",
//                                 fontSize: "14px",
//                                 background: "#fff"
//                             }}
//                         >
//                             <h4>{book.name}</h4>
//                             <img 
//                                 src={book.imageUrl} 
//                                 alt={book.name} 
//                                 style={{ 
//                                     width: "120px",  
//                                     height: "150px", 
//                                     objectFit: "cover", 
//                                     borderRadius: "5px" 
//                                 }} 
//                             />
//                             <p style={{ marginTop: "10px", fontSize: "13px" }}>
//                                 {book.description}
//                             </p> 
//                             <p><strong>Price:</strong> ${book.price}</p>
//                             <p><strong>Stock:</strong> {book.stock}</p>

//                             {/* Show "Add to Cart" button only for buyers */}
//                             {user && user.role === "buyer" && (
//                                 <button 
//                                     onClick={() => addCart(book._id)}
//                                     style={{
//                                         marginTop: "10px",
//                                         padding: "8px 12px",
//                                         backgroundColor: "blue",
//                                         color: "white",
//                                         border: "none",
//                                         borderRadius: "5px",
//                                         cursor: "pointer"
//                                     }}
//                                 >
//                                     Add to Cart
//                                 </button>
//                             )}
//                         </div>
//                     ))
//                 ) : (
//                     <p>No books available for this category.</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// import React, { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import { AuthContext } from "../context/AuthContext"; // Import AuthContext for user authentication
// import { useNavigate } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

// export default function Home() {
//     const [category, setCategory] = useState(""); // Selected category
//     const [books, setBooks] = useState([]); // Books to display
//     const { user } = useContext(AuthContext); // Get logged-in user info
//     const navigate = useNavigate();

//     useEffect(() => {
//         fetchBooks(category);
//     }, [category]);

//     function fetchBooks(selectedCategory) {
//         let url = "http://localhost:4001/api/books"; // Default: fetch all books
//         if (selectedCategory) {
//             url += `?category=${selectedCategory}`; // Fetch by category if selected
//         }

//         axios
//             .get(url)
//             .then((res) => {
//                 setBooks(res.data);
//             })
//             .catch((err) => {
//                 console.log("Error fetching books:", err);
//             });
//     }

//     function handleCategoryChange(e) {
//         setCategory(e.target.value);
//     }

//     async function addCart(bookId) {
//         if (!user || !user.token) {
//             alert("Please log in first.");
//             return;
//         }

//         try {
//             await axios.post(
//                 "http://localhost:4001/api/cart/add",
//                 { productId: bookId },
//                 { headers: { Authorization: `Bearer ${user.token}` } }
//             );
//             alert("Book added to cart!");
//             navigate("/cart");
//         } catch (err) {
//             console.log("Error adding book to cart:", err);
//         }
//     }

//     return (
       
//         <div style={{ padding: "20px" }}>
//             <h2>Book Store</h2>
            
//             {/* Dropdown List for Categories */}
//             <label style={{ fontSize: "16px", fontWeight: "bold", color: "black", marginRight: "10px" }}>
//                 Select Category:
//             </label>
            
//             <select 
//                 value={category} 
//                 onChange={handleCategoryChange} 
//                 style={{
//                     backgroundColor: "blue", 
//                     color: "white", 
//                     padding: "8px", 
//                     borderRadius: "5px", 
//                     fontSize: "16px",
//                     border: "1px solid #ccc",
//                     cursor: "pointer",
//                     appearance: "none"
//                 }}
//             >
//                 <option value="" style={{ backgroundColor: "blue", color: "white" }}>All Books</option>
//                 <option value="Fiction" style={{ backgroundColor: "white", color: "black" }}>Fiction</option>
//                 <option value="Non-Fiction" style={{ backgroundColor: "white", color: "black" }}>Non-Fiction</option>
//                 <option value="Science" style={{ backgroundColor: "white", color: "black" }}>Science</option>
//                 <option value="History" style={{ backgroundColor: "white", color: "black" }}>History</option>
//             </select>

//             {/* Swiper.js Carousel for Books */}
//             <Swiper
//                 modules={[Navigation, Pagination, Autoplay]}
//                 spaceBetween={20}
//                 slidesPerView={3} // Adjust based on screen size
//                 navigation
//                 pagination={{ clickable: true }}
//                 autoplay={{ delay: 3000 }}
//                 breakpoints={{
//                     640: { slidesPerView: 1 },
//                     768: { slidesPerView: 2 },
//                     1024: { slidesPerView: 3 },
//                 }}
//                 style={{ width: "80%", margin: "auto", marginTop: "20px" }}
//             >
//                 {books.length > 0 ? (
//                     books.map((book) => (
//                         <SwiperSlide key={book._id}>
//                             <div 
//                                 style={{
//                                     boxShadow: "0px 1px 4px black",
//                                     padding: "15px",
//                                     borderRadius: "8px",
//                                     textAlign: "center",
//                                     fontSize: "14px",
//                                     background: "#fff"
//                                 }}
//                             >
//                                 <h4>{book.name}</h4>
//                                 <img 
//                                     src={book.imageUrl} 
//                                     alt={book.name} 
//                                     style={{ 
//                                         width: "120px",  
//                                         height: "150px", 
//                                         objectFit: "cover", 
//                                         borderRadius: "5px" 
//                                     }} 
//                                 />
//                                 <p style={{ marginTop: "10px", fontSize: "13px" }}>{book.description}</p> 
//                                 <p><strong>Price:</strong> ${book.price}</p>
//                                 {/* <p><strong>Stock:</strong> {book.stock}</p> */}

//                                 {/* Show "Add to Cart" button only for buyers */}
//                                 {user && user.role === "buyer" && (
//                                     <button 
//                                         onClick={() => addCart(book._id)}
//                                         style={{
//                                             marginTop: "10px",
//                                             padding: "8px 12px",
//                                             backgroundColor: "blue",
//                                             color: "white",
//                                             border: "none",
//                                             borderRadius: "5px",
//                                             cursor: "pointer"
//                                         }}
//                                     >
//                                         Add to Cart
//                                     </button>
//                                 )}
//                             </div>
//                         </SwiperSlide>
//                     ))
//                 ) : (
//                     <p>No books available.</p>
//                 )}
//             </Swiper>
//         </div>
//     );
// }


// import React, { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "./Home.css"; // Import the CSS file

// export default function Home() {
//     const [category, setCategory] = useState("");
//     const [books, setBooks] = useState([]);
//     const { user } = useContext(AuthContext);
//     const navigate = useNavigate();

//     useEffect(() => {
//         fetchBooks(category);
//     }, [category]);

//     function fetchBooks(selectedCategory) {
//         let url = "http://localhost:4001/api/books";
//         if (selectedCategory) {
//             url += `?category=${selectedCategory}`;
//         }

//         axios
//             .get(url)
//             .then((res) => {
//                 setBooks(res.data);
//             })
//             .catch((err) => {
//                 console.log("Error fetching books:", err);
//             });
//     }

//     function handleCategoryChange(e) {
//         setCategory(e.target.value);
//     }

//     async function addCart(bookId) {
//         if (!user || !user.token) {
//             alert("Please log in first.");
//             return;
//         }

//         try {
//             await axios.post(
//                 "http://localhost:4001/api/cart/add",
//                 { productId: bookId },
//                 { headers: { Authorization: `Bearer ${user.token}` } }
//             );
//             alert("Book added to cart!");
//             navigate("/cart");
//         } catch (err) {
//             console.log("Error adding book to cart:", err);
//         }
//     }

//     return (
//         <div className="home-container">
//             <div className="home-content">
//                 <h2>Book Store</h2>

//                 <label style={{ fontSize: "16px", fontWeight: "bold", color: "black", marginRight: "10px" }}>
//                     Select Category:
//                 </label>
//                 <select 
//                     value={category} 
//                     onChange={handleCategoryChange} 
//                     style={{
//                         backgroundColor: "blue", 
//                         color: "white", 
//                         padding: "8px", 
//                         borderRadius: "5px", 
//                         fontSize: "16px",
//                         border: "1px solid #ccc",
//                         cursor: "pointer",
//                         appearance: "none"
//                     }}
//                 >
//                     <option value="">All Books</option>
//                     <option value="Fiction">Fiction</option>
//                     <option value="Non-Fiction">Non-Fiction</option>
//                     <option value="Science">Science</option>
//                     <option value="History">History</option>
//                 </select>

//                 <Swiper
//                     modules={[Navigation, Pagination, Autoplay]}
//                     spaceBetween={20}
//                     slidesPerView={3}
//                     navigation
//                     pagination={{ clickable: true }}
//                     autoplay={{ delay: 3000 }}
//                     breakpoints={{
//                         640: { slidesPerView: 1 },
//                         768: { slidesPerView: 2 },
//                         1024: { slidesPerView: 3 },
//                     }}
//                     style={{ width: "80%", margin: "auto", marginTop: "20px" }}
//                 >
//                     {books.length > 0 ? (
//                         books.map((book) => (
//                             <SwiperSlide key={book._id}>
//                                 <div 
//                                     style={{
//                                         boxShadow: "0px 1px 4px black",
//                                         padding: "15px",
//                                         borderRadius: "8px",
//                                         textAlign: "center",
//                                         fontSize: "14px",
//                                         background: "#fff"
//                                     }}
//                                 >
//                                     <h4>{book.name}</h4>
//                                     <img 
//                                         src={book.imageUrl} 
//                                         alt={book.name} 
//                                         style={{ 
//                                             width: "120px",  
//                                             height: "150px", 
//                                             objectFit: "cover", 
//                                             borderRadius: "5px" 
//                                         }} 
//                                     />
//                                     <p style={{ marginTop: "10px", fontSize: "13px" }}>{book.description}</p> 
//                                     <p><strong>Price:</strong> ${book.price}</p>

//                                     {user && user.role === "buyer" && (
//                                         <button 
//                                             onClick={() => addCart(book._id)}
//                                             style={{
//                                                 marginTop: "10px",
//                                                 padding: "8px 12px",
//                                                 backgroundColor: "blue",
//                                                 color: "white",
//                                                 border: "none",
//                                                 borderRadius: "5px",
//                                                 cursor: "pointer"
//                                             }}
//                                         >
//                                             Add to Cart
//                                         </button>
//                                     )}
//                                 </div>
//                             </SwiperSlide>
//                         ))
//                     ) : (
//                         <p>No books available.</p>
//                     )}
//                 </Swiper>
//             </div>
//         </div>
//     );
// }


import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./Home.css"; // Import the CSS file

export default function Home() {
    const [category, setCategory] = useState("");
    const [books, setBooks] = useState([]);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        fetchBooks(category);
    }, [category]);

    function fetchBooks(selectedCategory) {
        let url = "http://localhost:4001/api/books";
        if (selectedCategory) {
            url += `?category=${selectedCategory}`;
        }

        axios
            .get(url)
            .then((res) => {
                setBooks(res.data);
            })
            .catch((err) => {
                console.log("Error fetching books:", err);
            });
    }

    function handleCategoryChange(e) {
        setCategory(e.target.value);
    }

    async function addCart(bookId) {
        if (!user || !user.token) {
            alert("Please log in first.");
            return;
        }

        try {
            await axios.post(
                "http://localhost:4001/api/cart/add",
                { productId: bookId },
                { headers: { Authorization: `Bearer ${user.token}` } }
            );
            alert("Book added to cart!");
            navigate("/cart");
        } catch (err) {
            console.log("Error adding book to cart:", err);
        }
    }

    return (
        <div className="home-container">
            <div className="home-content">
                <h2>Book Store</h2>

                <label className="category-label">Select Category:</label>
                <select value={category} onChange={handleCategoryChange} className="category-select">
                    <option value="">All Books</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Non-Fiction">Non-Fiction</option>
                    <option value="Science">Science</option>
                    <option value="History">History</option>
                </select>
              
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="books-swiper"
                >
                    {books.length > 0 ? (
                        books.map((book) => (
                            <SwiperSlide key={book._id}>
                                <div className="book-card">
                                    <img src={book.imageUrl} alt={book.name} className="book-image" />
                                    <h4 className="book-title">{book.name}</h4>
                                    <p className="book-description">{book.description}</p>
                                    <p className="book-price"><strong>Price:</strong> ${book.price}</p>

                                    {user && user.role === "buyer" && (
                                        <button onClick={() => addCart(book._id)} className="add-to-cart-btn">
                                            Add to Cart
                                        </button>
                                    )}
                                </div>
                            </SwiperSlide>
                        ))
                    ) : (
                        <p>No books available.</p>
                    )}
                </Swiper>
            </div>
        </div>
    );
}
