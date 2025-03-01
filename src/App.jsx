import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import TopSection from './components/TopSection'
import RewardsSection from './components/RewardsSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        <Navbar/>
        <TopSection/>
        <RewardsSection />
       </div>
       </>
  )
}

export default App
