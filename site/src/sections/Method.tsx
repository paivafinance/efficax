import { useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll, useSpring } from 'motion/react'
import { Section } from '../components/Section'
import { method } from '../content/site'
import { cx } from '../lib/cx'
import s from './Method.module.css'

/** Régua verde que preenche com o scroll e liga os três passos. Scroll-linked, não parallax. */
export function Method() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 45%'] })
  // Mola sobre-amortecida (sem overshoot) só para suavizar o scroll em degraus.
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 32, mass: 0.6 })
  const [active, setActive] = useState(-1)
  const n = method.steps.length

  useMotionValueEvent(progress, 'change', (v) => {
    let idx = -1
    for (let i = 0; i < n; i++) if (v >= (i + 0.35) / n) idx = i
    setActive(idx)
  })

  return (
    <Section id={method.id} tone="sunken" label={method.eyebrow} title={method.title} intro={method.intro}>
      <div ref={ref} className={s.track}>
        <div className={s.rail} aria-hidden="true">
          <motion.div className={s.fill} style={{ scaleX: progress }} />
        </div>
        <ol className={s.steps}>
          {method.steps.map((st, i) => (
            <li key={st.n} className={cx(s.step, i <= active && s.active)}>
              <span className={s.node} aria-hidden="true" />
              <div className={cx('num', s.meta)}>
                <span className={s.n}>{st.n}</span>
                <span className={s.verb}>· {st.verb}</span>
              </div>
              <h3 className={s.title}>{st.title}</h3>
              <p className={s.text}>{st.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
