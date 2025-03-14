import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { navIcon } from '../icons'
import CustomBtn2 from './ui(old)/CustomBtn2'
import CustomButton from './Ui/CustomButton'
import { useNavigate } from 'react-router-dom'



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
  <Link to='challenge' duration={600} smooth={true} className='hover:text-purple-600 transition-all duration-200 cursor-pointer text-md font-normal m-2 p-1'>Ongoing Startupathon</Link>
  <Link to='completers' duration={600} smooth={true} className='hover:text-purple-600 transition-all duration-200 cursor-pointer text-md font-normal m-2 p-1'>Completed Startupathon</Link>
  <Link to='guide' duration={600} smooth={true} className='hover:text-purple-600 transition-all duration-200 cursor-pointer text-md font-normal m-2 p-1'>Startupathon Guide</Link>
  <Link to='howtowin' duration={600} smooth={true} className='hover:text-purple-600 transition-all duration-200 cursor-pointer text-md font-normal m-2 p-1'>How To Win</Link>
  <Link to='founders' duration={600} smooth={true} className='hover:text-purple-600 transition-all duration-200 cursor-pointer text-md font-normal m-2 p-1'>Mentor Network</Link>
  
</div  >
  <div className=' hidden lg:block ml-10'>
  <CustomButton text="Apply for Fellowship" path='challenge' icon='🚀' height={8}  />
  </div>
  </div>



<div className='right-0'>
<div onClick={openTopBar} className='bg-purple-700 h-12 w-12 lg:hidden  rounded-full p-1 flex justify-center items-center cursor-pointer'>
  <button className='cursor-pointer'>{navIcon}</button>
</div>
</div>

 
</div>

{
  openNav && <div className={`fixed w-full bg-black flex flex-col items-center opacity-100 transition-transform duration-900 ease-in-out ${openNav ? 'translate-y-0' : '-translate-y-full'}`}>
  <Link to='challenge' duration={600} smooth={true} className=' hover:text-white text-purple-600 transition-all duration-200 cursor-pointer text-lg font-normal m-2 p-1'>Ongoing Startupathon</Link>
  <Link to='completers' duration={600} smooth={true}  className=' hover:text-white text-purple-600 transition-all duration-200 cursor-pointer text-lg font-normal m-2 p-1'>Completed Startupathon</Link>
  <Link to='guide' duration={600} smooth={true} className=' hover:text-white text-purple-600 transition-all duration-200 cursor-pointer text-lg font-normal m-2 p-1'>Startupathon Guide</Link>

  <Link to='founders' duration={600} smooth={true} className=' hover:text-white text-purple-600 transition-all duration-200 cursor-pointer text-lg font-normal m-2 p-1'>Mentor Network</Link>
  
  <button onClick={navigate('/fellowship')} className='w-[200px] h-10 rounded-lg text-center p-1 mb-4 bg-purple-800 hover:bg-purple-600 transition-all duration-400 cursor-pointer shadow-[0_0_15px_rgba(138,43,226,0.9)] text-white text-md font-semibold'>Apply For Fellowship</button>

  </div>
}
</div>
  )
}

export default Navbar
