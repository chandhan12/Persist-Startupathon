import React from 'react'
import galleryimg1 from '../assets/galleryimg1.png'
import galleryimg2 from '../assets/galleryimg2.png'
import galleryimg3 from '../assets/galleryimg3.png'
import galleryimg4 from '../assets/galleryimg4.png'

const GallerySection = () => {
  return (
    <div className='flex justify-center items-center mt-10'>
      <div className='w-[1300px] h-[640px] flex flex-col gap-4'>
        <div className='flex gap-2'>
            <div className='h-[223px] w-[540px] flex justify-center items-center'>
            <h2 className="text-white text-2xl md:text-6xl font-sans font-semibold mx-1 md:m-2">
             
              <span className="bg-gradient-to-r from-purple-400 to-purple-500 text-transparent bg-clip-text font-bold">
                Explore, Innovate,
                <br />and Lead
              </span>{" "}
              with Startupathon
              <br />
            </h2>
           
            </div>
            <div  className='w-[412px] h-[276px]'>
                <img src={galleryimg1} className='h-full w-full rounded-lg' alt="" />
            </div>
            <div className='w-[322px] h-[276px]'>
                <img src={galleryimg2} className='h-full w-full rounded-lg' alt="" />
            </div>
        </div>
        <div className='flex gap-2'>
            <div  className='w-[442x] h-[332px]'>
                <img src={galleryimg3} className='h-full w-full  rounded-lg' alt="" />
            </div>
            <div className='w-[845px] h-[332px]'>
                <img src={galleryimg4} className='h-full w-full rounded-lg' alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default GallerySection
