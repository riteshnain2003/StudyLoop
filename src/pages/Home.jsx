import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import Highlighted_Text from '../components/core/homepage/Highlighted_Text';
import CTAbutton from "../components/core/homepage/Button"
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../components/core/homepage/CodeBlock';
import SkillDemand from '../components/core/homepage/SkillDemand';
import PlanSection from "../components/core/homepage/PlanSection";
import Section3 from "../components/core/homepage/Section3";
import CardComponent from '../components/core/homepage/CardComponent';
import Footer from '../components/core/common/Footer';

const home = () => {
return (
<div>
{/* section 1 */}
        <div className='relative w-full flex flex-col text-white items-center  overflow-x-hidden mt-8  '>

            <Link to={"/signup"}>
            <div className='p-1 mx-auto rounded-full bg-[#222c37] text-[#999DAA] mt-20 p-4 transition-all duration-200 hover:scale-95 w-fit'>
                <div className='flex flex-row items-center justify-between gap-2 px-3 py-[2px]'>
                    <p>Become an Instructor</p>
                    <FaArrowRight/>

                </div>
            </div>
            </Link>
            {/* heading */}
            <div className='text-center text-4xl mt-6 font-semibold'>
                Empower Your Future With 
                <Highlighted_Text text={"Coding Skills"}/>
            </div>
            <div className='mt-4 w-[60%]  text-center text-lg text-gray-400'>
                With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
            </div> 

            {/* buttons */}

            <div className='flex flex-row gap-2 mt-4'>
                <CTAbutton active={true} linkto={"/signup"} >
                    Learn More

                </CTAbutton>
                <CTAbutton active={false} linkto={"/login"}>
                    Book Demo

                </CTAbutton>

            </div>

            {/* video */}
            <div className='w-[50%] mt-5 overflow-x-hidden'>
                <video
                muted autoPlay loop className=''>
                <source src={Banner}>
                </source>

                </video>
                
            </div>

            {/* codeblock section 1 */}
            <div className=' w-full mt-10   '>
                <CodeBlocks position={"flex-row"} 
                heading={ <div className='text-5xl  '>Unlock your<Highlighted_Text text={"coding potential"}/> <br /> with our online courses.</div> }
                 subheading={ <div className='text-xl'> Our courses are designed and taught by industry experts <br /> who have years of experience in coding and are passionate about <br /> sharing their knowledge with you.</div>}
                 btn1={
                    {
                        active:true,
                        linkto:"/signup",
                        text:"Try it Yourself"
                        
                    }
                 }
                btn2={
                    {
                        active:false,
                        linkto:"/signup",
                        text:"Learn More"
                        
                    }
                 }
                 gradient={"bg-gradient-to-r from-yellow-300 via-yellow-400 to--500 blur-3xl opacity-40"}
                 />

            </div>

            {/* codeblock section 2 */}
            <div className=' w-full mt-10   '>
                <CodeBlocks position={"flex-row-reverse"} 
                heading={ <div className='text-5xl '>Start <Highlighted_Text text={"coding in seconds"}/> <br /></div> }
                 subheading={ <div className='text-xl'> Go ahead, give it a try. Our hands-on learning environment <br />means you'll be writing real code from your very first lesson. <br /> </div>}
                 btn1={
                    {
                        active:true,
                        linkto:"/signup",
                        text:"Continue Lesson"
                        
                    }
                 }
                btn2={
                    {
                        active:false,
                        linkto:"/signup",
                        text:"Learn More"
                        
                    }
                 }
                 gradient={"bg-gradient-to-r from-blue-300 via-blue-400 to--500 blur-3xl opacity-40"}
                 />

            </div>
            {/* card component  */}
            <CardComponent/>
        </div>


{/* section 2 */}
<div className='bg-gray-100'>
{/* two button div  */}
    <div  className=' backimg  flex items-center h-[200px] border-red-400 justify-center gap-10  '>
        <CTAbutton active={true}>
            <div className='flex items-center gap-2'>
                Explore Full Catalog
                <FaArrowRight/>
            </div>
        </CTAbutton>
        <CTAbutton>
            Learn More
        </CTAbutton>
    </div>

    <SkillDemand/>
    <PlanSection/>

</div>


{/* section 3 */}
<Section3/>


{/* footer  */}
<Footer/>
      

</div>
)}

export default home
