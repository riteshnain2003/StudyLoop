const Profile=require("../models/Profile");
const User=require("../models/User");
const {uploadToCloudinary}=require("../utils/ImageUploder")
require("dotenv").config()

exports.updateProfile=async(req,res)=>{
    try{
        //fetch data
        const{dateOfBirth="",about="",contactNumber,gender}=req.body;
        //getuserId
        const id=req.user.id;
        //validation
        if(!contactNumber||!gender||!id){
             return res.status(401).json({
                success:false,
                message:"require all properties"
            })
        }
        //find user details
        const userdetails=await User.findById(id)
        if (!userdetails) {
            return res.status(404).json({
                success: false,
                message: "Userdetails not found"
            });
        }
         console.log(userdetails)
        //find profile
        const profileDetails=await Profile.findById(userdetails.additionalDetails)
        if (!profileDetails) {
            return res.status(404).json({
                success: false,
                message: "profile details not found"
            });
        }
        console.log(userdetails)
        console.log(profileDetails)
        

        //update profile 
        profileDetails.dateOfBirth=dateOfBirth,
        profileDetails.about=about,
        profileDetails.contactNumber=contactNumber,
        profileDetails.gender=gender
        //save in database
        await profileDetails.save();
        //return response
        return res.status(200).json({
            success:true,
            messgae:"profile updated succesfully",
            profileDetails
        })

    }catch(error){
        console.log(error)
        return res.status(500).json({
                success:false,
                error:error.message,
            })
         

    }
}


exports.deleteAccount=async(req,res)=>{
    try{
        const{id}=req.user.id;
        //validation
        const userdetails=await User.findById(id);
        if(!userdetails){
            return res.status(401).json({
                success:false,
                message:"user not found"
            })
        }
        //delete profile
        await profile.findByIdDelete({_id:userdetails.additionalDetails});
        //delete user
        await User.findByIdDelete({_id:id});
        //send response
        return res.status(200).json({
                success:true,
                message:"account has been deleted",

            })

    }catch(error){
        return res.status(501).json({
                success:false,
                message:"error during delte the account",
                error:error.message,
            })
    }
}


exports.getAllUserDetails=async(req,res)=>{
    try{
        //get id
        const id=req.user.id;
        //get user details
        const userdetails=await User.findById(id).populate("additionalDetails").exec();
        //response
        return res.status(200).json({
                success:true,
                message:"user data fetched succesfully",
                userdetails
            });



    }catch(error){
        return res.status(500).json({
                success:false,
                message:"error during get all user details",
                error:error.message,
            })
    }
}



exports.updateProfilePicture=async(req,res)=>{
    try{
        //get user id from req.user
        const id=req.user.id;
        if(!id){
            return res.status(501).json({
                success:false,
                message:"id not found ",
            })
        }

        //get file from files from request
        const file=req.files.displayPicture;
        if(!file){
             return res.status(501).json({
                success:false,
                message:"file not found ",
            })
        }

        //upload on cloudinary

        const upload=await uploadToCloudinary(file,process.env.FOLDER_NAME)
        //
        //find and update
        const updatePicture=await User.findByIdAndUpdate(id,{
            image:upload.secure_url

        },{new:true})


    
        return res.status(200).json({
                success:true,
                message:"profile picture updated succesfully",
                updatePicture

            })

    }catch(error){
        return res.status(501).json({
                success:false,
                message:"error during update the picture",
                error:error.message,
            })
    }
}