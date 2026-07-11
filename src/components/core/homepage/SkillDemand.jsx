import React from 'react'
import Highlighted_Text from './Highlighted_Text'
import CTAbutton from "./Button"
import logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import laptop from "../../../assets/Images/TimelineImage.png"

function SkillDemand() {
    const skilldata=[
        {
            hearder:"Leadership",
            logo:logo1,
            para:"Fully committed to the success company"
        },
        {
            hearder:"Responsibility",
            logo:logo2,
            para:"Students will always be our top priority"
        },
        {
            hearder:"Flexibility",
            logo:logo3,
            para:"The ability to switch is an important skills"
        },
        {
            hearder:"Solve the problem",
            logo:logo4,
            para:"Code your way to a solution"
        },
    ]
  return (
    <div className='flex flex-col mx-auto p-10 mt-10 gap-10'>
    {/* textual div  */}
        <div className='flex gap-12   justify-center '>
            {/* left div  */}
            <div className=''>
                <h1 className='p-4 text-3xl font-bold leading-10 tracking-wider '>Get the skills you need for a <br /><Highlighted_Text text={"job that is in demand."}/></h1>
            </div>
            {/* right div  */}
            <div className='flex flex-col gap-5 mt-5'>
                <p>
                    The modern StudyNotion is the dictates its own terms. Today, to be a <br /> competitive specialist requires more than professional skills.
                </p>
                <CTAbutton active={true} linkto={"/signup"}>
                    Learn More
                </CTAbutton>
            </div>
        </div>

    {/* image div  */}
    <div className=' mt-20 flex'>
        {/* skill div  */}
        <div className='flex flex-col gap-10  w-[50%] w-fit mx-auto my-auto'>
            {
        skilldata.map((element,index)=>{
            return(
        <div key={index} className='flex flex-row  gap-4  '>
            <div className='flex items-center'>
                <img src={element.logo} alt="leader" />
            
            </div>
            <div className='flex flex-col'>
                <h1 className='font-black'>{element.hearder}</h1>
                <p>{element.para}</p>

            </div>
        </div>
                    );
               

                })
            }

        </div>
        {/* img div */}
        <div className=' relative  p-5'>
            <div className='absolute top-50 bg-gradient-to-r w-10  h-50  from-blue-500 via-blue-600 to--800 blur-3xl opacity-100 '></div>
            <div className='absolute right-10 top-50 bg-gradient-to-r w-10  h-50  from-blue-500 via-blue-600 to--800 blur-3xl opacity-100 '></div>
            <div className='absolute bg-green-900 flex gap-10 text-white font-bold text-3xl bottom-0 left-40 '>
                <div className='flex items-center gap-4 p-5'>
                    <p>10</p>
                    <div className='flex flex-col text-green-200 font-normal text-sm'>
                        <p>YEARS</p>
                        <p>EXPERIENCE</p>
                    </div>
                </div>
                <div className='flex items-center gap-4 p-5'>
                     <p>250</p>
                    <div className='flex flex-col text-green-200 font-normal text-sm'>
                        <p>TYPES OF</p>
                        <p>COURSES</p>
                    </div>
                </div>

            </div>
            <img className='w-[90%]  shadow-[0px_2px_2px_2px_white]  object-cover rounded-xl ' src={laptop} alt="laptop_img" />

        </div>

    </div>
      



    </div>
  )
}

export default SkillDemand
