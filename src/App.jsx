import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import WhySplitKudi from './components/WhySplitKudi'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <WhySplitKudi />
      <CTA />
      <Footer />
    </div>
  )
}
