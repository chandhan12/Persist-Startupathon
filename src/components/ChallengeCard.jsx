import React from 'react'
import { exlametaryIcon } from '../icons'

const ChallengeCard = (props) => {
    const {title,image,funding,description,deadline}=props
  return (
   <div className=' bg-[#2B2B2B] h-[500px] w-[356px]  rounded-4xl border border-purple-600 flex flex-col m-1    items-center '>
      <img className='h-28 w-35 m-2' src={image} alt={title} />
      <h2 className='text-white m-3 text-center font-bold text-2xl'>{title}</h2>
      <div className='h-8 w-34 rounded-lg p-2 m-3 flex flex-row justify-center items-center  border border-neutral-400 bg-gradient-to-b from-neutral-600 to-[#1f1f1f] '>
         <p className='text-white font-semibold text-md mx-auto'>IFO : ${funding} </p>
         <p className='text-white font-semibold'>{exlametaryIcon}</p>
      </div>
      <p className='text-white text-md text-wrap mx-5 my-3 '>{description}</p>

      <button className='h-[40px] w-[308px] bottom-5 m-3 bg-gradient-to-b from-[#AE98E7] to-[#805ED9] rounded-xl text-white  text-lg'>
        View Details
      </button>
      <div className=' flex p-1 text-center bottom-2  text-md m-2 text-white text-wrap'><span><img className='h-5 w-5' src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/678a08bb798234106f88d71f_burning.png" alt="" /></span>Deadline approaching apply by: {deadline}</div>
   </div>
  )
}

export default ChallengeCard


/*

 <div className='col-span-1 m-2 mr-4 lg:mr-2 h-105 hover:bg-[#0a0111] hover:-translate-y-1.5 transition-all cursor-pointer duration-300 border-purple-600 border w-full sm:w-72 xl:w-84 2xl:w-104  rounded-2xl hover:shadow-[0px_0px_10px_#432d7b]
 flex flex-col items-center p-4 bg-[#150722]'>
      <img className='h-30 w-30' src={image} alt="" />
     
      <h2 className='text-purple-500 m-1 text-center font-semibold text-lg'>Initial Funding Offered: $ {funding}</h2>
      <p className='text-slate-200 text-base m-1 text-center'>{description}</p>
      
      <button className='w-full m-2 h-10 rounded-lg text-center p-1 bg-purple-800 hover:bg-purple-600 transition-all duration-400 cursor-pointer shadow-[0_0_15px_rgba(138,43,226,0.9)] text-white text-md font-semibold'>View Challenge Details</button>
    </div>

    */