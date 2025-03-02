import React from 'react'

const FellowShip = () => {
  return (
    <div className='flex justify-center'>
    <div className='flex flex-col  items-center  bg-[#1b0730] rounded-xl h-auto  w-3/4 mb-10'>
    <div className='m-2'>
        <h1 className='text-white text-4xl mt-3 font-bold text-center'>Got an idea of your own?</h1>
        <h2 className='text-slate-200 text-wrap text-center m-4  text-xl font-semibold'>We are always on the lookout for visionaries 
            with great startup ideas, ready to become successful founders. If that’s you, apply below for our Fellowship program</h2>
        <div className='flex justify-center mb-2'>
        <button className='w-[200px] h-10 rounded-lg text-center p-1 bg-purple-800 hover:bg-transparent transition-all duration-400 cursor-pointer shadow-[0_0_15px_rgba(138,43,226,0.9)] text-white text-md font-semibold'>Apply For Fellowship</button>
        </div>
    </div>
    </div>
    </div>
  )
}

export default FellowShip
