import { cx } from '../lib/cx'
import s from './Logo.module.css'

type Props = {
  variant?: 'primary' | 'onDark' | 'badge'
  height?: number
  className?: string
}

/** Assinatura EFFICAX. Sempre o arquivo, nunca redesenhada. */
export function Logo({ variant = 'primary', height = 34, className }: Props) {
  const src =
    variant === 'badge' ? './brand/logo-efficax-badge-gray.png' : './brand/logo-efficax-primary.png'
  return (
    <img
      src={src}
      alt="EFFICAX Assessoria Financeira"
      className={cx(s.img, variant === 'onDark' && s.onDark, className)}
      style={{ height }}
      draggable={false}
    />
  )
}
