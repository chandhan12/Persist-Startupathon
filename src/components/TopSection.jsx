import React from 'react'
import CustomButton from './CustomButton'
import { speakerIcon } from '../icons'
import CustomBtn from './ui/CustomBtn'

const TopSection = () => {
  return (
    // shadow-[0_0_15px_rgba(138,43,226,0.9)]
    <div className="  h-auto mt-20  p-4 ">
    <div className='opacity-30'>
    <div className='flex justify-center relative ' >
      <img className=' h-56 md:h-80 w-full md:w-4/5 grayscale' src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/66b7a9b742a15fc71db053f3_pv%20team%20cropped.png" alt="" />
      <div className="absolute h-14 bottom-0 w-full md:w-4/5 bg-[#0a0112] rounded-lg opacity-95 text-white text-center p-3">
        
        </div>
    </div>
    
    </div>
    {/*  */}
    <div className='items-center flex flex-col text-white -translate-y-12  md:-translate-y-6 font-bold'>
        
        
      <div className='flex md:flex-row flex-col gap-10 mt-4'>
      <CustomBtn  path='challenge' text="Ongoing Startupathon" logo="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/6775840568c26049e42dd070_sound-on.png" />
      <CustomBtn  path='guide' text="Startupathon Guide" logo="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/677584067844b40361f47c65_user-guide.png" />
      <CustomBtn  path='completers' text="Past Startupathons" logo="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/6775840659c6695bc2177369_checked.png" />
      <CustomBtn  path='founders' text="Mentor Network" logo="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/677584060ab4f3d12b8ebd4c_help.png" />
      </div>
      
    </div>
    
    <style>
    {`
      @keyframes gradientMove {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      .animategradient {
        background-size: 200% 100%;
        animation: gradientMove 3s infinite linear;
      }
        
    `}
  </style>
 
  </div>

 

  )
}

export default TopSection
