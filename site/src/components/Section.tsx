import type { ReactNode } from 'react'
import { cx } from '../lib/cx'
import { SectionLabel } from './SectionLabel'
import { Reveal } from './Reveal'
import s from './Section.module.css'

type Props = {
  id?: string
  tone?: 'page' | 'sunken' | 'dark'
  compact?: boolean
  label?: string
  title?: string
  intro?: string
  /** `split`: cabeçalho fixo à esquerda, conteúdo à direita. */
  layout?: 'stack' | 'split'
  className?: string
  children: ReactNode
}

/** Ritmo interno fixo do DS: sobretítulo → 16 → título → 12 → texto → 48 → conteúdo. */
export function Section({
  id,
  tone = 'page',
  compact = false,
  label,
  title,
  intro,
  layout = 'stack',
  className,
  children,
}: Props) {
  const dark = tone === 'dark'
  const header = (label || title || intro) && (
    <Reveal className={cx(s.header, layout === 'split' && s.headerSplit)}>
      {label && <SectionLabel tone={dark ? 'onDark' : 'brand'}>{label}</SectionLabel>}
      {title && <h2 className={s.title}>{title}</h2>}
      {intro && <p className={s.intro}>{intro}</p>}
    </Reveal>
  )
  return (
    <section id={id} className={cx(s.section, s[tone], compact && s.compact, className)}>
      <div className={cx('wrap', layout === 'split' && s.split)}>
        {header}
        <div className={cx(s.body, layout === 'split' && s.bodySplit)}>{children}</div>
      </div>
    </section>
  )
}
