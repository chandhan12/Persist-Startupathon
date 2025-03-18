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
        
     
      <div className="absolute bottom-0 left-[932px]  h-[500px] w-[500px] 
                rotate-[82deg] bg-gradient-to-t from-[#00C2FF] to-[#FF29C3] 
                opacity-[20%] blur-3xl rounded-full shadow-[0_0_100px_#00C2FF] mix-blend-screen">
</div>
      
      <div className=' h-[400px] w-[1200px] rounded-xl top-0 right-[10%] absolute '>
       <div className='h-full w-full flex flex-col items-center justify-center  bg-neutral-800 backdrop-brightness-150 rounded-xl'
       style={{
                   backgroundImage: `url(${parallelogram2})`,
                   backgroundSize: "cover",
                   backgroundPosition: "center",
                 }}
       >
       <div className='p-1 mt-3'>
       <h2 
       style={{fontFamily:"Bricolage Grotesque"}}
       className='text-[64px] font-[700] text-[#DEDEDE] leading-[125%] text-center'>Stay Ahead with Exclusive</h2>
       <h2 
       style={{fontFamily:"Bricolage Grotesque"}}
       className='text-[64px] font-[700] text-[#DEDEDE] leading-[125%] text-center'>Startupathon Updates!</h2>
       </div>
       {
        subscribed ? <p className='text-[#DEDEDE] text-md text-center m-5'>We'll notify you as soon as a new Startupathon challenge is added.</p> : (
            <form onSubmit={handleSubmit} >
       <div className='flex flex-col justify-center items-center m-2 p-2'>
            <input ref={nameRef} required type="text" className='h-[44px] w-[456px] bg-transparent text-[#DEDEDE] placeholder-[#DEDEDE] pl-2 border border-neutral-400 rounded-lg m-1' placeholder='Enter your Name' />
            <input ref={emailRef} required type="email" className='h-[44px] w-[456px] bg-transparent text-[#DEDEDE] placeholder-[#DEDEDE] pl-2 border border-neutral-400 rounded-lg m-1' placeholder='Enter your e-mail id' />
            <button
            style={{fontFamily:"Inter"}}
            className='h-[44px] w-[173px] bg-[#DEDEDE] rounded-[12px] m-5 text-[#805ED9] text-[16px] font-[600] leading-[150%] cursor-pointer' ><span className='bg-gradient-to-b from-[#565656] to-[#1C1C1C] text-transparent bg-clip-text text-[16px] font-[600] leading-[150%]'>Subscribe</span></button>
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
