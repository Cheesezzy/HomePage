import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Footer from './components/Footer'
import Header from './components/Header'
import Top from './components/Top'
import CarouselSection from './pageSections/CarouselSection'
import CircleSection from './pageSections/CircleSection'
import HeroSection from './pageSections/HeroSection'
import Loop from './pageSections/Loop'
import RecentProjectSection from './pageSections/RecentProjectSection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ width:"100%"}}>
        <Top />
        <Header/>
        <HeroSection />
        <CircleSection />
        <CarouselSection />
        <RecentProjectSection />
        <Loop/>
        <Footer/>
    </div>
  )
}

export default App
