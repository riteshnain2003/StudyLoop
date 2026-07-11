import React, { useState } from 'react'
import Highlighted_Text from './Highlighted_Text'
import {HomePageExplore} from "../../../data/homepage-explore"
import { IoIosPerson } from "react-icons/io";
import { TbBinaryTree2Filled } from "react-icons/tb";


const TagData=[
   "Free",
   "New to coding",
   'Most popular',
   'Skills paths',
   'Career paths',
]

function CardComponent() {
    const [currentTag,setcurrentTag]=useState(HomePageExplore[0].tag)
    const [currentCourse,setcurrentCourse]=useState(HomePageExplore[0].courses)
    const [selectCard,setselectCard]=useState(HomePageExplore[0].courses[0].heading)

    const cardSetup=(value)=>{
        setcurrentTag(value)
        console.log(value)
        const result=HomePageExplore.filter((num)=>{return num.tag===value})
        console.log(result)
        setcurrentCourse(result[0].courses) 
        setselectCard(result[0].courses[0].heading)

    }

    // console.log("cuurent tag",currentTag,"curent course",currentCourse,"selct card",selectCard);
  return (
    <div className='flex flex-col gap-3 items-center'>
      {/* heading  */}
      <div className='text-4xl font-bold'>
        Unlock the <Highlighted_Text text={"Power of Code"}/>
      </div>
      <p className='text-sm font-semibold text-gray-200 '> 
        Learn to Build Anything You Can Imagine
      </p>
      {/* selection tag  */}
      <div className='flex gap-2 mt-5'>
        {
        TagData.map((element,index)=>{
            return(
                <div key={index} className={`p-3 bg-gray-700 rounded-2xl transition-all duration-100  shadow-xl text-gray-300 hover:bg-gray-900 hover:text-white ${element===currentTag?"bg-gray-900 text-white scale-95":""}`} onClick={()=>{cardSetup(element)}}>
                    {element}
                </div>
            )
        })
      }
 </div>
    
    {/* cards show div  */}
      <div className='flex gap-8 mt-10  '>
        {
            currentCourse.map((element,index)=>{
                return(
                    <div key={index} className={`flex flex-col  gap-2 bg-gray-800 w-fit lg:h-[320px] p-5 justify-between ${selectCard===element.heading?"shadow-[10px_10px_0px_yellow] bg-white text-black":""}`} 
                    onClick={()=>{
                        setselectCard(element.heading)


                    }}>
                        <div>
                        <h1 className='text-lg font-bold'>{element.heading}</h1>
                        <p className='w-70 text-gray-500 font-semibold'>{element.description}</p>
                        </div>
                      
                        <div className={`flex justify-between items-center border-t-1 border-dashed border-gray-500  ${selectCard===element.heading?"text-blue-700":"text-gray-300"}`}>
                            
                            <div className='flex items-center gap-2  '>
                                <IoIosPerson/>
                                {element.level}
                            </div>
                            <div className='flex items-center gap-2 '>
                                <TbBinaryTree2Filled/>
                                {element.lessionNumber} lessons

                            </div>
                        </div>
                    </div>
                )
            })
        }
      

      </div>


    </div>
  )
}

export default CardComponent
