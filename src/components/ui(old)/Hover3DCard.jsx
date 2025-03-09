import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import React from 'react'
import { FiMousePointer } from 'react-icons/fi'
import CustomBtn2 from './CustomBtn2'




const Hover3DCard = (props) => {
    const {title,image,funding,description,deadline}=props
    const x=useMotionValue(0)
    const y=useMotionValue(0)

    const mouseXSpring=useSpring(x);
    const mouseYSpring=useSpring(y);

    const rotateX=useTransform(
        mouseYSpring,
        [-0.5,0.5],
        ["7.5deg","-7.5deg"]
    );

    const rotateY=useTransform(
        mouseXSpring,
        [-0.5,0.5],
        ["-7.5deg","7.5deg"]
    );
    const handleMouseMove=(e)=>{
        const rect=e.target.getBoundingClientRect()
    
        const width=rect.width
        const height=rect.height
         
        const mouseX=e.clientX-rect.left;
        const mouseY=e.clientY-rect.top;
    
       
    
        const xpct=mouseX / width -0.5;
        const ypct=mouseY / height - 0.5;

        x.set(xpct);
        y.set(ypct);
       
    }

    const handleMouseLeave=()=>{
        x.set(0);
        y.set(0)
       
    }
    
  return (
    <motion.div
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    style={{
        rotateX,
        rotateY,
        transformStyle:"preserve-3d",
        
    }}
    className='relative h-110 w-full sm:w-72 xl:w-84 2xl:w-104  rounded-xl bg-gradient-to-br from-blue-300 to white-300'>
      
      <div
       style={{
       
        transform:"translateZ(90px)",
        transformStyle:"preserve-3d"
       }}
      className='absolute inset-5 flex flex-col items-center rounded-xl bg-[#150722] border border-purple-600 shadow-md hover:shadow-[0px_0px_10px_#432d7b]'>

    <img className='h-30 w-30' src={image} alt="" />
      <h2 className='text-white m-1 text-center text-2xl'>{title}</h2>
      <h2 className='text-purple-500 m-1 text-center font-semibold text-lg'>Initial Funding Offered: ${funding}</h2>
      <p className='text-slate-200 text-base m-1 text-center'>{description}</p>
      <div className='font-semibold flex p-1 text-center text-xl m-1 text-purple-500 text-wrap'><span><img className='h-8 w-8' src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/678a08bb798234106f88d71f_burning.png" alt="" /></span>Deadline approaching apply by:{deadline}</div>
      <CustomBtn2 text="View More details" />
      </div>
    </motion.div>
  )
}

export default Hover3DCard
