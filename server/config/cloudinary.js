const cloudinary=require("cloudinary").v2
require("dotenv").config();

exports.cloudinaryConnect=async()=>{
    try{
        cloudinary.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET
        })
        console.log("cloudinary connected succesfully")
    }catch(error){
        console.log(error)
        console.log("error in connection cloudinary")
    }
}