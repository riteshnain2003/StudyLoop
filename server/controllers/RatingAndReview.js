const Course=require("../models/Course");
const RatingAndReview = require("../models/RatingAndReview");

exports.createRating=async(req,res)=>{
    try{
        const userId=req.user.id;
        const {rating,review,courseId,}=req.body;
        //check if user enrolled or not
        const enroled=await Course.findOne({_id:courseId,
                                          studentEnrolled:{$elemMatch:{$eq:userId}}},
        );
        if(!enroled){
            return res.status(401).json({
                success:false,
                message:"user is not enrolled in course"
            })
        }
        //check if user already rating the course or not
        const checkRating=await RatingAndReview.findOne({_id:userId,course:courseId});
        if(checkRating){
            return res.status(401).json({
                success:false,
                message:"user is already rate and review this course"
            })
        }

        //create rating and review
        const createReview=await RatingAndReview.create({rating,review,course:courseId,user:userId});
        //update course with rating and review
        const updatecourseDeatil=await Course.findByIdAndUpdate({_id:courseId},{
            $push:{reviewAndRating:createReview._id},
        },{new:true})

        console.log(updatecourseDeatil)

        //return response
        return res.status(200).json({
            success:true,
            message:"rating and review succesfully",
            createReview
        })

    }catch(error){
        console.log(error)
        return res.status(501).json({
            success:false,
            message:error.message,
            
        })

    }
}





//get average rating
exports.getAverageRating=async(req,res)=>{
    try{
        const{courseId}=req.body;

        const result=await RatingAndReview.aggregate([{
            $match:{
                course:new mongoose.Types.ObjectId(courseId)
            }},
            {
              $group:{
                _id:null,
                averageRating:{$avg:"$rating"}
              }  
            }
        ])

        if(result.length>0){
             return res.status(200).json({
            success:true,
            averageRating:result[0].averageRating,
            
        })
        }

        //if not review rating
         return res.status(200).json({
            success:true,
            message:"average rating is 0,no rating give till now",
            averageRating:0,
            
        })


    }catch(error){
        console.log(error)
         return res.status(501).json({
            success:false,
            message:error.message,
            
        })

    }
}

//get all rating

exports.getAllRating=async(req,res)=>{
    try{
            const allReview=await RatingAndReview.find({})
                                    .sort({rating:"desc"})
                                    .populate({path:"user",
                                        select:"firstName lastName email image"})
                                    .populate({path:"course",
                                        select:"courseName"
                                    }).exec();
                                     return res.status(200).json({
                                        success:true,
                                        message:"all reviews fetched succesfullly",
                                        allReview
            
        })
    }catch(error){

    }
}