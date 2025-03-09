const express=require("express")
const app=express()
const cors =require("cors")
require("dotenv").config()
const port =process.env.PORT 
const connectDB =require("./config/db")
const authRoutes =require("./routes/auth")
// const adminRoutes=require("./routes/adminAuth")
const productRoutes= require("./routes/productRoutes")
const cartRoutes=require("./routes/cartRoutes")
const paymentRoutes=require("./routes/paymentRoutes")
const bookRoutes = require("./routes/bookRoutes");

app.use(cors({
    origin: "http://localhost:5173", // ✅ Allow frontend requests
    credentials: true
}));

app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())
connectDB()
app.use("/api/auth",authRoutes)
// app.use("/api/admin",adminRoutes)
app.use("/api/product",productRoutes)
app.use("/api/cart",cartRoutes)
app.use("/api/payment",paymentRoutes)
app.use("/api/books", bookRoutes);
app.listen(port,()=>console.log("Server is running on port:",port))

// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();
// const connectDB = require("./config/db");

// // Import Routes
// const authRoutes = require("./routes/auth");
// const productRoutes = require("./routes/productRoutes");
// const cartRoutes = require("./routes/cartRoutes");
// const paymentRoutes = require("./routes/paymentRoutes");

// const app = express();
// const port = process.env.PORT || 4001; // Default port if not in .env

// // Connect to Database
// connectDB();

// // Middleware
// app.use(cors({
//     origin: "http://localhost:5173", // ✅ Allow frontend requests
//     credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // API Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/products", productRoutes); // ✅ Changed "/api/product" to "/api/products"
// app.use("/api/cart", cartRoutes);
// app.use("/api/payment", paymentRoutes);

// // Default Route
// app.get("/", (req, res) => {
//     res.send("Welcome to the Book Store API 📚");
// });

// // Global Error Handling Middleware
// app.use((err, req, res, next) => {
//     console.error("❌ Server Error:", err.message);
//     res.status(500).json({ message: "Internal Server Error" });
// });

// // Start Server
// app.listen(port, () => console.log(`🚀 Server running on port: ${port}`));


// const express = require("express");
// const app = express();
// const cors = require("cors");
// require("dotenv").config();
// const port = process.env.PORT || 5000; // Default to 5000 if PORT is not set
// const connectDB = require("./config/db");
// const authRoutes = require("./routes/auth");
// const adminRoutes = require("./routes/adminAuth");
// const productRoutes = require("./routes/productRoutes");
// const cartRoutes = require("./routes/cartRoutes");

// // ✅ Allow frontend requests with credentials
// app.use(
//   cors({
//     origin: "http://localhost:5173", // Your frontend URL
//     credentials: true, // Allow sending cookies or auth headers
//   })
// );

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// connectDB();

// // ✅ Ensure all routes are correctly set up
// app.use("/api/auth", authRoutes);
// app.use("/api/admin", adminRoutes);
// app.use("/api/product", productRoutes);
// app.use("/api/cart", cartRoutes);

// app.listen(port, () => console.log("Server is running on port:", port));
