const mongoose=require("mongoose");

const RatingAndReview= new mongoose.Schema({
    
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        trim:true,
        ref:"User"
    },
    course:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        trim:true,
        ref:"Course",
    },
    rating:{
        type:Number,
        required:true
        },
    Review:{
        type:String,
        required:true

    }
})

module.exports=mongoose.model("RatingAndReview",RatingAndReview);