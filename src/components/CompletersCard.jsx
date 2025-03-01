import React from 'react'

const CompletersCard = (props) => {
    const {project,image,profile,position,description,funding,profilePicture}=props
    return (
      <div className='col-span-1 m-2 mr-4 lg:mr-2 h-auto hover:shadow-[0px_0px_5px_#432d7b] hover:scale-105 transition-all cursor-pointer duration-100 border-purple-600 border w-full sm:w-72 xl:w-84 2xl:w-96  rounded-2xl 
   flex flex-col items-center p-4 bg-[#150722]'>
       <div className='flex justify-center items-center '>
       <h1 className='text-white text-xl font-bold'>{project}</h1>
       <img src={image} alt="" className='h-16 w-16' />
       </div>
       <div className='flex gap-1 p-2'>
        <div>
            <img className='h-64 w-3xl rounded-lg' src={profilePicture} alt="" />
        </div>
        <div className='flex flex-col m-1 p-2'>
            <h2 className='text-white text-xl font-semibold'>{profile}</h2>
            <p className='text-slate-400 text-lg m-1 '>{position}</p>
            <p className=' text-sm text-white'>{description}</p>
        </div>
       </div>
       <p className='text-white font-semibold'>Initial Funding Offered: <span className='font-bold text-lg text-purple-900'>${funding}</span></p>
        
        <button className='w-full m-2 h-10 rounded-lg text-center p-1 bg-purple-800 hover:bg-purple-600 transition-all duration-400 cursor-pointer shadow-[0_0_5px_rgba(138,43,226,0.9)] text-white text-md font-semibold'>View More Details</button>
      </div>
    )
}

export default CompletersCard
