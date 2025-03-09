const express =require("express")
const Product = require("../models/Product")
const {authMiddleware,verifyAdmin,verifySellerRole} = require("../middleware/authMiddleware")
// const { verifySellerRole } = require("../middleware/authMiddleware");

const router= express.Router()
router.post("/add",authMiddleware,verifyAdmin,async (req,res)=>{
    try{
        const {name,description,price,category,stock,imageUrl}=req.body
        if(!name||!description||!price||!category||!stock||!imageUrl){
            return res.status(400).json({"message":"All fields are needed at the time of adding products"})
        }
        const newProduct=new Product({
            name, description,price,category,stock,imageUrl,createdBy:req.user.id
        })
        await newProduct.save()
        return res.status(201).json({"message":"Product added successfully"})
    }
    catch(err){
        console.log("error from product routes",err)
        return res.status(500).json({"message":"server error in productroutes"})
    }
})

router.get("/",async(req,res)=>{
    try{
        const products=await Product.find()
        res.json(products)
    }
    catch(err){
        return res.status(500).json({"message":"server error from fetch products"})
    }
})

// Example of an endpoint to get products by a seller
// Example of an endpoint to get products by a seller
// Assuming 'createdBy' is the field that stores the seller's user ID
// const express = require("express");
// This route fetches products added by the seller (authenticated user)
router.get("/seller", authMiddleware, verifySellerRole, async (req, res) => {
    try {
      const sellerId = req.user._id;  // Use _id here instead of id
      const products = await Product.find({ createdBy: sellerId });  
      if (!products || products.length === 0) {
        return res.status(404).json({ message: "No products found for this seller." });
    }
// Fetch products by seller
      res.status(200).json(products);  // Return the seller's products
    } catch (err) {
      console.error("Error fetching products:", err);
      res.status(500).json({ message: "Error fetching seller's products" });
    }
  });


  // In productRoutes.js

// Fetch seller's products based on the seller's createdBy field (user's _id)
// router.get("/seller", authMiddleware, verifySellerRole, async (req, res) => {
//     try {
//         const sellerId = req.user.id;  // Get seller ID from the authenticated user
//         const products = await Product.find({ createdBy: sellerId }); // Fetch products where createdBy equals sellerId
        
//         if (!products || products.length === 0) {
//             return res.status(404).json({ message: "No products found for this seller." });
//         }

//         res.status(200).json(products);  // Send the fetched products back to the client
//     } catch (err) {
//         console.error("Error fetching products:", err);
//         res.status(500).json({ message: "Error fetching seller's products" });
//     }
// });

  

// Other routes for adding, updating, or deleting products can go h




router.delete("/:id",authMiddleware,verifyAdmin,async (req,res)=>{
    try{
        const product= await Product.findById(res.params.id)
        if(!product)
                return res.status(404).json({"message":"Product not found"})
        await product.deleteOne()
        return res.status(200).json({"message":"Product Deleted successfully"})
    }
    catch(err){
        return res.status(500).json({"message":"Server error from dlete product"})
    }
})

module.exports=router












// const express = require("express");
// const Product = require("../models/Product");
// const { authMiddleware,verifyAdmin } = require("../middleware/authMiddleware");
// const { verifySellerRole } = require("../middleware/authMiddleware");  // Assuming you want this middleware

// const router = express.Router();

// // Add Product Route (POST)
// router.post("/add", authMiddleware, verifyAdmin, async (req, res) => {
//     try {
//         const { name, description, price, category, stock, imageUrl } = req.body;
//         if (!name || !description || !price || !category || !stock || !imageUrl) {
//             return res.status(400).json({ "message": "All fields are needed at the time of adding products" });
//         }
//         const newProduct = new Product({
//             name, description, price, category, stock, imageUrl, createdBy: req.user.id
//         });
//         await newProduct.save();
//         return res.status(201).json({ "message": "Product added successfully" });
//     } catch (err) {
//         console.log("Error from product routes", err);
//         return res.status(500).json({ "message": "Server error in product routes" });
//     }
// });

// // Get All Products Route (GET)
// router.get("/", async (req, res) => {
//     try {
//         const products = await Product.find();
//         res.json(products);
//     } catch (err) {
//         return res.status(500).json({ "message": "Server error from fetching products" });
//     }
// });

// // Get Products by Seller Route (GET)
// router.get("/seller", authMiddleware, verifySellerRole, async (req, res) => {
//     try {
//         const sellerId = req.user.id;  // Get seller ID from the authenticated user
//         const products = await Product.find({ createdBy: sellerId }); // Fetch products by the seller
//         res.status(200).json(products);  // Return the seller's products
//     } catch (err) {
//         console.error("Error fetching products:", err);
//         res.status(500).json({ message: "Error fetching seller's products" });
//     }
// });

// // Delete Product Route (DELETE)
// router.delete("/:id", authMiddleware, verifyAdmin, async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);  // Fixed from res.params.id to req.params.id
//         if (!product) {
//             return res.status(404).json({ "message": "Product not found" });
//         }
//         await product.deleteOne();
//         return res.status(200).json({ "message": "Product deleted successfully" });
//     } catch (err) {
//         return res.status(500).json({ "message": "Server error from delete product" });
//     }
// });

// module.exports = router;











// const express = require("express");
// const Product = require("../models/Product");
// const { authMiddleware } = require("../middleware/authMiddleware");

// const router = express.Router();

// // Middleware to verify seller role
// const verifySeller = (req, res, next) => {
//     if (!req.user || req.user.role !== "seller") {
//         return res.status(403).json({ message: "Access denied. Only sellers can perform this action." });
//     }
//     next();
// };

// // 🛒 Add a new product (Only sellers can add products)
// router.post("/add", authMiddleware, verifySeller, async (req, res) => {
//     try {
//         const { name, description, price, category, stock, imageUrl } = req.body;
        
//         if (!name || !description || !price || !category || !stock || !imageUrl) {
//             return res.status(400).json({ message: "All fields are required to add a product" });
//         }

//         const newProduct = new Product({
//             name,
//             description,
//             price,
//             category,
//             stock,
//             imageUrl,
//             createdBy: req.user.id // Assigning the logged-in seller
//         });

//         await newProduct.save();
//         return res.status(201).json({ message: "Product added successfully" });
//     } catch (err) {
//         console.error("Error from product routes:", err);
//         return res.status(500).json({ message: "Server error in product routes" });
//     }
// });

// // 🔍 Fetch all products (for general users)
// router.get("/", async (req, res) => {
//     try {
//         const products = await Product.find();
//         res.json(products);
//     } catch (err) {
//         return res.status(500).json({ message: "Server error while fetching products" });
//     }
// });

// // 🛍️ Fetch products added by the logged-in seller
// router.get("/seller", authMiddleware, verifySeller, async (req, res) => {
//     try {
//         const products = await Product.find({ createdBy: req.user.id }); // Only seller's products
//         res.json(products);
//     } catch (err) {
//         console.error("Error fetching seller's products:", err);
//         return res.status(500).json({ message: "Server error fetching seller's products" });
//     }
// });

// // 📌 Fetch a single product by ID
// router.get("/:id", async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);
//         if (!product) return res.status(404).json({ message: "Product not found" });
//         res.json(product);
//     } catch (err) {
//         console.error("Error fetching product:", err);
//         return res.status(500).json({ message: "Server error fetching product" });
//     }
// });

// // ✏️ Update product (Only the seller who created it can update)
// router.put("/:id", authMiddleware, verifySeller, async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);

//         if (!product) {
//             return res.status(404).json({ message: "Product not found" });
//         }

//         // Ensure that the logged-in seller is updating their own product
//         if (product.createdBy.toString() !== req.user.id) {
//             return res.status(403).json({ message: "You are not authorized to update this product" });
//         }

//         const { name, description, price, category, stock, imageUrl } = req.body;
//         product.name = name || product.name;
//         product.description = description || product.description;
//         product.price = price || product.price;
//         product.category = category || product.category;
//         product.stock = stock || product.stock;
//         product.imageUrl = imageUrl || product.imageUrl;

//         await product.save();
//         return res.status(200).json({ message: "Product updated successfully" });
//     } catch (err) {
//         console.error("Error updating product:", err);
//         return res.status(500).json({ message: "Server error updating product" });
//     }
// });

// // ❌ Delete product (Only the seller who created it can delete)
// router.delete("/:id", authMiddleware, verifySeller, async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);
//         if (!product) return res.status(404).json({ message: "Product not found" });

//         // Ensure the seller can delete only their own product
//         if (product.createdBy.toString() !== req.user.id) {
//             return res.status(403).json({ message: "You are not authorized to delete this product" });
//         }

//         await product.deleteOne();
//         return res.status(200).json({ message: "Product deleted successfully" });
//     } catch (err) {
//         console.error("Error deleting product:", err);
//         return res.status(500).json({ message: "Server error deleting product" });
//     }
// });

// module.exports = router;

