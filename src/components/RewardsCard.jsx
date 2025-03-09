import React from 'react'

const RewardsCard = (props) => {
    const{logo,text}=props
  return (
    <div className='  w-[250px] h-[244px] rounded-4xl border border-purple-600 shadow-[2px_2px_2px_#906CFF] hover:bg-[#1e1426] transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center justify-center p-2 
    bg-gradient-to-b from-[#3C3C3C] to-[#1C1C1C]'> 
      <img className='h-14 w-16 mt-4' src={logo} alt="" />
      <p className='text-white m-1 font-semibold text-center text-lg'>{text}</p>
    </div>
  )
}

export default RewardsCard
