import React from 'react'
import Thorustop2 from '../assets/Thorustop2.png'
import Variant3 from '../assets/Variant3.png'
import Helix from '../assets/Helix.png'
import Spheres1 from '../assets/Spheres1.png'
import {motion} from 'framer-motion'
import NeonCard5 from '../components/Ui/NeonCard5'
import NeonCard4 from '../components/Ui/NeonCard4'

const FellowShipPage = () => {
  return (
    <div className='flex flex-col  h-auto w-full  items-center mt-20'>
      <div className='h-[204px] w-[934px]  mt-10 flex flex-col items-center'>
      <div className='h-[138px] w-[809px] m-2 '>
      <h2 className="text-white text-center text-2xl md:text-5xl font-sans font-semibold ">
      Are you ready to {" "}
      <span className="bg-gradient-to-r from-purple-400 to-purple-500 text-transparent bg-clip-text font-bold">
        transform your vison
      </span>{" "}
     into reality?
      <br />
    </h2>
      </div>
    
    <div className="md:w-[934px] h-[56px] w-auto m-2">
      <p className="text-white text-center text-sm md:text-[16px]">
       Persist's fellowship is where we help dreamers dream, by giving them a salary and tons of support to follow their highest<br />
        goals and mission.Share your vison for the world with us!
      </p>
    </div>
      </div>
      <div className='flex relative  justify-center w-full'>
        <motion.div
         initial={{ opacity: 0, y: 12 }}
         animate={{
           opacity: 1,
           y: [0, -12, 0],
           transition: {
             y: { duration: 3.0, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
             opacity: { duration: 0.8, ease: "easeOut" },
           },
         }}
        className=' -translate-y-50  top-0 left-1 absolute'>
            <img src={Thorustop2} className='h-[270px] w-[200px]' alt="" />
        </motion.div>
        <motion.div
         initial={{ opacity: 0, y: 12 }}
         animate={{
           opacity: 1,
           y: [0, -12, 0],
           transition: {
             y: { duration: 3.0, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
             opacity: { duration: 0.8, ease: "easeOut" },
           },
         }}
        
        className='bottom-[25%] left-1 absolute'>
            <img src={Variant3} className='h-[170px] w-[155px]' alt="" />
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{
          opacity: 1,
          y: [0, -12, 0],
          transition: {
            y: { duration: 3.0, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
            opacity: { duration: 0.8, ease: "easeOut" },
          },
        }}
        className='  top-[20%] right-0 absolute'>
            <img src={Helix} className='h-80 w-[260px]' alt="" />
        </motion.div>
        <motion.div
         initial={{ opacity: 0, y: 5 }}
         animate={{
           opacity: 1,
           y: [0, -5, 0],
           transition: {
             y: { duration: 3.0, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
             opacity: { duration: 0.8, ease: "easeOut" },
           },
         }}
        
        className='bottom-[1%] right-0 absolute'>
            <img src={Spheres1} className='h-[250px] w-[265px]' alt="" />
        </motion.div>
       
        <div className='h-[1020px] w-[1296px]  bg-[#272727] rounded-2xl my-6'>

         <div className='h-[1080px] w-[1163px] mx-[66px] mt-[80px] '>
            <div className=' w-[1163px] p-2 m-2'>
                <h2 className='text-white text-xl font-semibold m-1'>Full Name</h2>
                <input type="text" className='bg-neutral-700 m-1 rounded-lg text-white  border border-neutral-400 h-[40px] w-[1163px]' />
            </div>
            <div className=' w-[1163px] p-2 m-2'>
                <h2 className='text-white text-xl font-semibold m-1 '>Email ID</h2>
                <input type="text" className='bg-neutral-700 m-1 rounded-lg text-white  border border-neutral-400 h-[40px] w-[1163px]' />
            </div>
            <div className=' w-[1163px] p-2 m-2'>
                <h2 className='text-white text-xl font-semibold m-1 '>Online profiles/Portfolios</h2>
                <input type="text" className='bg-neutral-700 m-1 rounded-lg text-white  border border-neutral-400 h-[40px] w-[1163px]' />
                <p className='text-md text-[#DDDDDD] m-1'>(LinkedIn, Twitter, YouTube, Facebook, GitHub, Pinterst, Or Your Own Site)</p>
            </div>
            <div className=' w-[1163px] p-2 m-2'>
                <h2 className='text-white text-xl font-semibold m-1 '>Description of Your Idea</h2>
                <input type="text" className='bg-neutral-700 m-1 rounded-lg text-white  border border-neutral-400 h-[40px] w-[1163px]' />

            </div>
            <div className=' w-[1163px] p-2 m-2'>
                <h2 className='text-white text-xl font-semibold m-1 '>Deployed Link To Your Prototype (If Any)</h2>
                <input type="text" className='bg-neutral-700 m-1 rounded-lg text-white  border border-neutral-400 h-[40px] w-[1163px]' />
            </div>
            <div className=' w-[1163px] p-2 m-2'>
                <h2 className='text-white text-xl font-semibold m-1 '>Number of Team Members</h2>
                <input type="text" className='bg-neutral-700 m-1 rounded-lg text-white  border border-neutral-400 h-[40px] w-[1163px]' />
            </div>
            <div className=' w-[1163px] p-2 m-2'>
                <h2 className='text-white text-xl font-semibold m-1 '>Loom Video Link Introducing Yourself And Your Idea</h2>
                <input type="text" className='bg-neutral-700 m-1 rounded-lg text-white  border border-neutral-400 h-[40px] w-[1163px]' />
                <p className='text-md text-[#DDDDDD] m-1'>(Please Include Your Introduction, Explain Your Intreset In This Fellowship, Why You Are The Ideal Candidate, And How Your Project Will <br /> Create An Impact)</p>
            </div>
            <button className='h-[56px] w-[173px] bg-gradient-to-b from-[#AE98E7] to-[#805ED9] text-white rounded-xl cursor-pointer m-1 font-semibold text-md'>Submt Application</button>
         </div>
        
        </div>
        <div className='absolute top-0 right-8 -translate-y-90'>
            <NeonCard5 />
        </div>
        <div className='absolute flex flex-col rotate-[180deg] top-[10%] left-0 '>
            <NeonCard4/>
           
        </div>
        <div className='absolute flex flex-col rotate-[180deg] top-[25%] left-0 '>
           
            <NeonCard5 />
        </div>
        <div className='absolute flex flex-col  bottom-[-10%] right-8 '>
           
            <NeonCard5 />
        </div>
      </div>
    </div>
  )
}

export default FellowShipPage
