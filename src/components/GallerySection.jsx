import React from 'react'
import galleryimg1 from '../assets/galleryimg1.png'
import galleryimg2 from '../assets/galleryimg2.png'

const GallerySection = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='w-[1296px] h-[619px]'>
        <div className='flex gap-2'>
            <div className='h-[223px] w-[540px]'>
                <h2>Explore innovate</h2>
            </div>
            <div  className='w-[412px] h-[276px]'>
                <img src={galleryimg1} className='h-full w-full' alt="" />
            </div>
            <div className='w-[322px] h-[276px]'>
                <img src={galleryimg2} className='h-full w-full' alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default GallerySection
