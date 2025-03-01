import React from 'react'
import { Link } from 'react-scroll'

const CustomButton = (props) => {
    const{text,icon}=props
  return (
    <Link to='#nav'>
    <div className='w-96 md:w-auto p-2 flex h-15 rounded-lg text-center justify-center items-center bg-purple-800 hover:bg-purple-600 
      transition-all duration-400 cursor-pointer 
      shadow-[0_0_15px_rgba(138,43,226,0.9)] text-white text-md font-semibold'>
      <p className='cursor-poniter'>{text}</p>
     {/* <p className='font-semibold m-2'> {icon}</p> */}
     <img src={icon} className='h-6 w-6 m-2' alt="icon" />
    </div>
    </Link>
  )
}

export default CustomButton
