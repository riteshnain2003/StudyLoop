const Course=require("../models/Course");
const Section = require("../models/Section");
const {uploadToCloudinary}=require("../utils/ImageUploder")
require("dotenv").config()

exports.createCourse=async(req,res)=>{
    try{
        //fetch data
        console.log("in create course contoler")
        const{courseName,courseDescription,category,tags,whatWillYouLearn,price,status}=req.body;
        const thumbnail=req.files.thumbnail;
        console.log("thumbanail",thumbnail)
        const uploadThumbnail=await uploadToCloudinary(thumbnail,process.env.FOLDER_NAME)

        
        console.log(courseName,courseDescription,category,tags,whatWillYouLearn,price,status,uploadThumbnail.secure_url)
        //validatation
        if(!courseName||!courseDescription||!category||!whatWillYouLearn||!price||!status||!uploadThumbnail.secure_url){
        //validatation){
            return res.status(400).json({
                success:false,
                message:"all feilds are required in course"
            })
        }

        const createcourse=await Course.create({courseName,courseDescription,category,tags,whatWillYouLearn,price,status,thumbnail:uploadThumbnail.secure_url,},{new:true})
        return res.status(200).json({
            success:true,
            message:'course created succesfully',
            createcourse

        })

    }catch(error){
        console.log(error)
         return res.status(400).json({
                success:false,
                message:"error in creating course"
            })

    }
}


exports.getAllCourse=async(req,res)=>{
    try{
        const allCourse=await Course.find({},{new:true})
        return res.status(200).json({
            success:true,
            message:"all courses",
            allCourse,
        })
    }catch(error){
        console.log(error)
         return res.status(400).json({
                success:false,
                message:"error in getall courses"
            })
    }
}


exports.courseDetails=async(req,res)=>{
    try{
        const {courseId}=req.body;
        const details=await Course.findById({_id:courseId}).populate(
                                {
                                        path:"instructor",
                                        populate:{
                                            path:"additionalDetails",
                                        },
                                })
                                .populate("category")
                               // .populate("ratingAndReviews")
                                .populate({path:"courseContent",
                                    populate:{path:"subSection"}
                                })
                                .exec();

    //validation
    if(!details){
        return res.status(400).json({
            success:false,
            messgae:"could not found any data with this course id"
        })}
 //return response
    return res.status(200).json({
        success:true,
        message:"data fetched successfullly",
        details
    })
                                                                
    }catch(error){
        console.log(error)
        return res.status(400).json({
            success:false,
            messgae:error.message,
        })

    }
}