import React from 'react'
import { exlametaryIcon } from '../icons'
import { useNavigate } from 'react-router-dom'
import { AlertCircle } from 'lucide-react'

const ChallengeCard = (props) => {
    const {title,image,funding,description,deadline,id}=props

    const navigate=useNavigate()

    const handleNav=()=>{
      navigate(`/challenge/${id}`)
    }
  return (
    
   <div className='relative mt-4  h-[500px] w-[370px] transition-all duration-300 p-4  border-2 border-violet-400 hover:border-white rounded-4xl flex flex-col m-1  bg-gradient-to-t from-[#AE98E7]/25 to-[#9275E0]/25 hover:bg-gradient-to-t hover:from-[#9275E0] hover:to-[#AE98E7] group hover:shadow-[0_0_30px_rgba(167,139,250,0.7),0_0_60px_rgba(167,139,250,0.4)] hover:scale-[1.02]   items-center '>
     <div className='flex flex-col justify-center items-center h-[102px] w-[152px]'>
     <img className='h-[105px] w-[105px] m-2' src={image} alt={title} />
     </div>
      <h2
      style={{ fontFamily: "Bricolage Grotesque" }}
      className='text-[#FFFFFF] m-3 text-center leading-[130%] font-[700] text-[32px]'>{title}</h2>
      <div className='h-8 w-34 rounded-lg p-2 m-1 flex flex-row justify-center items-center  border border-neutral-400 bg-gradient-to-b from-neutral-600 to-[#1f1f1f] '>
         <p className='text-[#00D400]  text-[12px] font-[700] mx-2'>IFO : ${funding} </p>
         <AlertCircle className='h-[14px] w-[14px] text-[12px] font-[700] leading-[150%] text-[#DDDDDD]' />
      </div>
      <p
      style={{ fontFamily: "Inter" }}
      className='text-[#FFFFFF] leading-[150%] text-center text-[16px] font-[400]  mx-5 mt-7 line-clamp-5 '>{description}</p>

      <button onClick={handleNav} className='h-[40px] w-[308px] cursor-pointer absolute bottom-15  bg-gradient-to-b from-[#AE98E7] to-[#805ED9] rounded-xl text-white  text-lg group-hover:bg-white group-hover:text-[#805ED9] hover:border-white hover:outline-2 transition-all duration-200 hover:outline-black group-hover:border-white group-hover:border group-hover:bg-none'>
        View Details
      </button>
      <div
      style={{fontFamily:"Inter"}}
       className=' flex p-1 absolute text-center items-center justify-center bottom-2  text-[10px] font-[500] m-2 text-white text-wrap'><span><img className='h-[22px] w-[22px]' src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/678a08bb798234106f88d71f_burning.png" alt="" /></span>Deadline approaching apply by: {deadline}</div>
   </div>
  )
}

export default ChallengeCard


