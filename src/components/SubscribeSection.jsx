import axios from 'axios'
import React, { useRef, useState } from 'react'
import {motion} from 'framer-motion'
import CustomBtn2 from './ui/CustomBtn2'

const SubscribeSection = () => {

    const [subscribed,setSubscribed]=useState(false)
    
    const emailRef=useRef('')

    const handleSubscribe =async (event)=>{
        event.preventDefault()
        const email=emailRef.current.value
        if(!email){
            
            return
        }

        const name=email.split("@")[0]

        await axios.post("https://persiststartupathon-admin.onrender.com/api/admin/subscribers",{
            name,
            email
        })

        setSubscribed(true)
       
    }
  return (
    <div className='flex flex-col items-center'>
    <div className='w-3/4 '>
     <motion.p
     initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 10 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: false }}
            
         className='text-white m-4 text-2xl md:text-4xl font-semibold text-center text-wrap'>You are just one <span className='text-purple-500'>Startupathon Challenge</span> away from an exciting career 
        as the <span className='text-purple-500'> founder of a company</span>, with a <span className='text-purple-500'>full 
        salary</span> and <span className='text-purple-500'>ownership </span> in what you build.</motion.p>
        
        <div className='flex justify-center m-4 animate-fade-up  animate-duration-[600ms] animate-delay-[50ms] '>
        <blockquote className="twitter-tweet border-purple-500 border">
              <a href="https://twitter.com/jonnyclifford/status/1814625998136029202"></a>
            </blockquote>
        </div>


        <motion.div
      className="flex items-center justify-center px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div
        className="p-8 text-white font-bold mb-5  rounded-lg shadow-lg h-20 w-4/5 cursor-pointer transition-all duration-500 relative"
        style={{
          minHeight: "180px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "conic-gradient(from var(--wave-angle), rgba(138, 43, 226, 0.3) 20%, rgba(255, 255, 255, 0.3) 40%, rgba(138, 43, 226, 0.5) 60%, rgba(255, 255, 255, 0.2) 80%)",
          animation: "wave-motion 4s infinite linear",
        }}
      >
        <div className="flex flex-col items-center">
          
          <h2 className="text-slate-200 text-lg mt-4 font-semibold">
          Sign up to get notified first about new Startupathon projects and receive updates through our newsletter.
          </h2>

          {
                subscribed == true ? <div className=' h-auto p-2  md:h-22 m-3 w-auto md:w-2/3 bg-[#0a0111] shadow-[0px_0px_10px_#432d7b] opacity-60 border border-purple-600 rounded-lg flex flex-col item-center text-white'>
                    <h2 className='text-center'>Thank You</h2>
                    <p className='text-center'>We'll notify you as soon as a new Startupathon challenge is added.</p>
                </div> : <form onSubmit={handleSubscribe}><div className='flex md:flex-row flex-col justify-center gap-2'>
                <input type="email" ref={emailRef} required className='w-72 text-white mb-2  p-3 rounded-lg border border-purple-700 h-10 bg-[#0a0111]  placeholder-slate-500' placeholder='Enter You Email ID' />
                <div  className=' cursor-pointer text-white rounded-lg   '>
                    <CustomBtn2 text="Subscribe" />
                </div>
            </div>
            </form>
            }

        </div>
      </div>

      <style>
        {`
          @property --wave-angle {
            syntax: "<angle>";
            inherits: false;
            initial-value: 0deg;
          }

          @keyframes wave-motion {
            0% {
              --wave-angle: 0deg;
            }
            50% {
              --wave-angle: 180deg;
            }
            100% {
              --wave-angle: 360deg;
            }
          }
        `}
      </style>
    </motion.div>
    </div>
    </div>
  )
}

export default SubscribeSection
