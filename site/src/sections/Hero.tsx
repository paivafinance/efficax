import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Button } from '../components/Button'
import { SectionLabel } from '../components/SectionLabel'
import { HeroDashboard } from './HeroDashboard'
import { hero } from '../content/site'
import { cx } from '../lib/cx'
import { cine, easeOut } from '../lib/motion'
import s from './Hero.module.css'

/** Título revelado palavra a palavra por máscara: o momento de abertura do site. */
function WordReveal({ text, highlight, delay = 0 }: { text: string; highlight: string; delay?: number }) {
  const words = text.split(' ')
  const hl = highlight.split(' ')
  let start = -1
  for (let i = 0; i + hl.length <= words.length; i++) {
    if (words.slice(i, i + hl.length).join(' ') === highlight) {
      start = i
      break
    }
  }
  return (
    <>
      {words.map((w, i) => (
        <span key={i}>
          <span className={s.mask}>
            <motion.span
              className={cx(s.word, start >= 0 && i >= start && i < start + hl.length && s.hl)}
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: easeOut, delay: delay + i * 0.045 }}
            >
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </>
  )
}

export function Hero() {
  return (
    <section id="hero" className={s.hero}>
      <div className={cx('wrap', s.grid)}>
        <div className={s.copy}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={cine(0.1, 0.6)}>
            <SectionLabel tone="onDark" animate={false}>
              {hero.eyebrow}
            </SectionLabel>
          </motion.div>

          <h1 className={s.title}>
            <WordReveal text={hero.title} highlight={hero.highlight} delay={0.25} />
          </h1>

          <motion.p
            className={s.lead}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={cine(0.75, 0.8)}
          >
            {hero.lead}
          </motion.p>

          <motion.div
            className={s.actions}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={cine(0.9, 0.8)}
          >
            <Button href="#contato" variant="onDark" size="lg" iconRight={<ArrowRight size={16} />}>
              {hero.primary}
            </Button>
            <Button href="#servicos" variant="secondaryOnDark" size="lg">
              {hero.secondary}
            </Button>
          </motion.div>
        </div>

        <motion.div
          className={s.panel}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={cine(0.55, 1)}
        >
          <HeroDashboard startAt={1.1} />
        </motion.div>
      </div>
    </section>
  )
}
