import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
// export default function Cart() {
//     const [cart, setCart] = useState([])
//     const { user } = useContext(AuthContext)
//     const navigate = useNavigate()
//     useEffect(() => {
//         fetchCartProducts()
//     }, [])
//     async function fetchCartProducts() {
//         await axios.get("https://book-srore.onrender.com/api/cart", {
//             headers: { Authorization: `Bearer ${user.token}` }
//         })
//         // console.log(res)
//             .then((res) => {
//                 console.log(res.data)
//                 setCart(res.data.products)
//             })
//             .catch((err) => {
//                 console.log("error from cart fetch", err)
//             })
//     }
//     const totalPrice = cart.reduce((acc, item) => acc + item.quantity * item.productId.price, 0)
//     function handleCheckout(){
//         navigate("/checkout",{state:{cart}})
//     }
//     async function removeFromCart(productId){
//         try{
//             await axios.delete(`https://book-srore.onrender.com/api/cart/remove/${productId}`,{
//                 headers:{Authorization:`Bearer ${user.token}`}
//             })
//             .then((res)=>{
//                 console.log(res.data.cart.products)
//                 setCart(res.data.cart.products)
//             })
            
//         }
//         catch(err){
//             console.log("from cart remove Item",err)
//         }
//     }
//     if (!user) return <p>Please login to view your cart details</p>
//     return (
//         <div>
//             <h2>Your Cart</h2>
//             {
//                 cart.length === 0 ? (
//                     <p>No products in cart</p>
//                 ) : (
//                     <div>
//                         {
//                             cart.map((item) => (
//                                 <div key={item.productId._id}>
//                                     <h3>{item.productId.name}</h3>
//                                     <p>Qunatity:{item.quantity}</p>
//                                     <p>Price:{item.productId.price}</p>
//                                     <p>Description:{item.productId.description}</p>
//                                     <p><img src={item.productId.imageUrl} alt={item.productId.name} width="30%" /></p>
//                                     <p>Total Price: Rs. {(item.quantity * item.productId.price).toFixed(2)}</p>
//                                     <button onClick={() => removeFromCart(item.productId._id)}>Remove Item</button>
//                                 </div>
//                             ))
//                         }
//                         <h3>Total Price: Rs. {totalPrice.toFixed(2)}</h3>
//                         <button onClick={handleCheckout}>Proceed to Pay</button>
//                     </div>
//                 )
//             }
//         </div>
//     )
// }

// import React, { useState, useEffect, useContext } from 'react'
// import axios from 'axios'
// import { AuthContext } from '../context/AuthContext'
// import { useNavigate } from 'react-router-dom'

// import React, { useState, useEffect, useContext } from 'react'
// import axios from 'axios'
// import { AuthContext } from '../context/AuthContext'
// import { useNavigate } from 'react-router-dom'

// import React, { useState, useEffect, useContext } from 'react'
// import axios from 'axios'
// import { AuthContext } from '../context/AuthContext'
// import { useNavigate } from 'react-router-dom'

// import React, { useState, useEffect, useContext } from 'react'
// import axios from 'axios'
// import { AuthContext } from '../context/AuthContext'
// import { useNavigate } from 'react-router-dom'

export default function Cart() {
    const [cart, setCart] = useState([]);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCartProducts();
    }, []);

    async function fetchCartProducts() {
        await axios
            .get("https://book-srore.onrender.com/api/cart", {
                headers: { Authorization: `Bearer ${user.token}` },
            })
            .then((res) => {
                console.log(res.data);
                setCart(res.data.products);
            })
            .catch((err) => {
                console.log("error from cart fetch", err);
            });
    }

    const totalPrice = cart.reduce((acc, item) => acc + item.quantity * item.productId.price, 0);

    function handleCheckout() {
        navigate("/checkout", { state: { cart } });
    }

    async function removeFromCart(productId) {
        try {
            await axios
                .delete(`https://book-srore.onrender.com/api/cart/remove/${productId}`, {
                    headers: { Authorization: `Bearer ${user.token}` },
                })
                .then((res) => {
                    console.log(res.data.cart.products);
                    setCart(res.data.cart.products);
                });
        } catch (err) {
            console.log("from cart remove Item", err);
        }
    }

    if (!user) return <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>Please login to view your cart details</p>;

    return (
        <div style={{ padding: "20px" }}>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Your Cart</h2>

            {cart.length === 0 ? (
                <p style={{ textAlign: "center", fontSize: "16px", fontWeight: "bold" }}>No products in cart</p>
            ) : (
                <div>
                    {/* Dynamic Grid Layout based on number of books */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                cart.length === 1
                                    ? "1fr" // 1 book centered
                                    : cart.length === 2
                                    ? "repeat(2, 1fr)" // 2 books side by side
                                    : "repeat(3, 1fr)", // 3+ books in a row
                            gap: "20px",
                            justifyContent: cart.length === 1 ? "center" : "normal",
                            alignItems: "center",
                            textAlign: "center",
                        }}
                    >
                        {cart.map((item) => (
                            <div
                                key={item.productId._id}
                                style={{
                                    boxShadow: "0px 1px 4px black",
                                    padding: "15px",
                                    borderRadius: "8px",
                                    background: "#fff",
                                    fontSize: "14px",
                                    textAlign: "center",
                                    margin: cart.length === 1 ? "0 auto" : "unset", // Center if only 1 book
                                    maxWidth: cart.length === 1 ? "250px" : "unset", // Limit width if 1 book
                                }}
                            >
                                <h4>{item.productId.name}</h4>
                                <img
                                    src={item.productId.imageUrl}
                                    alt={item.productId.name}
                                    style={{
                                        width: "100px",
                                        height: "130px",
                                        objectFit: "cover",
                                        borderRadius: "5px",
                                        marginBottom: "10px",
                                    }}
                                />
                                <p><strong>Quantity:</strong> {item.quantity}</p>
                                <p><strong>Price:</strong> Rs. {item.productId.price}</p>
                                <p style={{ fontSize: "13px", marginBottom: "10px" }}>
                                    <strong>Description:</strong> {item.productId.description}
                                </p>
                                <p><strong>Total Price:</strong> Rs. {(item.quantity * item.productId.price).toFixed(2)}</p>

                                <button
                                    onClick={() => removeFromCart(item.productId._id)}
                                    style={{
                                        marginTop: "10px",
                                        padding: "8px 12px",
                                        backgroundColor: "red",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                    }}
                                >
                                    Remove Item
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Total Price & Checkout Button */}
                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                        <h3>Total Price: Rs. {totalPrice.toFixed(2)}</h3>
                        <button
                            onClick={handleCheckout}
                            style={{
                                padding: "10px 20px",
                                backgroundColor: "green",
                                color: "white",
                                border: "none",
                                borderRadius: "5px",
                                fontSize: "16px",
                                cursor: "pointer",
                                marginTop: "10px",
                            }}
                        >
                            Proceed to Pay
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
