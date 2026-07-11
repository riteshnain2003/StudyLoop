import React from 'react'
import { useState } from 'react'
import { FaEye } from "react-icons/fa";
import Highlighted_Text from '../components/core/homepage/Highlighted_Text'
import image from "../assets/Images/signup.webp"
import { FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { apicaller } from '../service/APIconnector';
import { auth_api } from '../service/apis';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { setToken } from '../redux/slice/authSlice';
import { logout } from '../redux/slice/authSlice';
import { setuser } from '../redux/slice/userslice';
import { TbTableColumn } from 'react-icons/tb';


const Login = () => {
    const dispatch=useDispatch();
    const [type,settype]=useState("Student")
    const [showpassword,setshowpassword]=useState(false)
    const navigate=useNavigate();
    const [formdata,setformdata]=useState({
        email:"",
        password:"",
    })
    const [error,seterror]=useState({})

   async function loginhandler(e){
        e.preventDefault();
        
        const isvalid=validateform()
        if(!isvalid){
            toast.error("Please fill all required fields correctly")
            return;
        }
        const toastId=toast.loading("wait.....")

// api caling here 
        try{
            const response=await apicaller("post",auth_api.login_api,{email:formdata.email,password:formdata.password})
            dispatch(setToken(response.data.token))
            dispatch(setuser(response.data.user))
            toast.dismiss(toastId)
            toast.success("login successfully!!")
            navigate("/");
        
        }catch(error){
            console.log(error)
            toast.dismiss(toastId)
            toast.error(error.response?.data?.message || "Failed to login")
        }
        

    }
    function validateform(){
        const newerror={}
        Object.keys(formdata).forEach((item)=>{
            const error=validateError(item,formdata[item])
            if(error){
                newerror[item]=error;
            }
        })
        seterror(newerror)
        return Object.keys(newerror).length===0;
        

    }

    function changehandler(e){
        const {name,value}=e.target;
        setformdata((prev)=>({
            ...prev,
            [name]:value
        }));
    }

    function validateError(name,value){
        switch(name){
            case"email":
            if(!value.trim()){return "email required"}
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) return "Invalid email address";
            return "";

            case "password":
                if(!value.trim()){return "password required"}
                return "";

            default:
                return "";


        }
    }



  return (
     <div className='flex lg:flex-row text-white  justify-around mt-5 min-h-[750px]'>
        {/* left div  */}
        <div className='flex flex-col gap-5  w-[50%] lg:pl-40 text-lg mt-15'>
            <div className='flex flex-col gap-1'>
            <h1 className='text-white text-3xl font-bold'>Welcome Back</h1>
            <p>Discover your passions <br /> <Highlighted_Text text={"Be Unstoppable"}/></p>
            </div>

            <div className='flex gap-2 bg-gray-800 w-fit rounded-full p-1'>
            <button className={`${type==="Student"?"bg-gray-950":""} rounded-full text-sm p-3 `} onClick={()=>settype("Student")}>Student</button>
            <button className={`${type==="Instructor"?"bg-gray-950":""}  rounded-full text-sm p-3`} onClick={()=>settype("Instructor")}>Instructor</button>
            </div>

          
            <form  className='flex flex-col gap-4 '>
                
                <span className='flex flex-col gap-2 '>
                <label htmlFor="email" className='flex items-center gap-2'>
                    Email Address*
                    {error.email &&(
                        <p className='text-red-500 text-sm'>{error.email}</p>
                    )}
                </label>
                <input onChange={changehandler} name='email' type="email" id='email' placeholder='Enter email address' className=' bg-gray-800 rounded p-2  lg:w-[65%] outline-none' />
                </span>


                <span className='flex flex-col  rounded p-1 gap-2 '>
                <label htmlFor="createpass" >
                    Password*
                     {error.password &&(
                        <p className='text-red-500 text-sm'>{error.password}</p>
                    )}
                </label>
                    <span className='relative flex  bg-gray-800 rounded  items-center justify-between lg:w-[65%]'>
                    <input onChange={changehandler} name='password' type={`${showpassword?"text":"password"}`} placeholder='Enter Password' id='createpass' className='outline-none p-2 ' />

                    {showpassword?<FaEye onClick={()=>setshowpassword(prev=>!prev)} className='mr-2'/>:<FaEyeSlash onClick={()=>setshowpassword(prev=>!prev)} className='mr-2'/>}
                    <Link to={"/forgotpassword"} className='absolute -bottom-5 right-0 text-blue-800 text-sm '>Forgot password</Link>
                </span>
                
                
               
                </span>
                    
                <button onClick={loginhandler} className='bg-yellow-300 p-2 mt-2 rounded-xl text-sm font-bold w-[65%] text-black active:scale-95 transition-transform duration-150 '>Log In</button>
                
                
            </form>
            

        </div>
        {/* right div  */}
        <div className='flex w-[50%] items-start mt-20'>
            <img src={image} alt="img" className='w-[60%]   rounded  shadow-[10px_10px_white]' />
        </div>
      
    </div>
  )
}

export default Login
