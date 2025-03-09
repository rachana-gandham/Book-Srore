// import React, { useState, useContext } from 'react'
// import { AuthContext } from '../context/AuthContext'
// import axios from "axios"
// import { useNavigate } from 'react-router-dom'
// export default function Login() {
//   const [formData,setFormData]=useState({email:"",password:""})
//   const {setUser}=useContext(AuthContext)
//   const navigate=useNavigate()
//   function handleChange(e){
//     setFormData({...formData,[e.target.name]:e.target.value})
//   }
//   function handleLogin(e){
//     e.preventDefault()
//     axios.post("http://localhost:4001/api/auth/login",formData)
//       .then((res)=>{
//         console.log("login response",res)
//         if(res.status===200){
//           setUser({token:res.data.token,role:res.data.role})
//           navigate("/")
//         }
//       })
//       .catch((err)=>{
//         console.log("error from login",err)
//       })
//   }
//   return (
//     <div style={{
//       width: "40%",
//       margin: "50px auto",
//       padding: "20px",
//       background: "white",
//       boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
//       borderRadius: "8px"
//   }}>
//       <h2 style={{ textAlign: "center", marginBottom: "20px", fontSize: "24px", color: "#333" }}>Login</h2>
  
//       <form onSubmit={handleLogin}>
//           <table style={{ width: "100%", borderCollapse: "collapse", margin: "0 auto" }}>
//               <tbody>
//                   <tr>
//                       <td style={{ padding: "10px", fontWeight: "bold", textAlign: "right" }}>
//                           <label htmlFor="email">Email ID:</label>
//                       </td>
//                       <td style={{ padding: "10px" }}>
//                           <input type="email" id="email" name="email" placeholder="Enter your email" onChange={handleChange} required
//                               style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" }} />
//                       </td>
//                   </tr>
//                   <tr>
//                       <td style={{ padding: "10px", fontWeight: "bold", textAlign: "right" }}>
//                           <label htmlFor="password">Password:</label>
//                       </td>
//                       <td style={{ padding: "10px" }}>
//                           <input type="password" id="password" name="password" placeholder="Enter your password" onChange={handleChange} required
//                               style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" }} />
//                       </td>
//                   </tr>
//                   <tr>
//                       <td colSpan="2" style={{ padding: "10px", textAlign: "center" }}>
//                           <button type="submit" 
//                               style={{ width: "100%", padding: "10px", backgroundColor: "#007bff", color: "white", border: "none", cursor: "pointer", borderRadius: "5px", fontSize: "16px" }}>
//                               Login
//                           </button>
//                       </td>
//                   </tr>
//               </tbody>
//           </table>
//       </form>
//   </div>
  
//   )
// }


import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import CSS file

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleLogin(e) {
    e.preventDefault();
    axios
      .post("http://localhost:4001/api/auth/login", formData)
      .then((res) => {
        console.log("Login response", res);
        if (res.status === 200) {
          const { token, role } = res.data;

          // ✅ Store token and role in localStorage
          localStorage.setItem("token", token);
          localStorage.setItem("role", role);

          // ✅ Update user state in context
          setUser({ token, role });

          navigate("/"); // Redirect to home after login
        }
      })
      .catch((err) => {
        console.log("Error from login", err.response?.data?.message || err.message);
      });
  }

  return (
    <div className="login-container">
      {/* Background Image Wrapper */}
      <div className="login-form">
        {/* Form Box */}
        <h2 style={{ textAlign: "center", marginBottom: "20px", fontSize: "24px", color: "#333" }}>
          Login
        </h2>

        <form onSubmit={handleLogin}>
          <table style={{ width: "100%", borderCollapse: "collapse", margin: "0 auto" }}>
            <tbody>
              <tr>
                <td style={{ padding: "10px", fontWeight: "bold", textAlign: "right" }}>
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
                <td style={{ padding: "10px", fontWeight: "bold", textAlign: "right" }}>
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
                <td colSpan="2" style={{ padding: "10px", textAlign: "center" }}>
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
                    Login
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
