const mongoose=require("mongoose");

const courseschema= new mongoose.Schema({
    
    courseName:{
        type:String,
    },
    courseDescription:{
        type:String,
        
    },
    courseContent:{
        type:mongoose.Schema.Types.ObjectId,
          ref:"Section"
     },
    reviewAndRating:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ReviewAndRating"
    }],
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category"
    },
    tags:{
        type:String,
        
    },
    instructor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"

    },
    whatWillYouLearn:{
        type:String,

    },
    price:{
        type:Number
    },
    status:{
        type:String,
        enum:["Draft","Published"]
    },
    thumbnail:{
        type:String,

    },
    studentEnrolled:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"

    }]

})

module.exports=mongoose.model("Course",courseschema);