
import './App.css'
import Navbar from './components/Navbar'
import ChallengeSection from './components/ChallengeSection'
import HiringProcessSection from './components/HiringProcessSection'
import SubscribeSection from './components/SubscribeSection'
import CompletersSection from './components/CompletersSection'
import FoundersSection from './components/FoundersSection'
import Footer from './components/Footer'

import HeroSection from './components/HeroSection'
import LoomVid from './components/LoomVid'

import TimeLine from './components/TimeLine'
import RewardsCarousel from './components/RewardsCaurosal'
import ConicDiv from './components/ui(old)/ConicDiv'
import NeonCard from './components/Ui/NeonCard'
import RewardsSection from './components/RewardsSection'
import ChallengeCard from './components/ChallengeCard'
import GuideSection2 from './components/GuideSection2'
import GallerySection from './components/GallerySection'




function App() {
  

  return (
    <>
      <div className=''>
        <Navbar/>
        <HeroSection />
        <RewardsSection />

       <ChallengeSection/>
       <GuideSection2/>
       <GallerySection/>
        {/* <ConicDiv />  */}
       {/* 
       <RewardsCarousel />
        <ChallengeSection/>
        <TimeLine/>
        <HiringProcessSection/>
       
        <CompletersSection />
        <FoundersSection />
        <SubscribeSection /> */}
        <Footer/>
       </div>
       </>
  )
}

export default App
