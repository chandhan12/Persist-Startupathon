import React from 'react'
import { Link } from 'react-router-dom'


const CustomButton = (props) => {
    const {text,icon,path,height,width}=props
  return (
    <Link to={path}>
    <div className={`bg-gradient-to-b from-[#AE98E7] to-[#805ED9] flex py-auto  h-${height} w-${width} w-auto justify-center items-center cursor-pointer  px-2 rounded-lg`} >
      <p className='text-[16px] font-[400]  text-white m-1 '>{text}</p>
      <p className='m-1'>{icon}</p>
    </div>
    </Link>
  )
}

export default CustomButton
