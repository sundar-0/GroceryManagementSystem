var jwt=require('jsonwebtoken')
require('dotenv').config()
var secretKey=process.env.SECRET_KEY
module.exports=(req,res,next)=>{
    try{
    var token=req.headers.authorization.split(" ")[1];
    console.log(token)
    var decode=jwt.verify(token,secretKey)
    req.userData=decode
    next()
    }
    catch(err){
        res.status(401).json({
            message:"Invalid Token"
        })
    }

}