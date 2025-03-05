import React from 'react'
import { AnimatedCard } from '../AnimatedCard'
import CustomBtn2 from './CustomBtn2'

const FloatingCard = (props) => {
    const {project,image,profile,position,description,funding,profilePicture,linkedinUrl}=props
  return (
    <div className="w-105 ">
             
                <AnimatedCard >
                  
                   <div className='flex justify-start'>
                   <div className='flex justify-center items-center '>
                   <h1 className='text-white text-xl font-bold'>{project}</h1>
                   <img src={image} alt="" className='h-16 w-16' />
                   </div>
                   </div>
                   <div className='flex flex-col items-center'>
                   <div className='flex gap-1 p-2'>
                    <div>
                <img className='h-64 w-3xl rounded-lg' src={profilePicture} alt="" />
            </div>
            <div className='flex flex-col m-1 p-2'>
                <h2 className='text-white text-xl font-semibold'>{profile}</h2>
                <p className='text-slate-400 text-lg m-1 '>{position}</p>
                <div className='h-8 rounded-lg w-8 m-2 bg-purple-800 cursor-pointer'>
                    <a href={linkedinUrl}><img  src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/66e81ea7c52c2eb1db6a973f_ico_soc-03.svg" alt="" /></a>
                </div>
                <p className=' text-sm text-white'>{description}</p>
            </div>
           </div>
           <p className='text-white font-semibold'>Initial Funding Offered: <span className='font-bold text-lg text-purple-900'>${funding}</span></p>
            
           <div className='m-2'>
           <CustomBtn2  path='challenge'  text="View More details"  />
           </div>
            </div>
          
                </AnimatedCard>
             
            </div>
  )
}

export default FloatingCard
