const jwt=require("jsonwebtoken")
require("dotenv").config()
const User=require("../models/User")

//auth
exports.auth=async(req,res,next)=>{
    
    try{
        //extract token
        const token=req.cookies?.cookie ||req.body?.token|| req.header("authorization")?.replace("Bearer ","");
        //if token is missing then return response 
        if(!token){
            return res.status(401).json({
                success:false,
                messsage:"token is missing"
            })
        }
        //verfiy the token
        try{
            const decode=jwt.verify(token,process.env.JWT_SECRET)
            console.log(decode)
            req.user=decode;

        }catch(error){
            console.log(error)
            return res.status(401).json({
                success:false,
                message:"invalid token"
            })
        }
        next();
    }catch(error){
        console.log(error)
            return res.status(401).json({
                success:false,
                message:"something went wrong while validating the token"})
    }
}


//isstudent

exports.isStudent=async(req,res,next)=>{
    try{
        if(req.user.accountType !="Student"){
            return res.status(401).json({
                success:false,
                message:"this protected route only for students"
            })
        }
        next();


    }catch(error){
        console.log(error)
        return res.status(500).json({
                success:false,
                message:"user role cannot be verifyied in student please try again"
            })

    }


}

//isinstructor
exports.isInstructor=async(req,res,next)=>{
    try{
        
        if(req.user.accountType !="Instructor"){
            return res.status(401).json({
                success:false,
                message:"this protected route only for instructor"
            })
        }
        next();


    }catch(error){
        console.log(error)
        return res.status(500).json({
                success:false,
                message:"user role cannot be verifyied in is instructor please try again"
            })

    }


}





//isAdmin

exports.isAdmin=async(req,res,next)=>{
    try{
        if(req.user.accountType !="Admin"){
            return res.status(401).json({
                success:false,
                message:"this protected route only for admin"
            })
        }

        next();
    }catch(error){
        console.log(error)
        return res.status(500).json({
                success:false,
                message:"user role cannot be verifyied in admin please try again"
            })

    }


}