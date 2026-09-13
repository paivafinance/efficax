import { useEffect, useState } from 'react'
import { animate, useReducedMotion } from 'motion/react'

type Options = { duration?: number; delay?: number; active?: boolean }

/** Conta de 0 até `target`. Com reduced-motion, entrega o valor final na hora. */
export function useCountUp(
  target: number,
  { duration = 1.2, delay = 0, active = true }: Options = {},
) {
  const reduce = useReducedMotion()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    if (reduce) {
      setValue(target)
      return
    }
    const controls = animate(0, target, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(v),
    })
    return () => controls.stop()
  }, [active, target, reduce, duration, delay])

  return active ? value : 0
}
