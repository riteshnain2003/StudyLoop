import React from 'react'
import Highlighted_Text from '../components/core/homepage/Highlighted_Text'
import img1 from "../assets/Images/aboutus1.webp"
import img2 from "../assets/Images/aboutus2.webp"
import img3 from "../assets/Images/aboutus3.webp"
import img4 from "../assets/Images/FoundingStory.png"





const About = () => {

    const bannerData=[
        {
            "title":"5K",
            "des":"Active Students"
        },
        {
            "title":"10+",
            "des":"Mentors"
        },
        {
            "title":"200+",
            "des":"Courses"
        },
        {
            "title":"50+",
            "des":"Awards"
        }
        
    ]
  return (
    <div className='text-white'>
        {/* section1 */}
        <section className='relative flex flex-col overflow-y-hidden text-white  bg-gray-800 border-b'>
            <div className='absolute flex gap-8  justify-around mx-auto z-1 left-[10%] top-70'>
                <img src={img1} alt="img" />
                <img src={img2} alt="img" />
                <img src={img3} alt="img" />
            </div>

            <div className='flex flex-col gap-4 items-center mt-20 font-bold min-h-[440px] '>
                <h1 className='text-4xl'>Driving Innovation in Online Education for a <br /> <p className='flex    justify-center '> <Highlighted_Text  gradient={"bg-gradient-to-b from-sky-400 via-sky-500 to-yellow-200"} text={"Brighter Future"} ></Highlighted_Text></p></h1>
                <p className=' text-gray-500'>Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a <br /> brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant <br /> <p className='flex justify-center'>learning community.</p> </p>
            </div>

            <div className='flex justify-center pt-40 pb-20  bg-gray-900  '>
                <h1 className='indent-12  text-4xl font-bold'>We are passionate about revolutionizing the way we learn. Our <br /> innovative platform
                <Highlighted_Text text={"combines technology "} gradient={"bg-gradient-to-b from-sky-400 via-sky-500 to-yellow-200"}/>
                <span className='text-orange-400'>expertise</span>
                , and community to <br /><p className='pl-40'>create an<span className= ' text-yellow-500'> unparalleled educational experience.</span></p>
                
                </h1>
            </div>
        </section>

        {/* section2 */}
        <section className='flex  h-screen'>
            <div className='flex flex-col gap-8 text-gray-400 text-lg  mx-auto my-auto'>
                <h1 className='text-4xl'><Highlighted_Text text={"Our Founding Story"} gradient={"bg-gradient-to-b from-pink-100 via-red-500 to-yellow-200"}/></h1>
            <p className=''>Our e-learning platform was born out of a shared vision and passion for <br /> transforming education. It all began with a group of educators, technologists, <br /> and lifelong learners who recognized the need for accessible, flexible, and <br /> high-quality learning opportunities in a rapidly evolving digital world.</p>
            <p>As experienced educators ourselves, we witnessed firsthand the limitations <br /> and challenges of traditional education systems. We believed that education <br /> should not be confined to the walls of a classroom or restricted by <br /> geographical boundaries. We envisioned a platform that could bridge these <br /> gaps and empower individuals from all walks of life to unlock their full <br /> potential.</p>
            </div>
            
            <div className='mx-auto my-auto '>
                <img className='shadow-[0px_0px_10px_orange]' src={img4} alt="img" />
            </div>
        </section>

        {/* section3 */}
        <section className='flex flex-col '>
            <div className='flex'>
            <div className='flex flex-col gap-8 text-gray-400 text-lg  mx-auto '>
                <h1 className='text-4xl'><Highlighted_Text text={"Our Vision"} gradient={"bg-gradient-to-b from-orange-100 via-red-500 to-yellow-200"}/></h1>
            <p>With this vision in mind, we set out on a journey to create an <br /> e-learning platform that would revolutionize the way people <br /> learn. Our team of dedicated experts worked tirelessly to develop a robust <br /> and intuitive platform that combines cutting- <br /> edge technology with engaging content, fostering a dynamic <br /> and interactive learning experience.</p>
            </div>

             <div className='flex flex-col gap-8 text-gray-400 text-lg  mx-auto  '>
                <h1 className='text-4xl'><Highlighted_Text text={"Our Mission"} gradient={"bg-gradient-to-b from-pink-100 via-blue-500 to-skyblue-200"}/></h1>
            <p>Our mission goes beyond just delivering courses online. We <br /> wanted to create a vibrant community of learners, where <br /> individuals can connect, collaborate, and learn from one <br /> another. We believe that knowledge thrives in an environment <br /> of sharing and dialogue, and we foster this spirit of <br /> collaboration through forums, live sessions, and networking <br /> opportunities.</p>
            </div>
            </div>

            <div className='bg-gray-500 min-h-30 mt-40'>
                {
                    bannerData.map((elem,index)=>{
                        return (
                            <div key={index}>
                                <h1>{elem.title}</h1>
                                <p>{elem.des}</p>

                            </div>
                        )
                    })
                }

            </div>
            
            
        </section>
      
    </div>
  )
}

export default About
