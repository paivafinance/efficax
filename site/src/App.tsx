import { MotionConfig } from 'motion/react'
import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { StatsBand } from './sections/StatsBand'
import { Problem } from './sections/Problem'
import { Services } from './sections/Services'
import { Method } from './sections/Method'
import { Why } from './sections/Why'
import { About } from './sections/About'
import { CTA } from './sections/CTA'
import { Footer } from './sections/Footer'

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main id="top">
        <Hero />
        <StatsBand />
        <Problem />
        <Services />
        <Method />
        <Why />
        <About />
        <CTA />
      </main>
      <Footer />
    </MotionConfig>
  )
}
