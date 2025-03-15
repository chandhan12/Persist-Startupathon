import React from 'react'
import { exlametaryIcon } from '../icons'
import { useNavigate } from 'react-router-dom'

const ChallengeCard = (props) => {
    const {title,image,funding,description,deadline,id}=props

    const navigate=useNavigate()

    const handleNav=()=>{
      navigate(`/challenge/${id}`)
    }
  return (
   <div className=' mt-4  h-[500px] w-[400px] transition-all duration-300 p-4  border-2 border-violet-400 rounded-4xl flex flex-col m-1  bg-gradient-to-t from-[#AE98E7]/25 to-[#9275E0]/25 hover:bg-gradient-to-t hover:from-[#9275E0] hover:to-[#AE98E7] group hover:shadow-[0_0_30px_rgba(167,139,250,0.7),0_0_60px_rgba(167,139,250,0.4)] hover:scale-[1.02]   items-center '>
      <img className='h-28 w-35 m-2' src={image} alt={title} />
      <h2 className='text-white m-3 text-center font-bold text-2xl'>{title}</h2>
      <div className='h-8 w-34 rounded-lg p-2 m-3 flex flex-row justify-center items-center  border border-neutral-400 bg-gradient-to-b from-neutral-600 to-[#1f1f1f] '>
         <p className='text-[#4EB400] font-semibold text-md mx-auto'>IFO : ${funding} </p>
         <p className='text-white font-semibold'>{exlametaryIcon}</p>
      </div>
      <p className='text-white text-md text-wrap mx-5 my-3 '>{description}</p>

      <button onClick={handleNav} className='h-[40px] w-full cursor-pointer bottom-5 m-3 bg-gradient-to-b from-[#AE98E7] to-[#805ED9] rounded-xl text-white  text-lg group-hover:bg-white group-hover:text-[#805ED9] group-hover:border-white group-hover:border group-hover:bg-none'>
        View Details
      </button>
      <div className=' flex p-1 text-center bottom-2  text-md m-2 text-white text-wrap'><span><img className='h-5 w-5' src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/678a08bb798234106f88d71f_burning.png" alt="" /></span>Deadline approaching apply by: {deadline}</div>
   </div>
  )
}

export default ChallengeCard


/*border-2 border-violet-400 rounded-4xl p-4 md:p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(167,139,250,0.7),0_0_60px_rgba(167,139,250,0.4)] hover:scale-[1.02] hover:border-white cursor-[url('/normal.cur'),pointer] flex flex-col group bg-gradient-to-t from-[#AE98E7]/25 to-[#9275E0]/25 hover:bg-gradient-to-t hover:from-[#9275E0] hover:to-[#AE98E7] */


/*w-full hover:ring-2 hover:ring-violet-400 hover:ring-offset-2 hover:ring-offset-white dark:hover:ring-offset-black bg-gradient-to-t from-[#805ED9] to-[#AE98E7] text-white py-2 md:py-3 rounded-xl hover:opacity-90 transition-all duration-300 mb-3 text-sm md:text-base cursor-[url('/normal.cur'),pointer] group-hover:bg-white group-hover:text-[#805ED9] group-hover:border-white group-hover:border group-hover:bg-none */