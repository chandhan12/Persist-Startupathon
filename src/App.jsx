import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
import { Button, MovingBorder } from './components/ui/movingBorder'
import { MovingBorderDemo } from './components/movingBorderDemo'
import CustomBtn from './components/ui/CustomBtn'

function App() {
  

  return (
    <>
      <div className=''>
        <Navbar/>
        <TopSection/>
        <RewardsSection />
        <ChallengeSection/>
        <GuideSection/>
        <HiringProcessSection/>
        <FellowShip />
        <CompletersSection />
        <FoundersSection />
        <SubscribeSection />
        <Footer/>
       </div>
       </>
  )
}

export default App
