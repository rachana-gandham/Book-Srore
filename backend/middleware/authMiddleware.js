// const {validateToken} = require("../config/jwt")
// const User =require("../models/User")
// const authMiddleware= (req,res,next)=>{
//     const token = req.header("Authorization")
//     if(!token) {
//         return res.status(401).json({"message":"Unauthorized user"})
//     }
//     try{
//         const verify=validateToken(token.replace("Bearer ",""))
//         req.user=verify
//         next()
//     }
//     catch(err){
//         console.log("error from authmidddleware",err)
//         res.status(400).json({"message":"invalid token or expired"})
//     }
// }

// const verifyAdmin =async (req,res,next)=>{
//     try{
//         const user= await User.findById(req.user.id)
//         if(!user || user.role!=="seller"){
//             return res.status("401").json({"message":"Access denied"})
//         }
//         next()
//     }
//     catch(err){
//         console.log(err)
//         res.status(500).json({"message":"internal server error from verifyAdmin"})
//     }
// }

// module.exports={authMiddleware,verifyAdmin}

const { validateToken } = require("../config/jwt");
const User = require("../models/User");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  console.log(token)
  if (!token) {
    return res.status(401).json({ message: "Unauthorized user" });
  }

  try {
    const verify = validateToken(token.replace("Bearer ", ""));
    req.user = verify;  // Attach user data from token
    next();  // Proceed to next middleware or route handler
  } catch (err) {
    console.log("error from authMiddleware", err);
    res.status(400).json({ message: "Invalid or expired token" });
  }
};

const verifyAdmin =async (req,res,next)=>{
        try{
            const user= await User.findById(req.user.id)
            if(!user || user.role!=="seller"){
                return res.status("401").json({"message":"Access denied"})
            }
            next()
        }
        catch(err){
            console.log(err)
            res.status(500).json({"message":"internal server error from verifyAdmin"})
        }
    };

// Middleware to verify if the user has the seller role
const verifySellerRole = async (req, res, next) => {
  try {
    // Find the user based on the user ID decoded from the token (req.user.id)
    const user = await User.findById(req.user._id);
    
    // Check if user is found and if their role is 'seller'
    if (!user || user.role !== "seller") {
      return res.status(403).json({ message: "Access denied. Seller role required." });
    }

    // Proceed if the user is a seller
    next();
  } catch (err) {
    console.log("Error from verifySellerRole:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { authMiddleware, verifySellerRole, verifyAdmin };
