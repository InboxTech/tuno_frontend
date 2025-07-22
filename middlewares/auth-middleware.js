const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization");
    
    if (!token){
        // if you attempt to use an expired token, you'll recive a "401 Unauthorized HTTP" response.
        return res.status(401).json({message: "Unauthorized HTTP, Token not provided"});
    }
    
    // Assumimg token is in the form "bearer <jwtToken>, Rmoving the "bearer" prefix"</jwtToken>"
    const jwtToken = token.replace("Bearer", "").trim();
    console.log("token from auth middleware", jwtToken);

    try {

        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
          console.log("Token verified payload:", isVerified);

        // const userData = await User.findOne({email:isVerified.email}).select({password:0,});
         const userData = await User.findById(isVerified.userId).select("-password");
        console.log("user found",userData);
        
          if (!userData) {
            return res.status(401).json({ message: "Unauthorized. User not found." });
        }
        req.user = userData;
        req.token = token;
        req.userID = userData._id;

        next();
    } catch (error) {
        return res .status(401).json({message: "Unauthorized. Invalid Token."});
    }

}

module.exports = authMiddleware;