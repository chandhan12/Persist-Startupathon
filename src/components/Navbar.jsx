import React, { useState } from 'react'

import { navIcon } from '../icons'
import CustomBtn2 from './ui(old)/CustomBtn2'
import CustomButton from './Ui/CustomButton'
import { Link, useNavigate } from 'react-router-dom'



const Navbar = () => {
  const [openNav,setOpenNav]=useState(false)
  const navigate=useNavigate()

  const openTopBar=()=>{
    setOpenNav(!openNav)
  }
  return (
    <div className='transition-all duration-300'>
    <div id='nav' className='h-[80px] w-full px-10 flex bg-[#0A0A0A] justify-between items-center fixed top-0 left-0  z-50'>
  <div>
    <img className="h-36 w-36" src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/678a14a9d3a398bc1e9633b3_Persist%20Startupathon%20White.svg" alt="Logo" />
  </div>
  <div className='flex'>
  <div className='p-2 text-white hidden lg:block '>
  <a href='#challenge' duration={600} smooth={true} className='hover:text-purple-600 transition-all duration-200 cursor-pointer text-md font-normal m-2 p-1'>Ongoing Startupathon</a>
  <a href='#completers' duration={600} smooth={true} className='hover:text-purple-600 transition-all duration-200 cursor-pointer text-md font-normal m-2 p-1'>Completed Startupathon</a>
  <a href='#guide' duration={600} smooth={true} className='hover:text-purple-600 transition-all duration-200 cursor-pointer text-md font-normal m-2 p-1'>Startupathon Guide</a>
  <a href='#howtowin' duration={600} smooth={true} className='hover:text-purple-600 transition-all duration-200 cursor-pointer text-md font-normal m-2 p-1'>How To Win</a>
  <a to='#founders' duration={600} smooth={true} className='hover:text-purple-600 transition-all duration-200 cursor-pointer text-md font-normal m-2 p-1'>Mentor Network</a>
  
</div  >
  <div className=' hidden lg:block ml-10'>
 
 <Link to={'/fellowship'}>
     <div className={`bg-gradient-to-b from-[#AE98E7] to-[#805ED9] flex py-auto  h-[44px] w-[215px] justify-center items-center cursor-pointer  px-2 rounded-lg`} >
       <p className='text-[16px] font-[400]  text-white m-1 '>Apply for Fellowship</p>
       <p className='m-1'>🚀</p>
     </div>
     </Link>
  </div>
  </div>



<div className='right-0'>
<div onClick={openTopBar} className='bg-purple-700 h-12 w-12 lg:hidden  rounded-full p-1 flex justify-center items-center cursor-pointer'>
  <button className='cursor-pointer'>{navIcon}</button>
</div>
</div>

 
</div>


</div>
  )
}

export default Navbar
