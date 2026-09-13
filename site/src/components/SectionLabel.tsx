import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { cx } from '../lib/cx'
import { easeStandard, viewportOnce } from '../lib/motion'
import s from './SectionLabel.module.css'

type Props = {
  children: ReactNode
  tone?: 'brand' | 'muted' | 'onDark'
  /** Anima o tracinho ao entrar na tela (padrão). `false` para o hero, que tem coreografia própria. */
  animate?: boolean
  className?: string
}

/** Sobretítulo com tracinho verde: o motivo gráfico central da marca. */
export function SectionLabel({ children, tone = 'brand', animate = true, className }: Props) {
  return (
    <div className={cx(s.root, s[tone], className)}>
      <motion.span
        className={s.rule}
        initial={animate ? { scaleX: 0 } : false}
        whileInView={{ scaleX: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.42, ease: easeStandard }}
        style={{ originX: 0 }}
      />
      <span className={s.text}>{children}</span>
    </div>
  )
}
