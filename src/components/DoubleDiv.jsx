import React, { useRef, useState } from 'react'
import parallelogram2 from "../assets/parallelogram2.png";
import Helixrev from "../assets/Helixrev.png";
import Thorus3 from '../assets/Thorus3.png'
import NeonCard4 from './Ui/NeonCard4';
import NeonCard5 from './Ui/NeonCard5';
import axios from 'axios';
const DoubleDiv = () => {
    const [subscribed,setSubscribed]=useState(false)
    const emailRef=useRef(null);
    const nameRef=useRef(null);

    const handleSubmit=async (e)=>{
        e.preventDefault()
        const email=emailRef.current.value;
        const name=nameRef.current.value;
        if(!email || !name){
            return;
        }

        try {
            await axios.post("https://persiststartupathon-admin.onrender.com/api/admin/subscribers",{
                name,
                email
            })
            setSubscribed(true)
        } catch (error) {
            console.log(error.message)
        }
    }
  return (
    <div className=' flex justify-center w-full h-[550px] mt-25 relative'>
         <div className=' h-[350px] w-[280px] -translate-y-40 absolute top-0 right-[0%]'>
       <img src={Helixrev} alt="" />
      </div>
      <div className=' h-[10px] w-[300px] translate-y-40 absolute  left-[0%]'>
       <img src={Thorus3} alt="" />
      </div>
      <div className='flex h-[10px] w-[300px] -translate-y-30 absolute top-0  left-[40%]'>
       <NeonCard4/>
       <NeonCard5 />
      </div>
      <div className='flex h-[10px] w-[300px]  absolute bottom-70  left-[40%]'>
       <NeonCard4/>
      
      </div>
      
      <div className=' h-[400px] w-[1200px] rounded-xl top-0 right-[10%] absolute '>
       <div className='h-full w-full flex flex-col items-center justify-center  bg-neutral-800 backdrop-brightness-150 rounded-xl'
       style={{
                   backgroundImage: `url(${parallelogram2})`,
                   backgroundSize: "cover",
                   backgroundPosition: "center",
                 }}
       >
       <div className='p-1'>
       <h2 className='text-4xl text-[#DEDEDE] font-semibold text-center'>Stay Ahead with Exclusive</h2>
       <h2 className='text-4xl text-[#DEDEDE] font-semibold text-center'>Startupathon Updates!</h2>
       </div>
       {
        subscribed ? <p className='text-[#DEDEDE] text-md text-center m-5'>We'll notify you as soon as a new Startupathon challenge is added.</p> : (
            <form onSubmit={handleSubmit} >
       <div className='flex flex-col justify-center items-center m-2 p-2'>
            <input ref={nameRef} required type="text" className='h-[44px] w-[456px] bg-transparent text-[#DEDEDE] placeholder-[#DEDEDE] pl-2 border border-neutral-400 rounded-lg m-1' placeholder='Enter your Name' />
            <input ref={emailRef} required type="email" className='h-[44px] w-[456px] bg-transparent text-[#DEDEDE] placeholder-[#DEDEDE] pl-2 border border-neutral-400 rounded-lg m-1' placeholder='Enter your e-mail id' />
            <button className='h-[44px] w-[173px] bg-[#DEDEDE] rounded-xl m-5 text-[#805ED9] text-lg font-semibold cursor-pointer' >Subscribe</button>
       </div>
       </form>
        )
       }
       </div>
      </div>
     
    </div>
  )
}

export default DoubleDiv
