import React from 'react'

const RewardsCard = (props) => {
    const{logo,text}=props
  return (
    <div className=' bg-gradient-to-t group from-[#AE98E7]/15 to-[#9275E0]/15 h-[230px] mt-[25px] border-2 border-violet-500 rounded-4xl w-[230px] ml-[10px] inset-0 flex flex-col items-center justify-center text-center hover:scale-[1] transition-all duration-300 ease-in-out shadow-[0_0_10px_rgba(139,92,246,0.4),0_0_30px_rgba(139,92,246,0.2)] hover:shadow-[0_0_20px_rgba(139,92,246,0.6),0_0_50px_rgba(139,92,246,0.3)]'>
    <div className=' flex flex-col item-center  w-full h-full hover:scale-[1.08] transition-all duration-300 ease-in-out items-center justify-center gap-4
    '> 
      <img className='h-14 w-16 mt-4 group-hover:scale-[1.12]' src={logo} alt="" />
      <p className='text-white m-1  font-semibold text-center text-lg'>{text}</p>
    </div>
    </div>
  )
}

export default RewardsCard
/*flex flex-col item-center  w-full h-full hover:scale-[1.12] transition-all duration-300 ease-in-out items-center justify-center gap-4*/

/*  bg-gradient-to-t from-[#AE98E7]/15 to-[#9275E0]/15 h-[230px] mt-[25px] border-2 border-violet-500 rounded-4xl w-[230px] ml-[10px] inset-0 flex flex-col items-center justify-center text-center hover:scale-[1] transition-all duration-300 ease-in-out shadow-[0_0_20px_rgba(139,92,246,0.4),0_0_40px_rgba(139,92,246,0.2)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6),0_0_60px_rgba(139,92,246,0.3)]*/