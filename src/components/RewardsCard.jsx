import React from 'react'

const RewardsCard = (props) => {
    const{logo,text}=props
  return (
    <div className='  h-44 w-40 rounded-md shadow-[2px_2px_2px_#432d7b] hover:bg-[#1e1426] transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center p-2 bg-[#150722]'> 
      <img className='h-16 w-14 mt-4' src={logo} alt="" />
      <p className='text-white m-1 font-semibold text-center text-lg'>{text}</p>
    </div>
  )
}

export default RewardsCard
