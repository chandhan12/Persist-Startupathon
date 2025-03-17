import React from 'react'
import image1 from '../assets/image1.png'
import Wavebg from '../assets/Wavebg.svg'
import {motion} from 'framer-motion'
import ProcessSteps from './CardsInView'

const GuideSection2 = () => {
  return (
    <div className='flex flex-col items-center p-4 relative mt-[128px]'>

    <motion.div
        
        className="absolute left-[-129px] top-0 -translate-y-30 opacity-[50%]"
      >
        <img src={Wavebg} alt="Floating Top Element" className="h-[321px] w-[327px] opacity-[50%]" />
      </motion.div>
        <h2 className="text-white text-2xl md:text-5xl m-2 font-sans font-semibold mx-1 md:m-4">
      Found an{" "}
      <span className="bg-gradient-to-r from-purple-400 to-purple-500 text-transparent bg-clip-text font-bold">
        idea
      </span>{" "}
      that matches your skills?
      <br />
    </h2>
   
    <div className="md:w-2/3 w-auto m-2">
      <p className="text-white text-center text-sm md:text-lg m-4">
        Here's a simple guide on how the Startupathon process works once you find a project that suits your skills. <br />
       
      </p>
    </div>
    <ProcessSteps/>
    </div>
  )
}

export default GuideSection2

/*
 <div className='flex md:flex-row flex-col gap-15 justify-center items-center p-4'>
        <div className='h-[400px] w-[400px]'>
            <img src={image1} alt='image1' className='h-full w-full' />
        </div>
        
            <div className='flex flex-col h-[400px] w-[550px]  text-white pt-10 px-2'>
                <h1 className='text-5xl m-2 bg-gradient-to-r from-purple-400 to-purple-500 text-transparent bg-clip-text font-bold'>01</h1>
                <h2 className='text-4xl m-2 font-semibold'>Build, Submit & Shine</h2>
                <p className='text-lg m-2'> Create a prototype and submit it with a <br /> loom video.No complex code, just <br /> your best ideas.</p>
                <p className='text-md text-green-600 m-2'>💡 Stay ahead: Submit on time or early to show your dedication!</p>
            </div>
       
    </div>
        */