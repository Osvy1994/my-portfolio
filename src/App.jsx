import './App.css'
import { ExperienceSection } from './components/ExperienceSection'
import { HeroSection } from './components/HeroSection'
import { Navbar } from './components/Navbar'
import { PortfolioSection } from './components/PortfolioSection'

function App() {

  return (
    <main>
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <ExperienceSection />
    </main>
  )
}

export default App
