const mongoose=require("mongoose");
require("dotenv").config();

exports.connect=()=>{
    
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("database connection succesfully") })
    .catch((error)=>{
        console.log(error);
        console.error(error);
        process.exit(1);})
};