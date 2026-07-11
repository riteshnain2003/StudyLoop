import React from 'react'
import Highlighted_Text from './Highlighted_Text'
import img1 from "../../../assets/Images/Know_your_progress.png"
import img2 from "../../../assets/Images/Compare_with_others.png"
import img3 from "../../../assets/Images/Plan_your_lessons.png"
import CTAbutton from "../homepage/Button"

const PlanSection = () => {
  return (
    <div className='flex flex-col gap-10 mt-10 '>
        <div className='mx-auto p-2 flex flex-col gap-5'>
             <h1 className='text-4xl font-bold '>Your swiss knife for <Highlighted_Text text={"learning any language"}/></h1>
             <p className='tracking-wide font-medium text-gray-700'>Using spin making learning multiple languages easy. with 20+ languages realistic voice-over,<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; progress tracking, custom schedule and more.</p>
        </div>
        <div className='relative flex mx-auto w-full h-[480px] '>
            <img className='absolute top-0 left-60  w-100'  src={img1} alt="" />
            <img className='absolute top-0 left-130 w-100' src={img2} alt="" />
            <img className='absolute top-0 left-200  w-100' src={img3} alt="" />
        </div>
        <div className='mx-auto mb-10 hover:scale-95 transition-all duration-100'>
            <CTAbutton active={true} linkto={"/signup"}>Learn More</CTAbutton>
        </div>
     
    </div>
  )
}

export default PlanSection
