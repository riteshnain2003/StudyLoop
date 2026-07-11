import React from 'react'
import Highlighted_Text from '../components/core/homepage/Highlighted_Text'
import img1 from "../assets/Images/aboutus1.webp"
import img2 from "../assets/Images/aboutus2.webp"
import img3 from "../assets/Images/aboutus3.webp"
import img4 from "../assets/Images/FoundingStory.png"
import CTAbutton from "../components/core/homepage/Button"
import Footer from '../components/core/common/Footer'
import Contactform from '../components/core/common/Contactform'






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
                <p className=' text-gray-500'>Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a <br /> brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant <br /> <span className='flex justify-center'>learning community.</span> </p>
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

            <div className='flex justify-around items-center font-bold gap-5 lg:text-xl bg-gray-600 min-h-50 mt-40'>
                {
                    bannerData.map((elem,index)=>{
                        return (
                            <div key={index}>
                                <h1 className='text-4xl flex justify-center'>{elem.title}</h1>
                                <p className='text-gray-300'>{elem.des}</p>

                            </div>
                        )
                    })
                }

            </div>
            
            
        </section>

        {/* grid section  */}
        <section>
            <div className="grid grid-cols-4 grid-rows-2 p-5 mx-30 mt-30 h-screen text-lg  ">
            {/* First Row */}
            <div className=" flex gap-5 flex-col  col-span-2  ">
                <span>
                <h1 className='text-4xl'>World-Class Learning for</h1> <p className='text-4xl'> <Highlighted_Text text={"Anyone, Anywhere"} gradient={"bg-gradient-to-b from-pink-100 via-blue-500 to-skyblue-200"}></Highlighted_Text></p> </span>
                <p className='text-gray-400'>Studynotion partners with more than 275+ leading universities and <br /> companies to bring flexible, affordable, job-relevant online learning to <br /> individuals and organizations worldwide.</p>
                <CTAbutton active={true}>Learn More</CTAbutton>
            </div>
            <div className="flex flex-col gap-2 bg-gray-500 p-4 text-lg">
                <h1 className=''>Curriculum Based on Industry Needs</h1>
                <p className='text-gray-300'>Save time and money! The <br /> Belajar curriculum is made to be <br /> easier to understand and in line <br /> with industry needs.</p>

            </div>
            <div className="flex flex-col gap-2 bg-gray-700 p-4 text-lg">
                <h1>Our Learning Methods</h1>
                <p className='text-gray-400'>The learning process uses the <br /> namely online and offline.</p>
            </div>

            {/* Second Row */}
            <div className="flex flex-col gap-2 col-start-2 bg-gray-500 p-4">
                <h1>Certification</h1>
                <p  className='text-gray-300'>You will get a certificate that can <br /> be used as a certification during <br /> job hunting.</p>
            </div>
            <div className="flex flex-col gap-2 bg-gray-700  p-4">
                <h1>Rating</h1>
                <p  className='text-gray-400'>You will immediately get feedback <br /> during the learning process <br /> without having to wait for an <br /> answer or response from the mentor.</p>
            </div>

            <div className='flex flex-col gap-2 bg-gray-500 p-4'>
                <h1>Ready to Work</h1>
                <p  className='text-gray-300'>Connected with over 150+ hiring <br /> partners, you will have the <br /> opportunity to find a job after <br /> graduating from our program.</p>
            </div>
            </div>
        </section>
        {/* get in touch section  */}
        <section className='flex flex-col gap-2 text-white mt-15'>
            <h1 className='flex justify-center text-4xl font-bold'>Get in Touch</h1>
            <p className='flex justify-center text-md   text-gray-400'>We'd love to here for you, Please fill out this form.</p>
            <Contactform/>
               
        </section>

        {/* review section */}
        <section className='min-h-100'>
            <div className='flex justify-center mx-auto'>
                <h1 className='text-4xl text-white'>Reviews from other learners</h1>
            </div>
            <div>
                {/* reviews  */}
            </div>
        </section>
        <Footer></Footer>
      
    </div>
  )
}

export default About
