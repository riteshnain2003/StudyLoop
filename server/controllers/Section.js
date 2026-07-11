const Course=require("../models/Course");
const section=require("../models/Section");

exports.createSection=async(req,res)=>{
    try{
        const{sectionName,courseId}=req.body;
        //validation
        if(!sectionName || !courseId){
            return res.status(401).json({
                success:false,
                message:"require all properties"
            })
        }

        const newSection=await section.create({sectionName})
        //update course with section objectID
        const updatedCourse=await Course.findByIdAndUpdate(courseId,{
            $push:{
                courseContent:newSection._id
            }
        },{new:true})
        //return response
        res.status(200).json({
            success:true,
            messgae:"section created succesfully",
            newSection
        })


    }catch(error){
          return res.status(501).json({
                success:false,
                message:"unable to create section please try again",
                error:error.message
            }) 
    }
}

exports.updateSection=async(req,res)=>{
    try{
        const {sectionName,sectionId}=req.body;
        if(!sectionName || !sectionId){
            return res.status(401).json({
                success:false,
                message:"require all properties"
            })
        }

        //update data
        const updateSection=await section.findByIdAndUpdate(sectionId,{sectionName},{new:true});
        //return response
        res.status(200).json({
            success:true,
            messgae:"section updated succesfully"
        })


    }catch(error){
        return res.status(501).json({
                success:false,
                message:"unable to update section please try again",
                error:error.message
            }) 
    }
}



exports.sectionDelete=async(req,res)=>{
    try{
        const {sectionId}=req.params;
        //validation
        if(!sectionId){
            return res.status(401).json({
                success:false,
                message:"require all properties"
            })
        }
        //delete section 
        const deleteSection=await section.findByIdAndDelete(sectionId,{new:true});

        
         res.status(200).json({
            success:true,
            messgae:"section deleted succesfully"
        })


        
    }catch(error){
         return res.status(501).json({
                success:false,
                message:"unable to delete section please try again",
                error:error.message
            }) 
    }
}