const User=require("../models/User");
const mailsender = require("../utils/MailSender");
const bcrypt=require("bcrypt");

//create reset password token
exports.resetUserPassword=async(req,res)=>{
    try{
        const {email}=req.body;
    //validation on email
    const existEmail=await User.findOne({email:email})
    if(!existEmail){
        return res.status(401).json({
            success:false,
            message:"User is not registerd please Go And registered First"
        })
    }

    //generate token
    const token=crypto.randomUUID()
    //update by user by token and expiration time
    const updateDetails=await User.findOneAndUpdate({email:email},{
        token:token,
        resetPasswordExpire:Date.now()+20*60*1000
    },{new:true})
    console.log(updateDetails)

    //create url
    const url=`http://localhost:3000/update-password/${token}`
    //send  email containg url
    await mailsender(email,"password reset link",`password reset link:${url}`);
    //return response
    return res.status(200).json({
        success:true,
        message:"Email sent successfuly please check the email",
        token
    });
    
}catch(error){
    console.log(error)
    return res.status(401).json({
        success:false,
        message:"something went wrong when email sent for password change"
    })
}
}

//reset password

exports.resetPassword=async(req,res)=>{
    try{
        const {password,confirmPassword,token}=req.body;
        if(password!=confirmPassword){
            return res.status(400).json({
                success:false,
                message:"passwords are not matched"
            })
        }
        
        //validate the user
        const userDetails=await User.findOne({token:token})
        console.log(userDetails)
        if(!userDetails){
            return res.status(500).json({
                success:false,
                message:"invalid  tokens"
            })
        }
        //token time check
        if(userDetails.resetPasswordExpire <Date.now()){
            return res.status(501).json({
                success:false,
                message:"token is expired, please regenerate your token"
            }
            )
        }
        const hashedPassword=await bcrypt.hash(password,10)
        //update pass in datase
        await User.findOneAndUpdate({token:token},{password:hashedPassword},{new:true})
        return res.status(200).json({
            success:true,
            message:"Password reset successfully",
        });

    }catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Something went wrong when sending reset pwd email"
        })

    }
}
    