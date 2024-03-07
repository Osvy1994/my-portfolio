import './App.css'
import { Background } from './components/Background'
import { ContactSection } from './components/ContactSection'
import { ExperienceSection } from './components/ExperienceSection'
import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { Navbar } from './components/Navbar'
import { PortfolioSection } from './components/PortfolioSection'

function App() {

  return (
    <main>
      <Background />
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default App
