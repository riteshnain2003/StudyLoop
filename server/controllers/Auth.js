const User=require("../models/User");
const OTP=require("../models/Otp");
const otpGenerator=require("otp-generator")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const mailSender=require("../utils/MailSender")
require("dotenv").config()
const Profile=require("../models/Profile")

//send otp
exports.sendOTP=async(req,res)=>{
    try{
        const {email}=req.body;
        if(!email){
            return res.status(500).json({
                success:false,
                message:"Email is required"
            })
        }
        //check email is already registerd or not
        const checkEmail=await User.findOne({email})
        if(checkEmail){
            return res.status(400).json({
                success:false,
                message:"User already registerd"
            })
        }
        //generate otp
        var otp=otpGenerator.generate(6,{
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false,
        });
        

        //check otp exist in database or not
        var checkOtp=await OTP.findOne({otp})
        while(checkOtp){
            var otp=otpGenerator.generate(6,{
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false,});
            var checkOtp=await OTP.findOne({otp})}
        console.log(otp)
        //store new otp in data basse
        const newOtp={email,otp}
        const saveOtp=await OTP.create(newOtp)
        //send response
        res.status(200).json({
            success:true,
            message:"Otp Sent Successfully",

        })
    }catch(error){
        console.log("error found during otp generate",error)
        return res.status(500).json({
                success:false,
                message:error.message,
            })
    }
}


//sign-up

exports.signUp=async(req,res)=>{
    try{
        //fetch all data required
        const{firstName,lastName,email,contactNumber,Password,confirmPassword,accountType,otp}=req.body;
        //validation on data
        if(!firstName || !lastName||!email||!contactNumber||!Password||!confirmPassword ||!otp){
            return res.status(501).json({
                success:false,
                message:"all fields are required to fill"
            })}
        
        //check user existence
        const checkUser=await User.findOne({email});
        if(checkUser){
            return res.status(502).json({
                success:false,
                message:"user already registerd"
            })
        }
        //confirm password=password
        if(Password!=confirmPassword){
           return res.status(400).json({
            success:false,
            message:"create password and confirm password is not matched"})}

        
        const recentOtp=await OTP.findOne({email}).sort({createdAt:-1});
        if(!recentOtp){
             return res.status(503).json({
                succes:false,
                message:"otp not found try again"
            })

        }
        //match both otp's
        
        if(recentOtp.otp!=otp){
            return res.status(503).json({
                succes:false,
                message:"otp is not valid"
            })
        }

        //hash the password
        const hashedPassword=await bcrypt.hash(Password,10)
        //set profile data null
        const newProfile = await Profile.create({
            gender: null,
            dateOfBirth: null,
            about: null,
            contactNumber: null,
        });
        //create an entry in database
        const createUser=await User.create({
            firstName,lastName,email,password:hashedPassword,accountType,
            image:`https://api.dicebear.com/5.x/initials/svg?seed=${firstName}${lastName}`,
            additionalDetails:newProfile._id

        })


        res.status(200).json({
            success:true,
            message:"User created succesfullly",
            createUser
        })
    }catch(error)
    {
        console.log("error found in signup",error)
        return res.status(400).json({
            success:false,
            message:"User cannot be registed please try again",
            
        })



    }}

//login

exports.login=async (req,res)=>{
    try{
        //fetch data from body
        const{email,password}=req.body;
        //validate data
        if(!email||!password){
            return res.status(400).json({
                success:false,
                message:"required all fields"
            })};
        //check user exist or not 
        const user=await User.findOne({email}).populate()
        if(!user){
         return res.status(401).json({
                success:false,
                message:"User is not regesterd signup first",
            })}
        
        //compare password
        const comparePassword=await bcrypt.compare(password,user.password);
        if(comparePassword){
            //create json web token
            const payload={
                email:user.email,
                id:user._id,
                accountType:user.accountType
            }
            const token=await jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn:"3h"
            });
            user.token=token;
            user.password=undefined
            //send cookies in response
            const options={
                httpOnly:true,
                expires:new Date(Date.now()+3*24*60*60*1000)
            }
            res.cookie("cookie",token,options).status(200).json({
                success:true,
                token,
                user,
                message:"logged in succesfully"

            })
        } 
        else{
             return res.status(401).json({
                success:false,
                message:"password is incorrect",
            })

        }
    
    }catch(error){
        console.log(error)
        return res.status(401).json({
        success:false,
        message:"Login Failure Please Try Again",
        })

    }
}



//changePassword
exports.changePassword=async(req,res)=>{
    try{
        //fetch data from the body
        const {oldpassword,newpassword,confirmPassword}=req.body;
        //validaion
        if(!oldpassword|| !newpassword || !confirmPassword){
            return res.status(501).json({
                success:false,
                message:"please fill all the feilds"})}

        //check password are matching or not
        if(newpassword!=confirmPassword){
            return res.status(501).json({
                success:false,
                message:"newpassword and confirmpassword are not matched"})}

        //update a password in database
        const updatepassword=User.findByIdandupdate({user:email})

        //send the email for passwrod chnge suucefully
        const mailResponse=await mailSender(user.email,"Email from Study Notion","password changed successfully")
        console.log(mailResponse)

        res.status(200).json({
            success:true,
            message:"mail sent succesfully"
        })


        }catch(error){
            console.log("error during setup new password ",error)


    }
}
