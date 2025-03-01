import React from 'react'
import CustomButton from './CustomButton'
import { speakerIcon } from '../icons'

const TopSection = () => {
  return (
    // shadow-[0_0_15px_rgba(138,43,226,0.9)]
    <div className="  h-auto mt-20  p-4 ">
    <div className='opacity-45'>
    <div className='flex justify-center relative ' >
      <img className=' h-56 md:h-80 w-full md:w-4/5 grayscale' src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/66b7a9b742a15fc71db053f3_pv%20team%20cropped.png" alt="" />
      <div className="absolute h-14 bottom-0 w-full md:w-4/5 bg-[#0a0112] rounded-lg opacity-95 text-white text-center p-3">
        
        </div>
    </div>
    
    </div>
    <div className='items-center flex flex-col text-white -translate-y-12  md:-translate-y-6 font-bold'>
        <h2 className=" font-bold text-5xl md:text-8xl bg-gradient-to-r from-purple-700  to-white bg-clip-text text-transparent animate-gradient">
            Startupathon
        </h2>
        <h2 className='text-2xl text-center md:text-3xl m-1 p-1 font-semibold'>Your Chance to Build, Lead, and Succeed as a Founder</h2>
        <div className=" w-full m-2 h-84 md:h-96 md:w-4/7">
          <iframe
            src="https://www.loom.com/embed/996f59a2e5c34fd38b86544833c23dde?sid=dbe496d7-733b-4b11-95df-748e10acf52f"
            frameBorder="0"
            allowFullScreen
            className=" top-0 left-0 w-full h-84 md:h-96 rounded-lg border-purple-600 border"
          ></iframe>
          
        </div>
      <div className='flex md:flex-row flex-col gap-10 mt-4'>
      <CustomButton text="Ongoing Startupathon" icon="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/6775840568c26049e42dd070_sound-on.png" />
      <CustomButton text="Startupathon Guide" icon="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/677584067844b40361f47c65_user-guide.png" />
      <CustomButton text="Past Startupathons" icon="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/6775840659c6695bc2177369_checked.png" />
      <CustomButton text="Mentor Network" icon="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/677584060ab4f3d12b8ebd4c_help.png" />
      </div>
    </div>
    
    <style>
    {`
      @keyframes gradientMove {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      .animate-gradient {
        background-size: 200% 100%;
        animation: gradientMove 3s infinite linear;
      }
        
    `}
  </style>
 
  </div>

 

  )
}

export default TopSection
