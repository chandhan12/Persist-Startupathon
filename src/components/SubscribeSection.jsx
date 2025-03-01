import axios from 'axios'
import React, { useRef, useState } from 'react'

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

        await axios.post("http://localhost:3000/api/admin/subscribers",{
            name,
            email
        })

        setSubscribed(true)
       
    }
  return (
    <div className='flex flex-col items-center'>
    <div className='w-3/4 '>
     <p className='text-white m-4 text-2xl md:text-4xl font-semibold text-center text-wrap'>You are just one <span className='text-purple-500'>Startupathon Challenge</span> away from an exciting career 
        as the <span className='text-purple-500'> founder of a company</span>, with a <span className='text-purple-500'>full 
        salary</span> and <span className='text-purple-500'>ownership </span> in what you build.</p>

        <div className='flex justify-center m-4 '>
        <blockquote className="twitter-tweet border-purple-500 border">
              <a href="https://twitter.com/jonnyclifford/status/1814625998136029202"></a>
            </blockquote>
        </div>
        <div className='flex flex-col items-center justify-center bg-[#1b0730] rounded-xl h-auto md:h-44 w-full m-2 mb-10'>
            <div className='m-2'>
                <h2 className='text-slate-200 text-wrap text-center text-2xl font-semibold'>Sign up to get notified first about new Startupathon projects and receive updates through our newsletter.</h2>
            </div>
            {
                subscribed == true ? <div className=' h-auto  md:h-20 m-3 w-auto md:w-2/3 bg-[#0a0111] shadow-[0px_0px_10px_#432d7b] opacity-60 border border-purple-600 rounded-lg flex flex-col item-center text-white'>
                    <h2 className='text-center'>Thank You</h2>
                    <p className='text-center'>We'll notify you as soon as a new Startupathon challenge is added.</p>
                </div> : <form onSubmit={handleSubscribe}><div className='flex md:flex-row flex-col justify-center gap-2'>
                <input type="email" ref={emailRef} required className='w-60 text-white mb-2  p-3 rounded-lg border border-purple-700 h-8 bg-[#0a0111]  placeholder-slate-500' placeholder='Enter You Email ID' />
                <button  className='p-1 mb-2 cursor-pointer text-white rounded-lg bg-purple-800 hover:bg-purple-600 '>Subscribe</button>
            </div>
            </form>
            }

        </div>

    </div>
    </div>
  )
}

export default SubscribeSection
