// import React, { useState, useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import "./Register.css"; // Import CSS file

// export default function Register() {
//     const [formData, setFormData] = useState({ username: "", email: "", password: "", mobile: "" });
//     const { setUser } = useContext(AuthContext);
//     const navigate = useNavigate();

//     function handleChange(e) {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     }

//     function handleSubmit(e) {
//         e.preventDefault();
//         console.log(formData);
//         axios.post("https://book-srore.onrender.com/api/auth/signup", formData)
//             .then((res) => {
//                 console.log("response from register", res);
//                 localStorage.setItem("token", res.data.token);
//                 setUser({ token: res.data.token, role: res.data.role });
//                 navigate("/");
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }

//     return (
//         <div className="register-container"> {/* Background Image Wrapper */}
//             <div className="register-form"> {/* Form Box */}
//                 <h2 style={{ textAlign: "center", marginBottom: "20px", fontSize: "24px", color: "#333" }}>Register</h2>
//                 <form onSubmit={handleSubmit}>
//                     <table style={{ width: "100%", borderCollapse: "collapse" }}>
//                         <tbody>
//                             <tr>
//                                 <td style={{ padding: "10px", fontWeight: "bold" }}>
//                                     <label htmlFor="username">Name:</label>
//                                 </td>
//                                 <td style={{ padding: "10px" }}>
//                                     <input type="text" id="username" name="username" placeholder="Enter your name" onChange={handleChange} required 
//                                         style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" }} />
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td style={{ padding: "10px", fontWeight: "bold" }}>
//                                     <label htmlFor="email">Email ID:</label>
//                                 </td>
//                                 <td style={{ padding: "10px" }}>
//                                     <input type="email" id="email" name="email" placeholder="Enter your email" onChange={handleChange} required
//                                         style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" }} />
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td style={{ padding: "10px", fontWeight: "bold" }}>
//                                     <label htmlFor="password">Password:</label>
//                                 </td>
//                                 <td style={{ padding: "10px" }}>
//                                     <input type="password" id="password" name="password" placeholder="Enter your password" onChange={handleChange} required
//                                         style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" }} />
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td style={{ padding: "10px", fontWeight: "bold" }}>
//                                     <label htmlFor="mobile">Mobile Number:</label>
//                                 </td>
//                                 <td style={{ padding: "10px" }}>
//                                     <input type="text" id="mobile" name="mobile" placeholder="Enter your mobile number" onChange={handleChange} required
//                                         style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" }} />
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td style={{ padding: "10px", fontWeight: "bold" }}>
//                                     <label>Role:</label>
//                                 </td>
//                                 <td style={{ padding: "10px" }}>
//                                     <label style={{ marginRight: "15px" }}>
//                                         <input type="radio" name="role" value="buyer" checked={formData.role === "buyer"} onChange={handleChange} />
//                                         Buyer
//                                     </label>
//                                     <label>
//                                         <input type="radio" name="role" value="seller" checked={formData.role === "seller"} onChange={handleChange} />
//                                         Seller
//                                     </label>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td colSpan="2" style={{ padding: "10px" }}>
//                                     <button type="submit" 
//                                         style={{ width: "100%", padding: "10px", backgroundColor: "#007bff", color: "white", border: "none", cursor: "pointer", borderRadius: "5px", fontSize: "16px" }}>
//                                         Register
//                                     </button>
//                                 </td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </form>
//             </div>
//         </div>
//     );
// }


import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css"; // Import CSS file

export default function Register() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        mobile: "",
        role: "buyer", // Default role
    });

    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value, // Updates both input fields and radio buttons
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);

        axios
            .post("https://book-srore.onrender.com/api/auth/signup", formData)
            .then((res) => {
                console.log("response from register", res);

                // ✅ Store token and role in localStorage
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("role", res.data.role);

                // ✅ Update user state in context
                setUser({ token: res.data.token, role: res.data.role });

                navigate("/"); // Redirect to home
            })
            .catch((err) => {
                console.log("Error during registration:", err);
            });
    }

    return (
        <div className="register-container">
            {/* Background Image Wrapper */}
            <div className="register-form">
                {/* Form Box */}
                <h2 style={{ textAlign: "center", marginBottom: "20px", fontSize: "24px", color: "#333" }}>
                    Register
                </h2>
                <form onSubmit={handleSubmit}>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                        <tbody>
                            <tr>
                                <td style={{ padding: "10px", fontWeight: "bold" }}>
                                    <label htmlFor="username">Name:</label>
                                </td>
                                <td style={{ padding: "10px" }}>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        placeholder="Enter your name"
                                        onChange={handleChange}
                                        required
                                        style={{
                                            width: "100%",
                                            padding: "8px",
                                            border: "1px solid #ccc",
                                            borderRadius: "5px",
                                            fontSize: "16px",
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: "10px", fontWeight: "bold" }}>
                                    <label htmlFor="email">Email ID:</label>
                                </td>
                                <td style={{ padding: "10px" }}>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        onChange={handleChange}
                                        required
                                        style={{
                                            width: "100%",
                                            padding: "8px",
                                            border: "1px solid #ccc",
                                            borderRadius: "5px",
                                            fontSize: "16px",
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: "10px", fontWeight: "bold" }}>
                                    <label htmlFor="password">Password:</label>
                                </td>
                                <td style={{ padding: "10px" }}>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        onChange={handleChange}
                                        required
                                        style={{
                                            width: "100%",
                                            padding: "8px",
                                            border: "1px solid #ccc",
                                            borderRadius: "5px",
                                            fontSize: "16px",
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: "10px", fontWeight: "bold" }}>
                                    <label htmlFor="mobile">Mobile Number:</label>
                                </td>
                                <td style={{ padding: "10px" }}>
                                    <input
                                        type="text"
                                        id="mobile"
                                        name="mobile"
                                        placeholder="Enter your mobile number"
                                        onChange={handleChange}
                                        required
                                        style={{
                                            width: "100%",
                                            padding: "8px",
                                            border: "1px solid #ccc",
                                            borderRadius: "5px",
                                            fontSize: "16px",
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: "10px", fontWeight: "bold" }}>
                                    <label>Role:</label>
                                </td>
                                <td style={{ padding: "10px" }}>
                                    <label style={{ marginRight: "15px" }}>
                                        <input
                                            type="radio"
                                            name="role"
                                            value="buyer"
                                            checked={formData.role === "buyer"}
                                            onChange={handleChange}
                                        />
                                        Buyer
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="role"
                                            value="seller"
                                            checked={formData.role === "seller"}
                                            onChange={handleChange}
                                        />
                                        Seller
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" style={{ padding: "10px" }}>
                                    <button
                                        type="submit"
                                        style={{
                                            width: "100%",
                                            padding: "10px",
                                            backgroundColor: "#007bff",
                                            color: "white",
                                            border: "none",
                                            cursor: "pointer",
                                            borderRadius: "5px",
                                            fontSize: "16px",
                                        }}
                                    >
                                        Register
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
}


