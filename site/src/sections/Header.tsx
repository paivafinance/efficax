import { useCallback, useEffect, useState, type MouseEvent } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { Button } from '../components/Button'
import { Logo } from '../components/Logo'
import { nav, hero } from '../content/site'
import { cx } from '../lib/cx'
import { easeStandard, reveal, stagger } from '../lib/motion'
import s from './Header.module.css'

/** Transparente sobre o hero escuro; vira branco 92% + blur 8px ao rolar. */
export function Header() {
  const [solid, setSolid] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()
  const { scrollY, scrollYProgress } = useScroll()

  /* Três estados: transparente no topo; grafite enquanto o hero rola por baixo
     (no celular o hero é alto); branco com blur depois do hero. */
  useMotionValueEvent(scrollY, 'change', (y) => {
    const heroEl = document.getElementById('hero')
    const limit = heroEl ? heroEl.offsetHeight - 78 : 480
    setScrolled(y > 8)
    setSolid(y > limit)
  })

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth > 900 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  /* No menu mobile o body está travado (overflow hidden), então o salto de âncora nativo
     não rola a página. Fecha o menu, libera o scroll e rola por conta própria. */
  const goTo = useCallback(
    (href: string) => (e: MouseEvent<HTMLElement>) => {
      e.preventDefault()
      setOpen(false)
      document.body.style.overflow = ''
      const target = document.querySelector<HTMLElement>(href)
      requestAnimationFrame(() => {
        target?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
        history.replaceState(null, '', href)
      })
    },
    [reduce],
  )

  const onDark = !solid && !open

  return (
    <>
      <header className={cx(s.header, scrolled && !solid && s.scrolled, solid && s.solid, open && s.open)}>
        <motion.div className={s.progress} style={{ scaleX: scrollYProgress }} aria-hidden="true" />
        <div className={cx('wrap', s.bar)}>
          <a href="#top" className={s.logoLink} aria-label="EFFICAX, voltar ao início" onClick={goTo('#top')}>
            <Logo variant={onDark ? 'onDark' : 'primary'} height={30} />
          </a>

          <nav className={s.nav} aria-label="Principal">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className={s.link}>
                {item.label}
              </a>
            ))}
            <Button href="#contato" size="sm" variant={onDark ? 'onDark' : 'primary'}>
              {hero.primary}
            </Button>
          </nav>

          <button
            type="button"
            className={s.menuBtn}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
            <span className="sr-only">{open ? 'Fechar menu' : 'Abrir menu'}</span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            className={s.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: easeStandard }}
          >
            <motion.nav
              className={cx('wrap', s.overlayNav)}
              aria-label="Principal (mobile)"
              variants={stagger(0.05, 0.1)}
              initial="hidden"
              animate="show"
            >
              {nav.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className={s.overlayLink}
                  variants={reveal}
                  onClick={goTo(item.href)}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div variants={reveal} className={s.overlayCta}>
                <Button href="#contato" size="lg" variant="onDark" onClick={goTo('#contato')}>
                  {hero.primary}
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
