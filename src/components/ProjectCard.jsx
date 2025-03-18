
import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import linkedIcon from '../assets/linkedIcon.png'

export const ProjectCard = ({ project }) =>{
const navigate=useNavigate()

  
const handleCompleter=()=>{
  
  navigate(`completed/${project._id}`)
}

  
  return (
   
<div className='w-[413px] h-[390px] p-[1px] rounded-[12px] bg-gradient-to-b from-[#D1AFFF] to-[#906CFF]'>
<div className=" h-full w-full flex-shrink-0 px-4 bg-[#1f1d31]   rounded-[12px] shadow-lg overflow-hidden  transform transition-all duration-300 hover:shadow-2xl ">
    <div className='flex justify-center items-center'>
    <div className="flex h-[48px] w-[176px]  justify-center m-3 gap-[17px] items-center">
      <img src={project.image} className="h-[40px] w-[40px]" alt={project.project} />
      <h2
      style={{fontFamily:"Bricolage Grotesque"}}
      className="text-[25px] font-[700] leading-[140%] text-white">{project.project}</h2>
    </div>
    </div>
    
    <div className="h-[2px] bg-[#FFFFFF40]/25 w-[342px] mx-auto mt-4 rounded-xl" />
  <div className='flex justify-center'>
  
  <div className='h-[200px] w-[349px] flex flex-col gap-[16px]'>
    <div className="flex gap-3 h-[113px] w-[349px] justify-center items-center">
      <img 
        src={project.profilePicture} 
        alt={project.profile} 
        className="h-[90px] w-[90px] rounded-full border border-white object-cover"
      />
      <div className="flex flex-col justify-center gap-1 h-[113px] w-[240px]">
         <div className='flex gap-[6px]  items-center'>
         <h2
         style={{fontFamily:"Bricolage Grotesque"}}
         className="text-[#FFFFFF] text-[20px] font-[700] font-[Bricolage Grotesque leading-[130%]">{project.profile}</h2>
         <img src={linkedIcon} alt="linkedIcon" className='h-[20px] w-[20px] cursor-pointer' />
         </div>
        <p 
        style={{fontFamily:"Inter"}}
        className="text-[#FFFFFF] text-[14px] font-[500]">{project.position}</p>
        <div className="bg-gradient-to-b from-[#565656] to-[#1C1C1C] border border-[#FFFFFF]/25   rounded-[8px] h-[28px] w-[136px] flex items-center justify-center gap-[4px] font-semibold">
            <span 
            style={{fontFamily:"Inter"}}
            className='text-[12px] font-[700] leading-[150%] text-[#4EB400]'>IFO : ${project.funding} </span> <AlertCircle className='h-[14px] w-[14px] text-[12px] font-[700] leading-[150%] text-[#4EB400]' />
        </div>
      </div>
    </div>
    
    <div className="px-2">
      <p
      style={{fontFamily:"Inter"}}
      className="text-[14px] font-[500] leading-[150%] text-[#FFFFFF] line-clamp-3">{project.description}</p>
      
    </div>
    </div>
    
</div>
<div className='flex justify-center'>
<button
style={{fontFamily:"Inter"}}
onClick={handleCompleter} className="cursor-pointer text-[14px] font-[500] leading-[150%] rounded-[12px] h-[40px] mt-[10px] w-[340px] bg-gradient-to-b from-[#AE98E7] to-[#805ED9] text-white hover:opacity-90 transition-opacity">
        View Details
      </button>
</div>
  </div>
</div>

  )

}


/**bg-[#1f1d31] */