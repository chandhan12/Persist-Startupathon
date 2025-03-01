import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import TopSection from './components/TopSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        <Navbar/>
        <TopSection/>
        
       </div>
       </>
  )
}

export default App
