import type { ReactNode } from 'react'
import { cx } from '../lib/cx'
import s from './Button.module.css'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'onDark'
  | 'secondaryOnDark'
  | 'onBrand'
  | 'secondaryOnBrand'

type Props = {
  variant?: ButtonVariant
  size?: 'sm' | 'md' | 'lg'
  href?: string
  target?: string
  rel?: string
  onClick?: () => void
  iconLeft?: ReactNode
  iconRight?: ReactNode
  className?: string
  'aria-label'?: string
  children: ReactNode
}

/** Botão do DS. Hover escurece um passo, press desce 1px, nunca opacidade. */
export function Button({
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  onClick,
  iconLeft,
  iconRight,
  className,
  children,
  ...rest
}: Props) {
  const cls = cx(s.btn, s[variant], s[size], className)
  const content = (
    <>
      {iconLeft && <span className={s.icon}>{iconLeft}</span>}
      {children}
      {iconRight && <span className={cx(s.icon, s.iconRight)}>{iconRight}</span>}
    </>
  )
  if (href) {
    const external = /^https?:|^mailto:/.test(href)
    return (
      <a
        href={href}
        className={cls}
        onClick={onClick}
        target={target ?? (external && !href.startsWith('mailto:') ? '_blank' : undefined)}
        rel={rel ?? (external ? 'noopener noreferrer' : undefined)}
        {...rest}
      >
        {content}
      </a>
    )
  }
  return (
    <button type="button" className={cls} onClick={onClick} {...rest}>
      {content}
    </button>
  )
}
