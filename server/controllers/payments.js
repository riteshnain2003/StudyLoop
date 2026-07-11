const instance=require("../config/razorpay");
const User=require("../models/User");
const Course=require("../models/Course");
const mailsender=require("../utils/MailSender");
const courseEnrolementEmail=require("../mail/templates/courseEnrollmentEmail");
const { default: mongoose } = require("mongoose");
const { json } = require("express");

//capture the payment and intiate the razorpay order

exports.capturePayment=async(req,res)=>{
    //get course id and user id
    const {courseId}=req.body;
    const userId=req.user.id;
    //validatio course id
    if(!courseId){
        return res.status(401).json({
            success:false,
            messgae:"please provide all course details"
        })
    };
    //valide course details
    let courseDetails;
    try{
        courseDetails=await Course.findById(courseId);
        if(!courseDetails){
            return res.status(400).json({
            success:false,
            messgae:"could not found the course"
        })}
        //check user paid for course already or not
        //convert string to object 
        const uid=new mongoose.Types.ObjectId(userId);
        if(Course.studentEnrolled.includes(uid)){
            return res.status(401).json({
                success:false,
                message:"user already enrolled", })
        }

    }catch(error){
        console.error(error)
        return res.status(501).json({
            success:false,
            message:error.message,
        })
    }

    //create the order
    //order create
    const amount=Course.price;
    const currency="INR";

    const options={
        amount:amount*100,
        currency,
        receipt:Math.random(Date.now()).toString(),
        notes:{
            courseId:courseId,
            userId,
        }
    }; 
    try{
        //initiate the payment using razorpay
        const paymentResponse=await instance.orders.create(options);
        console.log(paymentResponse);
        return res.status(200).json({
            success:true,
            courseName:Course.courseName,
            description:Course.courseDescription,
            thumbnail:Course.thumbnail,
            order_id:paymentResponse.id,
            amount:paymentResponse.amount,
            currency:paymentResponse.currency,
        })
    }catch(error){
        console.error(error)
        return res.status(501).json({
            success:false,
            message:error.message,
        })
    }
    //return response

}


//verify signature of razorpay and server

exports.verifySignature=async(req,res)=>{
   const webhookSecret="12345678";
   const signature=req.headers["x-rayzorpay-signature"];

   const shasum=crypto.createHmac("sha256",webhookSecret)
   shasum.update(JSON.stringify(req.body));
   const digest=shasum.digest("hex");

   if(signature ===digest){
    console.log("payment is Authorised")

    const {courseId,userId}=req.body.payload.payment.entity.notes;

    try{
        //fullfill teh action 
        //find the course and enroll the student in it
        const enrolledCourse=await Course.findOneAndUpdate({_id:courseId},{$push:{
            studentEnrolled:userId
        }},{new:true},)

        if(!enrolledCourse){
             return res.status(501).json({
            success:false,
            message:courseNotFound,
        })
            
        }
        console.log(enrolledCourse)

        //find student and update course in enrolled courses
        const enrolledStudent=await User.findOneAndUpdate({_id:userId},{$push:{
            courses:courseId
        }},{new:true},)
        console.log(enrolledStudent)

        //mail send krdo  confirmation wala
        const emailResponse=await mailsender(enrolledStudent.email,"congratulation from code help"," congratulation you are entera course")
        console.log(emailResponse)
        return res.status(200).json({
            success:true,
            messgae:"signature verifcation and course added"
        })

    }catch(error){
        return res.status(500).json({success:false,
            message:error.message, 
        })


    }


   }
   else{
    return res.status(400).json({
        success:false,
        message:"invalid request",
    })
   }

}