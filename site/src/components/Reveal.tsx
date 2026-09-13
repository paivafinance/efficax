import type { CSSProperties, ReactNode } from 'react'
import { motion } from 'motion/react'
import { easeStandard, reveal, stagger, viewportOnce } from '../lib/motion'

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
  style?: CSSProperties
}

/** Revelação em scroll do DS: fade + 8 px, 420 ms, uma vez. */
export function Reveal({ children, delay = 0, className, style }: RevealProps) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.42, ease: easeStandard, delay }}
    >
      {children}
    </motion.div>
  )
}

type StaggerProps = RevealProps & { gap?: number; as?: 'div' | 'ul' | 'ol' }

/** Contêiner que escalona a revelação dos filhos `<Item>`. */
export function Stagger({ children, gap = 0.06, delay = 0, className, style, as = 'div' }: StaggerProps) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      style={style}
      variants={stagger(gap, delay)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {children}
    </Tag>
  )
}

type ItemProps = { children: ReactNode; className?: string; style?: CSSProperties; as?: 'div' | 'li' }

export function Item({ children, className, style, as = 'div' }: ItemProps) {
  const Tag = motion[as]
  return (
    <Tag className={className} style={style} variants={reveal}>
      {children}
    </Tag>
  )
}
