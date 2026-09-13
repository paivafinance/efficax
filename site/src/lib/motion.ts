import type { Transition, Variants } from 'motion/react'

/* Curvas e durações espelham tokens/motion.css.
   Tier padrão = DS (420 ms, 8 px). Tier cinematográfico = só hero e números. */
export const easeStandard = [0.2, 0.6, 0.2, 1] as const
export const easeOut = [0.16, 1, 0.3, 1] as const

export const reveal: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.42, ease: easeStandard } },
}

export const stagger = (gap = 0.06, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
})

export const viewportOnce = { once: true, margin: '0px 0px -10% 0px' } as const

export const cine = (delay = 0, duration = 0.9): Transition => ({
  duration,
  delay,
  ease: easeOut,
})
