import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Hero from '../sections/Hero'
import SocialProof from '../sections/SocialProof'
import Problem from '../sections/Problem'
import Features from '../sections/Features'
import BonusFeatures from '../sections/BonusFeatures'
import Testimonials from '../sections/Testimonials'
import CostBreakdown from '../sections/CostBreakdown'
import Pricing from '../sections/Pricing'
import FAQ from '../sections/FAQ'
import FinalCTA from '../sections/FinalCTA'

type HomeProps = {
  variant?: 'default' | 'humor'
}

export default function Home({ variant = 'default' }: HomeProps) {
  const isHumor = variant === 'humor'

  return (
    <>
      <Nav />
      <main>
        <Hero variant={variant} />
        <SocialProof />
        <Problem variant={variant} />
        <Features variant={variant} />
        {isHumor ? <BonusFeatures /> : null}
        <Testimonials />
        <div className="flex flex-col gap-6 sm:gap-8 py-12 sm:py-16">
          <CostBreakdown variant={variant} />
        </div>
        <Pricing variant={variant} />
        <FAQ />
        <FinalCTA variant={variant} />
      </main>
      <Footer />
    </>
  )
}
