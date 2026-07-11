import React from 'react'
import CTAbutton from "../homepage/Button"
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation'

const CodeBlock = ({ position, heading, subheading, btn1, btn2, codedata,gradient }) => {
    return (

        <div className={`flex ${position}  gap-30  items-center justify-around pt-[90px] pb-[90px] pl-[130px] pr-[90px]`}>
            {/* textual div  */}
            <div className='flex flex-col gap-20   w-[60%]  '>
                <div className='flex flex-col gap-8'>
                    {heading}
                    {subheading}
                </div>
                <div className='flex gap-3'>
                    <CTAbutton active={btn1.active} linkto={btn1.linkto}><div className='flex items-center gap-3'>{btn1.text}<FaArrowRight /></div></CTAbutton>
                    <CTAbutton active={btn2.active} linkto={btn2.linkto}>{btn2.text}</CTAbutton>
                </div>

            </div>
            {/* code wala div  */}
            <div className={`relative flex w-[40%]  text-sm shadow-[0px_0px_5px_gray] pl-20 pt-5 pb-5 bg-gray-900`}>
                <div className={`absolute top-5 left-10 w-60 h-50 rounded-full ${gradient}  `}></div>

                
                <div className='flex flex-col '>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>11</p>
                    <p>12</p>
                    <p>13</p>
                    <p>14</p>
                    <p>15</p>

                </div>
                <TypeAnimation
                sequence={[
`<!DOCTYPE html>
<html>
<head>
<title>Example</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>
<h1><a href="/">Header</a></h1>
<nav>
    <a href="/one">One</a>
    <a href="/two">Two</a>
    <a href="/three">Three</a>
 </nav>
 </body>
 </html>`,
2000,"",
]}
                    wrapper="pre"
                    repeat={Infinity}
                    style={{
                        whiteSpace: "pre-wrap",
                        display: "block",
                        fontSize:"14px",
                        
                        
                    }}
                    omitDeletionAnimation={true}
                    speed={70}
                 />
            </div>


        </div>

    )
}

export default CodeBlock
