import { Toaster } from 'sonner'
import './App.css'
import { Background } from './components/Background'
import { ContactSection } from './components/ContactSection'
import { ExperienceSection } from './components/ExperienceSection'
import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { PortfolioSection } from './components/PortfolioSection'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <main>
      <Toaster richColors theme={'system'} />
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
