import React, { useRef } from "react";
import image1 from "../assets/image1.png";
import Wavebg from "../assets/Wavebg.svg";
import { motion, useInView } from "framer-motion";
import ProcessSteps from "./CardsInView";

const GuideSection2 = () => {
  const h2Ref = useRef(null);
  const isInView = useInView(h2Ref, { once: true, margin: "-100px" });

  return (
    <div className="flex flex-col items-center p-4 relative mt-[128px]">
      {/* Background Image */}
      <motion.div className="absolute left-[-129px] top-0 -translate-y-30 opacity-[50%]">
        <img src={Wavebg} alt="Floating Top Element" className="h-[321px] w-[327px] opacity-[50%]" />
      </motion.div>

      {/* Heading with Fade-Up Effect */}
      <motion.h2
        ref={h2Ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{fontFamily:"Bricolage Grotesque"}}
        className="text-white text-[48px] font-[700] leading-[125%] "
      >
        Found an{" "}
        <span className="bg-gradient-to-b from-[#D1AFFF] to-[#906CFF] text-transparent bg-clip-text font-bold">
          idea
        </span>{" "}
        that matches your skills?
      </motion.h2>

      {/* Subtext */}
      <div className="h-[56px] w-[934px] m-2">
        <p
        style={{fontFamily:"Inter"}}
        className="text-white text-[16px] font-[500] leading-[150%] text-center ">
          Here's a simple guide on how the Startupathon process works once you find a project that suits your skills.
        </p>
      </div>

      {/* Process Steps */}
      <ProcessSteps />
    </div>
  );
};

export default GuideSection2;


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