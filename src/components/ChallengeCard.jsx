import React from 'react'

const ChallengeCard = (props) => {
    const {title,image,funding,description,deadline}=props
  return (
    <div className='col-span-1 m-2 mr-4 lg:mr-2 h-105 hover:bg-black transition-all cursor-pointer duration-200 border-purple-600 border w-full sm:w-72  lg:w-auto  rounded-2xl hover:shadow-[0px_0px_10px_#432d7b]
 flex flex-col items-center p-4 bg-[#150722]'>
      <img className='h-30 w-30' src={image} alt="" />
      <h2 className='text-white m-1 text-center text-2xl'>{title}</h2>
      <h2 className='text-purple-500 m-1 text-center font-semibold text-lg'>Initial Funding Offered: $ {funding}</h2>
      <p className='text-slate-200 text-base m-1 text-center'>{description}</p>
      <p className='font-semibold text-center text-xl m-1 text-purple-500 text-wrap'>Dealline approaching apply by:{deadline}</p>
      <button className='w-full m-2 h-10 rounded-lg text-center p-1 bg-purple-800 hover:bg-purple-600 transition-all duration-400 cursor-pointer shadow-[0_0_15px_rgba(138,43,226,0.9)] text-white text-md font-semibold'>View Challenge Details</button>
    </div>
  )
}

export default ChallengeCard
