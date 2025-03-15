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
import DoubleDiv from '../components/doubleDiv'
import CardsInView from '../components/CardsInView'
import SlideUpText from '../componentPrac/SlideUpText'
import SlideUpTextWrapper from '../componentPrac/SlideUpText'
import ProcessSteps from '../components/CardsInView'
import TeamMarquee from '../componentPrac/TeamMarquee'
import FireCanvas from '../components/FireCanvas'
import ChallengeSlider from '../components/ChallengeSlider'
import ChallengeSteps from '../components/ChallengeSteps'



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
   
   {/* <SubscribeSection /> */}
   <DoubleDiv />
   {/* <InfiniteCarousel/> */}
    {/* <ConicDiv />  */}
   {/* 
   <RewardsCarousel />
    <ChallengeSection/>
    <TimeLine/>
    <HiringProcessSection/>
   
    <CompletersSection />
    <FoundersSection />
    <SubscribeSection /> */}
   
   </div>
   </>
  )
}

export default HomePage
