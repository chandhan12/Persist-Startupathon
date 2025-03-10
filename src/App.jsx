
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
import VideoCarousel from './components/HiringSection2'
import { InfiniteMovingCardsDemo } from './components/MovingCards'
import ProjectCarousel from './components/ProjectCaurosal'

import FellowshipCard from './components/FellowshipCard'
import FoundersProject from './components/FounderProject'
import DoubleDiv from './components/doubleDiv'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import FellowShipPage from './pages/FellowShipPage'





function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='/' element={<HomePage/>} />
      <Route path='/fellowship' element={<FellowShipPage/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
