import React from 'react'
import {FooterLink2} from "../../../data/footer-links"
import logo1 from "../../../assets/Logo/Logo-Full-Light.png"
import { CiFacebook } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";
import { Link, Links } from 'react-router-dom';

function Footer() {
  return (
    <div className= 'flex   bg-gray-900 text-gray-500 pt-10 pb-20 text-sm'>
        {/* left part  */}
        <div className='flex gap-10 border-r  w-[50%] justify-center'>
            <div className='flex flex-col gap-2'>
                {/* logo  */}
                <img src={logo1} className='text-white' alt="" />
                <h1 className='text-white'>Company</h1>
                <Link to={"/about"} >About</Link>
                <Link to={"/Careers"} >Carrers</Link>
                <Link to={"/Affilates"} > Affilates</Link>
                <div className='flex gap-3 mt-2 text-white'>
                    <Link to={"/facebook"}><CiFacebook></CiFacebook></Link>
                    <Link to={"/google"}><FaGoogle></FaGoogle></Link>
                    <Link to={"/twitter"}><CiTwitter></CiTwitter></Link>
                    <Link to={"/youtube"}><AiOutlineYoutube></AiOutlineYoutube></Link>
            </div>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-white'>Resources</h1>
                <Link to={"/article"}>Article</Link>
                <Link to={"/Blog"}>Blog</Link>
                <Link to={"/chartsheet"}>Chart Sheet</Link>
                <Link to={"/codechallenge"}>Code Challenge</Link>
                <Link to={"/docs"}>Docs</Link>
                <Link to={"/projects"}>Projects</Link>
                <Link to={"/video"}>Video</Link>
                <Link to={"/workspace"}>Workspace</Link>
                <div className='flex flex-col gap-1 mt-3'>
                    <h1 className='text-white'>Support</h1>
                     <Link to={"/helpcenter"}>Help Center</Link>
                </div>
            </div>
            <div className='flex flex-col gap-2 '>
                <h1 className='text-white'>Plans</h1>
                <Link>Paid Memberships</Link>
                <Link>For student</Link>
                <Link>Business solution</Link>
                <div className='flex flex-col mt-3 gap-1'>
                    <h1 className='text-white'>Community</h1>
                    <Link to={"/Forums"}>Forums</Link>
                    <Link to={"/chapter"}>chapter</Link>
                    <Link to={"/Events"}>Events</Link>
                </div>
            </div>

        </div>
        {/* right part  */}
        <div className='flex gap-8  w-[50%] justify-center'>
            {
                FooterLink2.map((element,idx)=>{return(
                    <div key={idx} className='flex flex-col gap-1 '>
                        <h1 className='text-white'>{element.title}</h1>
                        {element.links.map((elem,index)=>{return(
                            <Link className='flex flex-col' key={index} to={elem.link}>{elem.title}</Link>
                        )})}
                    </div>
                )})
                
            }
        </div>


        

      
    </div>
  )
}

export default Footer
