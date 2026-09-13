import { useRef } from 'react'
import { useInView } from 'motion/react'
import { useCountUp } from '../hooks/useCountUp'
import { formatInt } from '../lib/format'
import { cx } from '../lib/cx'
import type { StatItem } from '../content/site'
import s from './Stat.module.css'

type Props = StatItem & {
  tone?: 'default' | 'onDark' | 'brand'
  size?: 'md' | 'lg'
  delay?: number
  className?: string
}

/** Número em mono tabular que conta ao entrar na tela. */
export function Stat({
  value,
  prefix,
  suffix,
  unit,
  label,
  tone = 'default',
  size = 'lg',
  delay = 0,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })
  const n = useCountUp(value, { active: inView, delay, duration: 1.4 })
  const digits = formatInt(value).length

  return (
    <div ref={ref} className={cx(s.root, s[tone], s[size], className)}>
      <div className={s.value} aria-label={`${prefix ?? ''} ${formatInt(value)}${suffix ?? ''} ${unit ?? ''}`.trim()}>
        {prefix && <span className={s.affix}>{prefix}</span>}
        <span className={cx('num', s.digits)} style={{ minWidth: `${digits}ch` }} aria-hidden="true">
          {formatInt(n)}
        </span>
        {suffix && <span className={s.suffix}>{suffix}</span>}
        {unit && <span className={s.affix}>{unit}</span>}
      </div>
      <div className={s.label}>{label}</div>
    </div>
  )
}
