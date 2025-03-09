// import React, { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { Link } from "react-router-dom";

// export default function Navigation() {
//     const { user, logout } = useContext(AuthContext);

//     return (
//         <div
//             style={{
//                 display: "flex",
//                 justifyContent: "space-between", // Home left, other links right
//                 alignItems: "center",
//                 padding: "15px 20px",
//                 backgroundColor: "green",
//             }}
//         >
//             {/* Home Link (Left Side) */}
//             <Link
//                 to="/"
//                 style={{
//                     color: "white",
//                     textDecoration: "none",
//                     padding: "10px 15px",
//                     borderRadius: "5px",
//                     transition: "background 0.3s",
//                     fontSize: "16px",
//                     fontWeight: "bold",
//                 }}
//                 onMouseEnter={(e) => (e.target.style.backgroundColor = "darkgreen")}
//                 onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
//             >
//                 Home
//             </Link>

//             {/* Right Side Links (Register/Login OR Cart/Logout) */}
//             <div style={{ display: "flex", gap: "20px" }}>
//                 {user ? (
//                     <>
//                         {user.role === "buyer" && (
//                             <Link
//                                 to="/cart"
//                                 style={{
//                                     color: "white",
//                                     textDecoration: "none",
//                                     padding: "10px 15px",
//                                     borderRadius: "5px",
//                                     transition: "background 0.3s",
//                                     fontSize: "16px",
//                                     fontWeight: "bold",
//                                 }}
//                                 onMouseEnter={(e) => (e.target.style.backgroundColor = "darkgreen")}
//                                 onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
//                             >
//                                 Cart
//                             </Link>
//                         )}

//                         {user.role === "seller" && (
//                             <Link
//                                 to="/dashboard" // Updated to show Dashboard
//                                 style={{
//                                     color: "white",
//                                     textDecoration: "none",
//                                     padding: "10px 15px",
//                                     borderRadius: "5px",
//                                     transition: "background 0.3s",
//                                     fontSize: "16px",
//                                     fontWeight: "bold",
//                                 }}
//                                 onMouseEnter={(e) => (e.target.style.backgroundColor = "darkgreen")}
//                                 onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
//                             >
//                                 Dashboard
//                             </Link>
//                         )}

//                         <Link
//                             onClick={logout}
//                             style={{
//                                 color: "white",
//                                 textDecoration: "none",
//                                 padding: "10px 15px",
//                                 borderRadius: "5px",
//                                 transition: "background 0.3s",
//                                 fontSize: "16px",
//                                 fontWeight: "bold",
//                                 cursor: "pointer",
//                             }}
//                             onMouseEnter={(e) => (e.target.style.backgroundColor = "darkgreen")}
//                             onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
//                         >
//                             Logout
//                         </Link>
//                     </>
//                 ) : (
//                     <>
//                         <Link
//                             to="/register"
//                             style={{
//                                 color: "white",
//                                 textDecoration: "none",
//                                 padding: "10px 15px",
//                                 borderRadius: "5px",
//                                 transition: "background 0.3s",
//                                 fontSize: "16px",
//                                 fontWeight: "bold",
//                             }}
//                             onMouseEnter={(e) => (e.target.style.backgroundColor = "darkgreen")}
//                             onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
//                         >
//                             Register
//                         </Link>

//                         <Link
//                             to="/login"
//                             style={{
//                                 color: "white",
//                                 textDecoration: "none",
//                                 padding: "10px 15px",
//                                 borderRadius: "5px",
//                                 transition: "background 0.3s",
//                                 fontSize: "16px",
//                                 fontWeight: "bold",
//                             }}
//                             onMouseEnter={(e) => (e.target.style.backgroundColor = "darkgreen")}
//                             onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
//                         >
//                             Login
//                         </Link>
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// }


import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Navigation() {
    const { user, logout } = useContext(AuthContext);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between", // Home left, other links right
                alignItems: "center",
                padding: "15px 20px",
                backgroundColor: "orange",
            }}
        >
            {/* Home Link (Left Side) */}
            <Link
                to="/"
                style={{
                    color: "white",
                    textDecoration: "none",
                    padding: "10px 15px",
                    borderRadius: "5px",
                    transition: "background 0.3s",
                    fontSize: "16px",
                    fontWeight: "bold",
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "blue")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
            >
                Home
            </Link>

            {/* Right Side Links (Register/Login OR Cart/Logout) */}
            <div style={{ display: "flex", gap: "20px" }}>
                {user ? (
                    <>
                        {user.role === "buyer" && (
                            <Link
                                to="/cart"
                                style={{
                                    color: "white",
                                    textDecoration: "none",
                                    padding: "10px 15px",
                                    borderRadius: "5px",
                                    transition: "background 0.3s",
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                }}
                                onMouseEnter={(e) => (e.target.style.backgroundColor = "blue")}
                                onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                            >
                                Cart
                            </Link>
                        )}

                        {user.role === "seller" && (
                            <Link
                                to="/dashboard"
                                style={{
                                    color: "white",
                                    textDecoration: "none",
                                    padding: "10px 15px",
                                    borderRadius: "5px",
                                    transition: "background 0.3s",
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                }}
                                onMouseEnter={(e) => (e.target.style.backgroundColor = "blue")}
                                onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                            >
                                Dashboard
                            </Link>
                        )}

                        <Link
                            onClick={logout}
                            style={{
                                color: "white",
                                textDecoration: "none",
                                padding: "10px 15px",
                                borderRadius: "5px",
                                transition: "background 0.3s",
                                fontSize: "16px",
                                fontWeight: "bold",
                                cursor: "pointer",
                            }}
                            onMouseEnter={(e) => (e.target.style.backgroundColor = "blue")}
                            onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                        >
                            Logout
                        </Link>
                    </>
                ) : (
                    <>
                        <Link
                            to="/register"
                            style={{
                                color: "white",
                                textDecoration: "none",
                                padding: "10px 15px",
                                borderRadius: "5px",
                                transition: "background 0.3s",
                                fontSize: "16px",
                                fontWeight: "bold",
                            }}
                            onMouseEnter={(e) => (e.target.style.backgroundColor = "blue")}
                            onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                        >
                            Register
                        </Link>

                        <Link
                            to="/login"
                            style={{
                                color: "white",
                                textDecoration: "none",
                                padding: "10px 15px",
                                borderRadius: "5px",
                                transition: "background 0.3s",
                                fontSize: "16px",
                                fontWeight: "bold",
                            }}
                            onMouseEnter={(e) => (e.target.style.backgroundColor = "blue")}
                            onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                        >
                            Login
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}
