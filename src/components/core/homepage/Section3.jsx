import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import CTAbutton from "./Button"
import Highlighted_Text from './Highlighted_Text'
import instructor from "../../../assets/Images/Instructor.png"

const Section3 = () => {
  return (
    <div className=' flex flex-col mt-5'>
      {/* img div  */}
      <div className='flex gap-20 w-full   h-screen justify-center'>
        <div className=' h-fit mt-10'>
            <img className='w-100  shadow-[-10px_-10px_white]' src={instructor} alt="instructor img" />
        </div>
        <div className='flex flex-col    mt-20 h-fit gap-5 '>
            <h1 className='text-white font-bold text-2xl'>Become an <br /><Highlighted_Text text={"instructor"}/></h1>
            <p className='text-white text-[10px]'>Instructors from around the world teach millions of students on <br /> StudyNotion. We provide the tools and skills to teach what you <br />love.</p>
         <CTAbutton active={true} linkto="/signup">   <div className='flex items-center'>Start Teaching Today <FaArrowRight/></div> </CTAbutton>
        </div>
      </div>
      {/* review div   */}
      <div>
        {/* heading div  */}
        <div>
            <h1></h1>
        </div>

      </div>
    </div>                             
  )
}

export default Section3
