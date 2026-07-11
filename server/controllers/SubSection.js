const { findById } = require("../models/category");
const section=require("../models/Section");
const subsection=require("../models/SubSection");
const {uploadToCloudinary}=require("../utils/ImageUploder")
require("dotenv").config()


exports.createSubSection=async(req,res)=>{
    try{
        //fetch data
        
        
        const{sectionId,title,description,timeDuration}=req.body;
        //fetch image
        const video=req.files.videoFile;
        console.log(video)
        //validation  
        if(!sectionId|| !title|| !description || !timeDuration || !video){
            return res.status(400).json({
                success:false,
                message:"All fields are required",
            });}
        //upload video to cloudinary
        const uploadDetails=await uploadToCloudinary(video,process.env.FOLDER_NAME)
       
        //create a subsection
        const subsectiondetails=await subsection.create({
            title:title,
            description:description,
            timeDuration:timeDuration,
            videoUrl:uploadDetails.secure_url,
        })

        //update section with this sub-section ObjectId
        const updateSection=await section.findByIdAndUpdate({_id:sectionId},{
        $push:{
            subsection:subsectiondetails._id,
        }
        },{returnDocument:"after"});
        return res.status(200).json({
            success:true,
            messgae:"subsection created succesfully",
            subsectiondetails,
        })

    }catch(error){
         return res.status(501).json({
                success:false,
                message:"unable to create sub-section please try again",
                error:error.message
            }) 
    }
}




exports.updateSubSection=async(req,res)=>{
    try{
        //fetch data
        const{subsectionId,title,description,timeduration}=req.body;
        
        //validation  
        if(!subsectionId){
            return res.status(400).json({
                success:false,
                message:"subsection id is required",
            });}
        const subDetails=await subsection.findById({_id:subsectionId})
        if(title){
            subDetails.title=title
        }
        if(description){
            subDetails.description=description
        }
        if(timeduration){
            subDetails.timeDuration=timeduration
        }
        if(req.files && req.files.videoFile){
        //upload video to cloudinary
        const uploadDetails=await uploadToCloudinary(video,process.env.FOLDER_NAME)
        subDetails.imageUrl=subDetails.secure_url
        }

        const subsectionUpdateDetail=await subDetails.save();
       
        //update subsection 
        
        return res.status(200).json({
            success:true,
            messgae:"subsection updated succesfully",
            subsectionUpdateDetail,
        })

    }catch(error){
         return res.status(501).json({
                success:false,
                message:"unable to update sub-section please try again",
                error:error.message
            }) 
    }
}




exports.deleteSubSection=async(req,res)=>{
    try{
        //fetch data
        const{subsectionId}=req.body;
        
        //validation  
        if(!subsectionId){
            return res.status(400).json({
                success:false,
                message:"All fields are required",
            });}
        
        //delete subsection 
        const deletesubSection=await subsection.findByIdAndDelete(subsectionId)
        return res.status(200).json({
            success:true,
            messgae:"subsection deleted succesfully",
            updateSection,
        })
        //also update in section after deleting 

    }catch(error){
         return res.status(501).json({
                success:false,
                message:"unable to delete sub-section please try again",
                error:error.message
            }) 
    }
}