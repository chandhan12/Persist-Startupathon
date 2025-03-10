import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gradient-to-b from-[#2F2F2F00] to-[#01010140] pb-2 h-auto w-full flex justify-center items-center gap-2'>
       <div className='flex md:flex-row flex-col gap-10 p-2 '>
       <div className='w-auto cursor-pointer ml-12'>
            <img className='h-44 w-60' src='https://cdn.prod.website-files.com/623ae64112adcf772da9687e/678a14a9d3a398bc1e9633b3_Persist%20Startupathon%20White.svg' alt="" />
            <p className='text-slate-200 text-sm text-wrap'>We partner with entrepreneurs and businesses to help scale and grow their ideas. With a diverse team skilled in every sector there is no business we can not help get a leg up.</p>

           
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center'>
            <div className='flex flex-col cursor-pointer p-2 items-center md:items-start'>
            <h1 className='text-white'>Quick Links</h1>
            <p className='text-slate-300 hover:text-purple-600'>Home</p>
            <p className='text-slate-300 hover:text-purple-600'>Inverstor Application</p>
            <p className='text-slate-300 hover:text-purple-600'>Job Application</p>
            <p className='text-slate-300 hover:text-purple-600'>Applyto Startup Accelerator </p>
            <p className='text-slate-300 hover:text-purple-600'>Creer Accelerator Program</p>
            <p className='text-slate-300 hover:text-purple-600'>Our Team</p>
            </div>
            <div className='flex flex-col cursor-pointer items-center md:items-start  p-2'>
            <h1 className='text-white'>Legal</h1>
            <p className='text-slate-300 hover:text-purple-600'>Terms and Services</p>
            <p className='text-slate-300 hover:text-purple-600'>Privacy Policy</p>
            <p className='text-slate-300 hover:text-purple-600'>Decentralized Intelligence Agency</p>
           
            </div>
        </div>
      
       </div>
    </div>
  )
}

export default Footer
