import React from 'react'
import image1 from '../assets/Illustration.png'
import spheres2 from '../assets/Spheres2.png'
import {motion} from 'framer-motion'

const GuideSection2 = () => {
  return (
    <div className='flex flex-col items-center p-4 relative '>

    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: [0, -8, 0],
          transition: {
            y: { duration: 3.0, repeat: Infinity, ease: "easeInOut", delay: 0.1 },
            opacity: { duration: 0.8, ease: "easeOut" },
          },
        }}
        className="absolute left-0 -translate-y-8"
      >
        <img src={spheres2} alt="Floating Top Element" className="h-28 w-28 md:w-56 md:h-52" />
      </motion.div>
        <h2 className="text-white text-2xl md:text-5xl m-2 font-sans font-semibold mx-1 md:m-4">
      Found an{" "}
      <span className="bg-gradient-to-r from-purple-400 to-purple-500 text-transparent bg-clip-text font-bold">
        idea
      </span>{" "}
      that matches yourr skills?
      <br />
    </h2>
   
    <div className="md:w-2/3 w-auto m-2">
      <p className="text-white text-center text-sm md:text-lg m-4">
        Here's a simple guide on how the Startupathon process works once you find a project that suits youe skills. <br />
       
      </p>
    </div>
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
        <p className='text-white hover:cursor-pointer hover:text-green-600'>See more!</p>
    </div>
  )
}

export default GuideSection2
