import Hero from './components/Hero'
import Values from './components/Values'
import Services from './components/Services'
import TargetMarket from './components/TargetMarket'
import Workflow from './components/Workflow'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-raleway bg-background">
      <Hero />
      <main>
        <Values />
        <Services />
        <TargetMarket />
        <Workflow />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
