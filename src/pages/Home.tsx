import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Hero from '../sections/Hero'
import Problem from '../sections/Problem'
import Features from '../sections/Features'
import Areas from '../sections/Areas'
import Testimonials from '../sections/Testimonials'
import CrossPlatform from '../sections/CrossPlatform'
import CostBreakdown from '../sections/CostBreakdown'
import Pricing from '../sections/Pricing'
import HowItWorks from '../sections/HowItWorks'
import FAQ from '../sections/FAQ'
import FinalCTA from '../sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Features />
        <Areas />
        <Testimonials />
        <div className="flex flex-col gap-6 sm:gap-8 py-12 sm:py-16">
          <CrossPlatform />
          <CostBreakdown />
        </div>
        <Pricing />
        <HowItWorks />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
