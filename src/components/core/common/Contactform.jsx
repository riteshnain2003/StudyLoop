import React from 'react'
import { useForm } from 'react-hook-form'
import { countrycode } from "../../../data/countrycode"

const Contactform = () => {
     const {register,handleSubmit,reset,formState:{errors},}=useForm();
     
     const onSubmit=(data)=>{
        console.log(data)

     }

  return (
    <div className=' flex justify-center'>
         <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 p-10 w-fit text-white ' onSubmit={handleSubmit((data) => console.log(data))}>
            <div className='flex gap-10'>
                <span className='flex flex-col gap-2'>
                <label htmlFor="firstname">First Name</label>
                <input className='bg-gray-700 p-3 rounded-md outline-none  shadow-[0px_1px_white]' placeholder='Enter First Name' name='firstname' {...register('firstName',{required:true})} />
                {errors.firstName && <p className='text-red-500'>First name is required.</p>}
                </span>

                <span className='flex flex-col gap-2'>
                <label htmlFor="lastname">Last Name</label>
                <input className='bg-gray-700 p-3 rounded-md outline-none  shadow-[0px_1px_white]' placeholder='Enter Last Name' name='lastname' {...register('lastName',{required:true})} />
                {errors.lastName && <p className='text-red-500'>Last name is required.</p>}
                </span>
            </div>
                

                <div className='flex flex-col gap-2'>
                <label htmlFor="email">Email Address</label>
                <input className='bg-gray-700 p-3 rounded-md outline-none  shadow-[0px_1px_white]' placeholder='Enter email address' name='email'  {...register('email',{required:true})} />
                {errors.email && <p className='text-red-500'>email is required.</p>}
                </div>

                <div className='flex flex-col gap-2 '>
                    <label htmlFor="number">Mobile Number</label>
                    <div className='flex  gap-2 '>
                    
                    <div className=''>
                        <select className=' w-24  truncate bg-gray-700 p-3 rounded-md shadow-[0px_1px_white]' name="code" id="code">
                            {
                                countrycode.map((elem,index)=>{
                                    return( 
                                        <option key={index} className='text-black'>
                                            {elem.code}    {elem.country}
                                        </option>
                                    )
                                })
                            }

                        </select>
                    </div>

                    <div className=''>
                        <input {...register('number',{required:true})} className='bg-gray-700 p-3 outline-none lg:w-85   rounded-md shadow-[0px_1px_white]' placeholder='123456789' type="tel" name='number' />
                        {errors.number && <p className='text-red-500'>number is required.</p>}
                    </div>
                    </div>

                    
                </div>

                <div className='flex flex-col gap-2'>
                <label htmlFor="message">Message</label>
                <textarea  className='bg-gray-700 p-3 outline-none  rounded-md shadow-[0px_1px_white] resize-none' rows={5} placeholder='Enter message' name='message' type='' {...register('message',{required:true})} />
               {errors.message && <p className='text-red-500'>message is required.</p>}
                </div>

                <button type='submit' className='bg-yellow-300 rounded-md w-full p-2  text-black font-bold active:scale-95'>Send Message</button>

                </form>

      
    </div>
  )
}

export default Contactform
