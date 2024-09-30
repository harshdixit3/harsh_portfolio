import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';


function Contects() {
    
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        const userInfo={
            name:data.name,
            email:data.email,
            message:data.message
        }
        try {
            await axios.post("https://getform.io/f/alljrnxa", userInfo);
            toast.success("Your Message has been sent")
        } catch (error) {
            console.log(error)
            toast.error("Something Went Wrong")
        }
      }

   return (
    <>
    <div name="Contects" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <h1 className='text-3xl font-bold mb-4 '>Contect Me</h1>
        <span>Please Fill out The Form Below To Contect Me</span>
        <div className='flex flex-col items-center justify-center'>
            <form 
               onSubmit={handleSubmit(onSubmit)}
            //    action='https://getform.io/f/alljrnxa'
            //    method='POST'
               className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
                <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
                <div className='flex flex-col mb-4'>
                    <label className='block text-grey-700'>Full Name</label>
                    <input
                       {...register("name", { required: true })}
                       className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                       id='name'
                       name='name'
                       type='text'
                       placeholder='Enter your Full Name'
                    />
                     {errors.name && <span>This field is required</span>}
                
                </div>
                <div className='flex flex-col mb-4'>
                    <label className='block text-grey-700'>Enter your Email</label>
                    <input
                       {...register("email", { required: true })}
                       className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                       id='name'
                       type='text'
                        name='email'
                       placeholder='Enter your Email'
                    />
                     {errors.email && <span>This field is required</span>}
                
                </div>
                <div className='flex flex-col mb-4'>
                    <label className='block text-grey-700'>Message</label>
                    <textarea
                       {...register("message", { required: true })}
                       className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                       id='name'
                       type='text'
                        name='message'
                       placeholder='Enter your Query'
                    />
                    {errors.message && <span>This field is required</span>}
                
                </div>
                <button type='Submit' className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300 '>Send</button>
                
            </form>
        </div>


    </div>
    </>
  )
};

export default Contects;