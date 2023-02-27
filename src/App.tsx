import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import CircleSection from './pageSections/CircleSection'
import HeroSection from './pageSections/HeroSection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ width:"100%"}}>
        <Header/>
        <HeroSection />
        <CircleSection />
    </div>
  )
}

export default App
