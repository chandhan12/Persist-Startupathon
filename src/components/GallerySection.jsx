import React from 'react'
import galleryimg1 from '../assets/galleryimg1.png'
import galleryimg2 from '../assets/galleryimg2.png'
import galleryimg3 from '../assets/galleryimg3.png'
import galleryimg4 from '../assets/galleryimg4.png'
import LetterByLetter from './LetterByLetter'

const GallerySection = () => {
  return (
    <div className='flex justify-center items-center mt-10'>
      <div className='w-[1300px] h-[640px] flex flex-col gap-4'>
        <div className='flex gap-2'>
            <div className='h-[223px] w-[540px]  flex justify-center flex-col items-center'>
           <div className='flex items-center'>
           <LetterByLetter/> <h2 className='text-white text-[64px] font-sans font-[700] mx-1 md:m-2'>with </h2>
           </div>
            <h2 className="text-white text-[64px] font-sans font-[700] mx-1 md:m-2">  
               Startupathon
              <br />
            </h2>
           
            </div>
            <div  className='w-[412px] h-[276px] hover:scale-103 transition-all duration-300 cursor-pointer m-2'>
                <img src={galleryimg1} className='h-full w-full grayscale hover:grayscale-0  rounded-lg' alt="" />
            </div>
            <div className='w-[322px] h-[276px] hover:scale-103 transition-all duration-300 cursor-pointer m-2'>
                <img src={galleryimg2} className='h-full w-full grayscale hover:grayscale-0 rounded-lg' alt="" />
            </div>
        </div>
        <div className='flex gap-2'>
            <div  className='w-[442x] h-[332px] hover:scale-103 transition-all duration-300 cursor-pointer m-2'>
                <img src={galleryimg3} className='h-full w-full grayscale hover:grayscale-0  rounded-lg' alt="" />
            </div>
            <div className='w-[845px] h-[332px] hover:scale-103 transition-all duration-300 cursor-pointer m-2'>
                <img src={galleryimg4} className='h-full w-full grayscale hover:grayscale-0 rounded-lg' alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default GallerySection
