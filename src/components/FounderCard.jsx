import React from 'react'

const FounderCard = (props) => {
    const {name,profilePic,position,bio,highlights,linkedinUrl}=props
  return (
    <div className='col-span-1 m-2 mr-4 lg:mr-2 h-auto hover:shadow-[0px_0px_15px_#432d7b]  transition-all  duration-100 border-purple-600 border w-full sm:w-72 xl:w-84   rounded-2xl 
   flex flex-col  p-4 bg-[#0a0111]'>

    <img src={profilePic} className='h-36 w-full rounded-lg m-2' alt="" />

    <h2 className='text-white text-2xl text-left font-semibold m-1'>{name}</h2>

    <p className='text-slate-300 text-base m-1 '>{position}</p>
    <p className='text-sm  text-slate-200 my-5'>{bio}{highlights}</p>

    <div className='h-8 rounded-lg w-8 bg-purple-800 cursor-pointer'>
        <a href={linkedinUrl}><img  src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/66e81ea7c52c2eb1db6a973f_ico_soc-03.svg" alt="" /></a>
    </div>
      
      </div>
  )
}

export default FounderCard
