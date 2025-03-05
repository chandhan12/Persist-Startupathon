import React from 'react';
import { AnimatedCard } from './AnimatedCard';
import { Sparkles, Cloud, Moon, Sun, Star, Heart } from 'lucide-react';
import CustomBtn2 from './ui/CustomBtn2';

function Founders() {
  return (
    <div className="min-h-screen  py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Floating Dreams
          </h1>
          <p className="text-xl text-white/80">
            Where imagination takes flight
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         
            <AnimatedCard >
              
               <div className='flex justify-start'>
               <div className='flex justify-center items-center '>
               <h1 className='text-white text-xl font-bold'>meta verse</h1>
               <img src=" " alt="" className='h-16 w-16' />
               </div>
               </div>
               <div className='flex flex-col items-center'>
               <div className='flex gap-1 p-2'>
                <div>
            <img className='h-64 w-3xl rounded-lg' src=" " alt="" />
        </div>
        <div className='flex flex-col m-1 p-2'>
            <h2 className='text-white text-xl font-semibold'>chandhan</h2>
            <p className='text-slate-400 text-lg m-1 '>full stack developer</p>
            <div className='h-8 rounded-lg w-8 m-2 bg-purple-800 cursor-pointer'>
                <a href=" "><img  src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/66e81ea7c52c2eb1db6a973f_ico_soc-03.svg" alt="" /></a>
            </div>
            <p className=' text-sm text-white'>hello</p>
        </div>
       </div>
       <p className='text-white font-semibold'>Initial Funding Offered: <span className='font-bold text-lg text-purple-900'>$1000</span></p>
        
       <CustomBtn2 text="Apply For Fellowship" path='challenge'   />
        </div>
      
            </AnimatedCard>
         
        </div>

      </div>
    </div>
  );
}

export default Founders;
