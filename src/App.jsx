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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        <Navbar/>
        <TopSection/>
        <RewardsSection />
        <ChallengeSection/>
        <GuideSection/>
        <HiringProcessSection/>

        <CompletersSection />
        <FoundersSection />
        <SubscribeSection />
       </div>
       </>
  )
}

export default App
