import React from 'react'

const RewardsCard = (props) => {
    const{logo,text}=props
  return (
    <div className='  h-40 w-40 rounded-md shadow-[0px_1px_5px_0px_rgba(66,41,113,255,0.4) flex flex-col items-center p-2 bg-[#150722]'> 
      <img className='h-16 w-14 mt-4' src={logo} alt="" />
      <p className='text-white m-1 font-semibold text-center text-lg'>{text}</p>
    </div>
  )
}

export default RewardsCard
