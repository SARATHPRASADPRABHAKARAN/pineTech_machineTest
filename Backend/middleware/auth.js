const jwt= require('jsonwebtoken')
const user=require('../model/usersModel')
module.exports = {

    checkToken:async(req,res,next)=>{

        console.log("reqq",req.headers.token)

        if(!req.headers.token)
        {
         return   res.status(400).json({error:true,message:"No token present"})
        }
        else{
        let checkToken= await   jwt.verify(req.headers.token,process.env.JWT_SECRET)
        console.log('this is user',checkToken)
        let ifUserExist=await user.findOne({_id:checkToken.userId})
console.log("user is ",ifUserExist)
        if(!ifUserExist)
        {
         return   res.status(400).json({message:"User does not exist please login",err:true})
        }
        else{
            next();
        }
        }
    }
}