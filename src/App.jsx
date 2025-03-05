
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
import ConicDiv from './components/ui/ConicDiv'




function App() {
  

  return (
    <>
      <div className=''>
        <Navbar/>
        <HeroSection />
       <LoomVid/>
       <RewardsCarousel />
        <ChallengeSection/>
        <TimeLine/>
        <HiringProcessSection/>
        <ConicDiv /> 
        <CompletersSection />
        <FoundersSection />
        <SubscribeSection />
        <Footer/>
       </div>
       </>
  )
}

export default App
