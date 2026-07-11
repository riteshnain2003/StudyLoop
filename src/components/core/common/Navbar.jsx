import React, { useRef } from 'react'
import logo from "../../../assets/Logo/Logo-Full-Light.png"
import { NavbarLinks } from "../../../data/navbar-links"
import { Link, useLocation } from 'react-router-dom'
import { MdArrowCircleDown } from "react-icons/md";
import { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import CTAbutton from "../homepage/Button"
import { CiSearch } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";



import { apicaller } from '../../../service/APIconnector';
import { course_api } from '../../../service/apis';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/slice/authSlice';
import { setuser } from '../../../redux/slice/userslice';
import { useNavigate } from 'react-router-dom';





const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const menuref = useRef();
    const [open, setopen] = useState(false)
    const [currentlink, setcurrentlink] = useState("/")
    const [Category, setCategory] = useState([])
    const location = useLocation()


    const token = useSelector((state) => state.auth.token)
    let user = useSelector((state) => state.user.user)
    console.log(user ? user : "no user")




    const match = (path) => {
        setcurrentlink(path)
    }

    useEffect(() => {
        const fetchcategories = async () => {
            const response = await apicaller("GET", course_api.getAllCategory);



            setCategory(response.data.allCategory)
        }
        fetchcategories();

    }, []);

    useEffect(() => {
        function handleClick(e) {
            if (menuref.current && !menuref.current.contains(e.target)) {
                setopen(false);
            }

        }


        document.addEventListener("click", handleClick);

        return () =>
            document.removeEventListener("click", handleClick);

    }, []);

    function logouthandle() {
       
            localStorage.removeItem("token");
            dispatch(logout())
            dispatch(setuser(null))
            navigate("/login")

        
    }








    return (
        <div className='flex justify-between px-20 border-b-1 border-gray-700 h-[60px] items-center'>
            {/* logo div  */}
            <Link to={"/"}><div className='w-40'>
                <img src={logo} alt="study notion" />
            </div></Link>

            {/* link div  */}
            <div className='flex gap-8 text-white text-lg'>
                {
                    NavbarLinks.map((element, index) => {
                        return (
                            <Link to={element.path} key={index}>
                                <div onClick={() => match(element.path)} className={`${currentlink === element.path ? "text-yellow-300" : ""}`}>
                                    {
                                        element.title === "Catalog" ? (
                                            <div className='relative flex items-center gap-1 justify-center group'>
                                                {element.title}
                                                <MdArrowCircleDown></MdArrowCircleDown>


                                                <div className="absolute flex flex-col gap-5 top-full -left-8 mt-0 w-62 h-fit justify-around  bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">

                                                    {
                                                        Category.map((element, index) => {
                                                            return <div key={index} className='text-black text-bold  p-3  rounded-2xl hover:bg-gray-300'>
                                                                {element.name}
                                                            </div>
                                                        })

                                                    }

                                                </div>
                                            </div>) :
                                            (<div>
                                                {element.title}
                                            </div>)
                                    }

                                </div>

                            </Link>)
                    })
                }

            </div>

            {/* profile div  */}
            <div className='flex gap-6'>
                

                {
                    token ? (
                        
                        <div className='text-white flex gap-6 text-2xl  '>
                            <div className='flex text-white  w-fit text-2xl items-center gap-4 '>
                    <CiSearch></CiSearch>
                    <GiShoppingCart></GiShoppingCart>
                </div>


                            {
                                user ? (<div ref={menuref} className='relative '>
                                    <div className='flex gap-1 text-sm items-center '>
                                        <img className='w-[2vw] rounded-full' src={user.image} alt="" onClick={() => { setopen(!open) }} />
                                        {user.firstName} {user.lastName}</div>

                                   

                                    {open && (<div className="absolute right-0 mt-2 w-60 bg-gray-800 rounded-lg shadow-lg p-3 z-50">
                                        <div className="flex items-center gap-2 border-b border-gray-600 pb-3">
                                            <img src={user.image}
                                                alt=""
                                                className="w-10 h-10 rounded-full" />

                                            <div>
                                                <p className="font-semibold">
                                                    {user.firstName} {user.lastName}
                                                </p>

                                                <p className="text-xs text-gray-300">
                                                    {user.email}
                                                </p>
                                            </div>
                                        </div>

                                        <button className="w-full text-xl text-left mt-3 hover:text-yellow-400">
                                            Dashboard
                                        </button>

                                        <button className="w-full text-left text-xl mt-3 text-red-500 hover:text-red-300 " onClick={() => logouthandle()}>
                                            Logout
                                        </button>
                                    </div>

                                    )}</div>) : (<CgProfile />)
                            }

                        </div>) :
                        (<div className=' flex gap-4 text-sm'>
                            
                                <CTAbutton linkto={"/login"} >LogIn</CTAbutton>
                                <CTAbutton linkto={"/signup"} >SignUp</CTAbutton>
                            



                        </div>)
                }

            </div>


        </div>
    )
}

export default Navbar
