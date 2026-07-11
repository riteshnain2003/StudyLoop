const mongoose=require("mongoose");
const mailsender=require("../utils/MailSender")
const otpTemplate=require("../mail/templates/emailVerificationTemplate")


const otpschema= new mongoose.Schema({
    
    email:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true
        
    },
    createdAt:{
        type:Date,
       default:Date.now(),
       expires:30*60,
    },
})

async function sendEmailVerification(email,otp){
    try{
        const otpBody=otpTemplate(otp)
        const mailresponse=await mailsender(email,"Verification Email form Study Notion",otpBody)
        console.log("Email sent Successfully",mailresponse)
    }catch(error){
        console.log("error found during send ceridfication email",error)

    }


}

otpschema.pre("save",async function(next){
    await sendEmailVerification(this.email,this.otp)
   
})

module.exports=mongoose.model("Otp",otpschema);