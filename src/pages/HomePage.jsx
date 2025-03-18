import React from 'react'
import HeroSection from '../components/HeroSection'
import RewardsSection from '../components/RewardsSection'
import ChallengeSection from '../components/ChallengeSection'
import GuideSection2 from '../components/GuideSection2'
import GallerySection from '../components/GallerySection'
import VideoCarousel from '../components/HiringSection2'
import ProjectCarousel from '../components/ProjectCaurosal'
import FellowshipCard from '../components/FellowshipCard'
import FoundersProject from '../components/FounderProject'


import DoubleDiv from '../components/DoubleDiv'



const HomePage = () => {
  return (
    <>
    <div className=''>
    
    <HeroSection />
    <RewardsSection />
   
   <ChallengeSection/>
   <GuideSection2/>
   <GallerySection/>
   <VideoCarousel/>
   <ProjectCarousel/>
   
   <FellowshipCard/>
   <FoundersProject/>
   
   
   <DoubleDiv />
  
   
   </div>
   </>
  )
}

export default HomePage
