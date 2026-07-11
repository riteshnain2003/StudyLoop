import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import image from "../assets/Images/signup.webp"
import Highlighted_Text from '../components/core/homepage/Highlighted_Text';
import CTAbutton from "../components/core/homepage/Button"
import toast from 'react-hot-toast';
import { apicaller } from '../service/APIconnector';
import { auth_api } from '../service/apis';
import {  useNavigate } from 'react-router-dom';

function Signup() {
    const [showpassword,setshowpassword]=useState(false)
    const [confirmpassword,setconfirmpassword]=useState(true)
    const [type,settype]=useState("Student")
    const navigate=useNavigate();

    const [formdata,setformdata]=useState({
        firstName:"",
        lastName:"",
        emailAddress:"",
        phoneNumber:"",
        createPassword:"",
        confirmPassword:"",
        otp:"",
        accountType:type,

    })
    const [error,setError]=useState({})

    const sendotphandler= async (e)=>{
        const toastId=toast.loading("Sending OTP.......")
        
        try{
        e.preventDefault();
        const response=await apicaller("post",auth_api.otp_api,{
            email:formdata.emailAddress,
        })
        toast.dismiss(toastId)
        toast.success("OTP has been sent successfuly! check email",{
            duration:4000,
        })
        console.log(response)

        }catch(error){
            console.log(error)
            toast.dismiss(toastId)
            toast.error(error.response?.data?.message || "Failed to send OTP")
        }
       
       
    

    }

    const createbtnhandler=async(e)=>{
        e.preventDefault();

        const isvalid=validateform();
        if(!isvalid){
            toast.error("Please fill all required fields correctly.")
            return;
        }
        const toastId2=toast.loading("creating Account.......")
        try{
        
        

        
        // call signup api here 
        const response=await apicaller("post",auth_api.signup_api,{
            firstName:formdata.firstName,
            lastName:formdata.lastName,
            email:formdata.emailAddress,
            contactNumber:formdata.phoneNumber,
            Password:formdata.createPassword,
            confirmPassword:formdata.confirmPassword,
            accountType:type,
            otp:formdata.otp
        })
        console.log(response)
        toast.dismiss(toastId2)
        toast.success("Account Created Successfully")
        navigate("/login")
    }
    catch(error){
        console.log(error)
        toast.dismiss(toastId2)
        toast.error(error.response?.data?.message || "Failed to create Account")

    }




    
    }
    function validateform(){
        const newerror={}
        Object.keys(formdata).forEach(key => {
            const error=validateError(key,formdata[key])
            if(error){
                newerror[key]=error
            }

            
        });
        setError(newerror)
        return Object.keys(newerror).length === 0;
    }

    function handlechange(e){
        console.log(e.target)
        const {name,value}=e.target;

        
        setformdata((prev)=>({
            ...prev,
            [name]:value
        }));

        

        


    }
    function handleblur(e){
        const {name,value}=e.target;
        console.log(name,value)
        const error=validateError(name,value);
        console.log(error)

        setError((prev)=>({
            ...prev,
            [name]:error,

        }));



    };
    function validateError(name,value){

        switch(name){
            case"firstName":
            if(!value.trim()) return "Name is required";
            if(value.length<3)return "Name must be at least 3 character";
            return "";

            case"lastName":
            if(!value.trim()) return "Last Name is required";
            return "";

            case"emailAddress":
            if (!value.trim()) return "Email is required";
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) return "Invalid email address";
            return "";

            case"phoneNumber":
            if(!value.trim()) return "Phone number is required";
            if(value.length!==10) return "Phone number must be 10 numbers"
            return "";

            case"createPassword":
            if(!value.trim()) return "password is required";
            return "";

            case"confirmPassword":
            if(!value.trim()) return "password is required";
            if(formdata.createPassword!==value) return " Not Matched"
            return "";

            case"otp":
            if(!value.trim()) return "Otp is required";
            return "";

            default:
            return "";


            

        }
    }

  return (
    <div className='flex lg:flex-row text-white  justify-around mt-5 min-h-[750px]'>
        {/* left div  */}
        <div className='flex flex-col gap-2  w-[50%] lg:pl-40 text-sm '>
            <div>
            <h1 className='text-white text-3xl font-bold'>Welcome Back</h1>
            <p>Discover your passions <br /> <Highlighted_Text text={"Be Unstoppable"}/></p>
            </div>

            <div className='flex gap-2 bg-gray-800 w-fit rounded-full p-1'>
            <button className={`${type==="Student"?"bg-gray-950":""} rounded-full text-sm p-3 `} onClick={()=>settype("Student")}>Student</button>
            <button className={`${type==="Instructor"?"bg-gray-950":""}  rounded-full text-sm p-3`} onClick={()=>settype("Instructor")}>Instructor</button>
            </div>

            <div className=''>
            <form action="submit" className='flex flex-col '>
                    <span className='flex gap-3  min-h-20 '>
                    <span className='flex flex-col '>
                    <label htmlFor="fname">
                        First Name*
                    </label>
                    
                     <input onChange={handlechange} onBlur={handleblur} value={formdata.firstName} name='firstName' type="text" placeholder='Enter First Name' id='fname' className=' bg-gray-800 rounded  outline-none p-1' />
                    {error.firstName && (
                        <p className="text-red-500 text-sm">
                            {error.firstName}
                        </p>
                        )}
                     </span>

                     <span className='flex flex-col relaive '>

                     <label htmlFor="lname">
                        Last Name*
                    </label>
                    <input  onChange={handlechange} onBlur={handleblur} name='lastName' type="text" placeholder='Enter Last Name' id='lname' className=' bg-gray-800 rounded p-1 items-center outline-none' />
                    {error.lastName && (
                        <p className="text-red-500 text-sm  ">
                            {error.lastName}
                        </p>
                        )}
                    </span>
                    
                    </span>
                  
            
                    
                <span className='flex flex-col min-h-20 '>
                <label htmlFor="email">
                    Email Address*
                </label>
                <input  onChange={handlechange} onBlur={handleblur} name='emailAddress' type="email" id='email' placeholder='Enter email address' className=' bg-gray-800 rounded p-1  lg:w-[65%] outline-none' />
                {error.emailAddress && (
                        <p className="text-red-500 text-sm">
                            {error.emailAddress}
                        </p>
                        )}
                </span>

                <span className='flex flex-col  min-h-20'>
                <label htmlFor="mno">
                    Phone Number*  
                </label>
                <input  onChange={handlechange} onBlur={handleblur} type="tel" name="phoneNumber" id="mno" placeholder='1234567891'  className=' bg-gray-800 rounded p-1  lg:w-[65%] outline-none'/>
                {error.phoneNumber && (
                        <p className=" text-red-500 text-sm">
                            {error.phoneNumber}
                        </p>
                        )}
                </span>

                <span className='flex gap-2 min-h-25 '>
                    
                    <span className='flex flex-col  rounded p-1 gap-2 '>
                   
                     <label htmlFor="createpass">
                    Create Password*
                    </label>
                     <span className='flex bg-gray-800 rounded  items-center'>
                         <input  onChange={handlechange} onBlur={handleblur} name='createPassword' type={`${showpassword?"text":"password"}`} placeholder='Enter Password' id='createpass' className='outline-none p-1' />
                    {showpassword?<FaEye onClick={()=>setshowpassword(prev=>!prev)} className='mr-2'/>:<FaEyeSlash onClick={()=>setshowpassword(prev=>!prev)} className='mr-2'/>}
                    
                     </span>
                      {error.createPassword && (
                        <p className="text-red-500 text-sm">
                            {error.createPassword}
                        </p>
                        )}
                    </span>
                    
                    <span className='flex flex-col  rounded p-1 gap-2 '>
                    <label htmlFor="confirmpass">
                        Confirm Password*
                    </label>
                    <span className='flex  items-center bg-gray-800 rounded  gap-2'>
                         
                     <input  onChange={handlechange} onBlur={handleblur} name='confirmPassword' type={`${confirmpassword?"text":"password"}`} placeholder='Enter Password' id='confirmpass' className='outline-none p-1' />
                    {confirmpassword?<FaEye onClick={()=>setconfirmpassword(prev=>!prev)} className='mr-2'/>:<FaEyeSlash onClick={()=>setconfirmpassword(prev=>!prev)} className='mr-2'/>}
                   
                    </span>
                     {error.confirmPassword && (
                        <p className="text-red-500 text-sm">
                            {error.confirmPassword}
                        </p>
                        )}
                    </span>
                    
                   
     
                </span>
                
                
                <span className='flex gap-3 items-center'>
                <label htmlFor="otp">Otp*</label>
                {error.otp && (
                        <p className="text-red-500 text-sm">
                            {error.otp}
                        </p>
                        )}
                </span>
                <span className='flex gap-5'>
                <input type="text" id='otp' name='otp' value={formdata.otp} onChange={handlechange} onBlur={handleblur} placeholder='Enter  Otp' className='p-1 outline-none bg-gray-800 rounded lg:w-fit ' />
                <button onClick={(e)=>sendotphandler(e)} className='bg-yellow-300 p-2 rounded-2xl text-sm font-bold text-black active:scale-95 transition-transform duration-150 '>Send Otp</button>
                </span>
                
                <button onClick={(e)=>createbtnhandler(e)} className='bg-yellow-300 p-2 mt-2 rounded-2xl text-sm font-bold text-black active:scale-95 transition-transform duration-150 '>Create Account</button>


        
                          
            </form>
            </div>

        </div>
        {/* right div  */}
        <div className='flex w-[50%] items-start mt-20   '>
            <img src={image} alt="img" className='w-[60%]   rounded  shadow-[10px_10px_white]' />
        </div>
      
    </div>
  )
}

export default Signup
