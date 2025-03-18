
import React from 'react'

const RewardsCard = (props) => {
    const{logo,text}=props
  return (
    <div className='h-[244px] w-[250px] p-[2px] rounded-[24px] bg-gradient-to-b from-[#D1AFFF] to-[#906CFF]'>
      <div className='bg-[#1f1a2a] h-full w-full    rounded-[24px]   inset-0 flex flex-col items-center justify-center text-center hover:scale-[1] transition-all duration-300 ease-in-out shadow-[0_0_10px_rgba(139,92,246,0.4),0_0_30px_rgba(139,92,246,0.2)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6),0_0_60px_rgba(139,92,246,0.3)]'>
    <div className=' flex flex-col item-center  w-[202px] h-[148px]  transition-all duration-300 ease-in-out items-center justify-center gap-4
    '> 
      <img className='h-[72px] w-[72px] mt-4 ' src={logo} alt="" />
      <p className='text-white m-1 w-[full] h-auto  font-semibold text-center text-lg'>{text}</p>
    </div>
    </div>
    </div>
  )
}

export default RewardsCard
/*flex flex-col item-center  w-full h-full hover:scale-[1.12] transition-all duration-300 ease-in-out items-center justify-center gap-4*/

/*  bg-gradient-to-t from-[#AE98E7]/15 to-[#9275E0]/15 h-[230px] mt-[25px] border-2 border-violet-500 rounded-4xl w-[230px] ml-[10px] inset-0 flex flex-col items-center justify-center text-center hover:scale-[1] transition-all duration-300 ease-in-out shadow-[0_0_20px_rgba(139,92,246,0.4),0_0_40px_rgba(139,92,246,0.2)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6),0_0_60px_rgba(139,92,246,0.3)]*/