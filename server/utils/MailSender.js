const nodemailer=require("nodemailer");
require("dotenv").config();

const mailsender=async function(email,title,body){

    try{

    //create transporter
    let transporter=nodemailer.createTransport({
        host:process.env.MAIL_HOST,
        auth:{
            user:process.env.MAIL_USER,
            pass:process.env.MAIL_PASS}
    });

    let info=transporter.sendMail({
        from:"CodeHELP || StudyNation",
        to:`${email}`,
        subject:`${title}`,
        html:`${body}`
    })
    console.log("email send successfuly");
    return info;

}catch(error){
    console.log(error)
    console.error(error)
    process.exit(1);

}






}

module.exports=mailsender;