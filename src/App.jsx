
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import FellowShipPage from './pages/FellowShipPage'
import CompletedPage from './pages/CompletedPage'
import ChallengePage from './pages/ChallengePage'
import FounderPage from './pages/FounderPage'
import HowToWin from './pages/HowToWin'





function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='/' element={<HomePage/>} />
      <Route path='/fellowship' element={<FellowShipPage/>} />
      <Route path='/completed/:completedId' element={<CompletedPage/>} />
      <Route path='/challenge/:challengeId' element={<ChallengePage/>} />
      <Route path='/founder/:founderId' element={<FounderPage/>} />
      <Route path='/howtowin' element={<HowToWin/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
