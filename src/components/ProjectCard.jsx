
import React from 'react';
import { AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ProjectCard = ({ project }) =>{
const navigate=useNavigate()

  
const handleCompleter=()=>{
  // console.log(project._id)
  navigate(`completed/${project._id}`)
}

  
  return (
  <div className="w-[413px] h-[380px] flex-shrink-0 mx-4 border bg-blend-saturation border-purple-700 bg-gradient-to-r from-[#333150] to-[#39334a] rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
    <div className="flex gap-3 justify-center m-5 items-center">
      <img src={project.image} className="h-10 w-10" alt={project.project} />
      <h2 className="text-xl font-semibold text-white">{project.project}</h2>
    </div>
    
    <div className="h-[0.02rem] bg-neutral-600 w-80 mx-auto mt-4 rounded-xl" />

    <div className="flex gap-3 ml-8 my-6">
      <img 
        src={project.profilePicture} 
        alt={project.profile} 
        className="h-20 w-20 rounded-full border border-white object-cover"
      />
      <div className="flex flex-col gap-2">
        <h2 className="text-white text-md font-semibold">{project.profile}</h2>
        <p className="text-white text-xs">{project.position}</p>
        <div className="bg-white text-black text-xs rounded-lg h-6 w-28 flex items-center justify-center gap-1 font-semibold">
          IFO : ${project.funding} <AlertCircle size={12} />
        </div>
      </div>
    </div>
    
    <div className="px-8">
      <p className="text-neutral-300 text-sm line-clamp-3">{project.description}</p>
      <button onClick={handleCompleter} className="cursor-pointer rounded-xl h-[40px] mt-7 w-full bg-gradient-to-b from-[#AE98E7] to-[#805ED9] text-white hover:opacity-90 transition-opacity">
        View Details
      </button>
    </div>
  </div>

  )

}
