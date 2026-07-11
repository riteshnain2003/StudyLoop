const mongoose=require("mongoose");

const subsectionschema= new mongoose.Schema({
    
    title:{
        type:String,
    },
    timeDuration:{
        type:String,
        
    },
    description:{
        type:String
        
    },
    imageUrl:{
        type:String
    }
})

module.exports=mongoose.model("SubSection",subsectionschema);