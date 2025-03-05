
import './App.css'
import Navbar from './components/Navbar'
import TopSection from './components/TopSection'
import RewardsSection from './components/RewardsSection'
import ChallengeSection from './components/ChallengeSection'
import GuideSection from './components/GuideSection'
import HiringProcessSection from './components/HiringProcessSection'
import SubscribeSection from './components/SubscribeSection'
import CompletersSection from './components/CompletersSection'
import FoundersSection from './components/FoundersSection'
import Footer from './components/Footer'
import FellowShip from './components/FellowShip'
import WaterDropGrid from './components/ui/WaterDropGrid'
import HeroSection from './components/HeroSection'
import LoomVid from './components/LoomVid'
import ScrollFadeAnimation from './components/ScrollFadeAnimation'
import TimeLine from './components/TimeLine'
import RewardsCarousel from './components/RewardsCaurosal'
import ConicDiv from './components/ui/ConicDiv'
import Founders from './components/fouders2'
import { CardHoverEffectDemo } from './components/CardHoverEffectDemo'


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
