const mongoose=require("mongoose");

const courseprogress= new mongoose.Schema({
    
    courseID:{
        type:mongoose.Schema.Types.objectId,
        ref:"Course"
    },
    completedVideos:[{
        type:mongoose.Schema.Types.objectId,
        ref:"SubSection",
    }] 
    
})

module.exports=mongoose.model("CourseProgress",courseprogress);