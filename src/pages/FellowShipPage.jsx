import React from 'react';
import { motion } from 'framer-motion';
import tube from '../assets/tube.png';
 import invertedtube2 from '../assets/invertedtube2.png';
import NeonCard5 from '../components/Ui/NeonCard5';
import NeonCard4 from '../components/Ui/NeonCard4';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const FellowShipPage = () => {
  return (
    <div className='flex flex-col relative h-auto w-full items-center mt-20'>
      <div className='top-0 -left-[320px] absolute'>
        <img src={tube} className='h-[456px] w-[629px] opacity-[50%]' alt='' />
      </div>
      <motion.div className='bottom-[1%] right-0 absolute'>
        <img src={invertedtube2} className='h-[414px] w-[500px] opacity-[50%]' alt='' />
      </motion.div>
      
      <div className='h-[204px] w-[934px] mt-10 flex flex-col items-center'>
        <motion.div 
          variants={fadeUpVariants} 
          initial='hidden' 
          animate='visible'
          className='h-[138px] w-[809px] m-2'>
          <h2 className='text-white text-center text-2xl md:text-5xl font-sans font-semibold'>
            Are you ready to {' '}
            <span className='bg-gradient-to-r from-purple-400 to-purple-500 text-transparent bg-clip-text font-bold'>
              transform your vision
            </span>{' '}
            into reality?
          </h2>
        </motion.div>
        
        <motion.div 
          variants={fadeUpVariants} 
          initial='hidden' 
          animate='visible'
          transition={{ delay: 0.3 }}
          className='md:w-[934px] h-[56px] w-auto m-2'>
          <p className='text-white text-center text-sm md:text-[16px]'>
            Persist's fellowship is where we help dreamers dream, by giving them a salary and tons of support to follow their highest<br />
            goals and mission. Share your vision for the world with us!
          </p>
        </motion.div>
      </div>
      
      <div className='flex relative justify-center w-full'>
        <div className='h-[1050px] w-[1296px] rounded-[64px] p-[2px] bg-gradient-to-b from-[#D1AFFF]/50 to-[#906CFF]/50'>
          <div className='bg-[#0A0A0A] h-full w-full rounded-[64px] pt-10'>
            <div className='h-[1080px] w-[1163px] mx-[66px]'>
              {/* Form Fields */}
              {['Full Name', 'Email ID', 'Online profiles/Portfolios', 'Description of Your Idea', 'Deployed Link To Your Prototype (If Any)', 'Number of Team Members', 'Loom Video Link Introducing Yourself And Your Idea'].map((label, index) => (
                <div key={index} className='w-[1163px] p-2 m-2'>
                  <h2 className='text-white text-xl font-semibold m-1'>{label}</h2>
                  <input type='text' className='bg-transparent m-1 rounded-lg text-white border-2 border-[#575757] h-[40px] w-[1163px]' />
                  {label === 'Online profiles/Portfolios' && <p className='text-md text-[#DDDDDD] m-1'>(LinkedIn, Twitter, YouTube, Facebook, GitHub, Pinterest, or Your Own Site)</p>}
                  {label === 'Loom Video Link Introducing Yourself And Your Idea' && <p className='text-md text-[#DDDDDD] m-1'>(Please include your introduction, explain your interest in this fellowship, why you are the ideal candidate, and how your project will create an impact)</p>}
                </div>
              ))}
              <button className='h-[60px] w-[200px] bg-gradient-to-b from-[#D1AFFF] to-[#906CFF] text-white rounded-xl cursor-pointer m-1 font-semibold text-md'>Submit Application</button>
            </div>
          </div>
        </div>
        
        <div className='absolute top-0 right-8 -translate-y-90 opacity-[50%]'>
          <NeonCard5 />
        </div>
        <div className='absolute flex flex-col rotate-[180deg] top-[10%] left-0 opacity-[50%]'>
          <NeonCard4 />
        </div>
        <div className='absolute flex flex-col rotate-[180deg] top-[25%] left-0 opacity-[50%]'>
          <NeonCard5 />
        </div>
        <div className='absolute flex flex-col bottom-[-10%] right-8 opacity-[50%]'>
          <NeonCard5 />
        </div>
      </div>
    </div>
  );
};

export default FellowShipPage;
