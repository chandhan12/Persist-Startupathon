import React from 'react'
import { Link } from 'react-scroll'


const Navbar = () => {
  return (
    <div id='nav' className='h-20 w-full px-10 flex justify-between items-center fixed top-0 left-0 bg-black z-50'>
  <div>
    <img className="h-36 w-36" src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/678a14a9d3a398bc1e9633b3_Persist%20Startupathon%20White.svg" alt="Logo" />
  </div>
  <div className='p-2 text-white hidden md:block'>
    <Link className='hover:text-purple-600 transition-all duration-200 cursor-pointer text-lg font-normal m-2 p-1'>Ongoing Startupathon</Link>
    <Link className='hover:text-purple-600 transition-all duration-200 cursor-pointer text-lg font-normal m-2 p-1'>Completed Startupathon</Link>
    <Link className='hover:text-purple-600 transition-all duration-200 cursor-pointer text-lg font-normal m-2 p-1'>Startupathon Guide</Link>
    <Link className='hover:text-purple-600 transition-all duration-200 cursor-pointer text-lg font-normal m-2 p-1'>How To Win</Link>
    <Link className='hover:text-purple-600 transition-all duration-200 cursor-pointer text-lg font-normal m-2 p-1'>Mentor Network</Link>
    <button className='w-[200px] h-10 rounded-lg text-center p-1 bg-purple-800 hover:bg-purple-600 transition-all duration-400 cursor-pointer shadow-[0_0_15px_rgba(138,43,226,0.9)] text-white text-md font-semibold'>Apply For Fellowship</button>
  </div>
</div>

  )
}

export default Navbar
