import { ArrowRight } from 'lucide-react'
import { Section } from '../components/Section'
import { SectionLabel } from '../components/SectionLabel'
import { Button } from '../components/Button'
import { Stagger, Item } from '../components/Reveal'
import { icons } from '../components/icons'
import { services } from '../content/site'
import { cx } from '../lib/cx'
import s from './Services.module.css'

/** Sete frentes com entregáveis e ritmo, mais o cartão escuro de diagnóstico. */
export function Services() {
  return (
    <Section id={services.id} label={services.eyebrow} title={services.title} intro={services.intro}>
      <Stagger className={s.grid} gap={0.06}>
        {services.items.map((it, i) => {
          const Icon = icons[it.icon]
          return (
            <Item key={it.title} className={s.card}>
              <div className={s.top}>
                <span className={s.iconBox}>
                  <Icon size={20} strokeWidth={2} />
                </span>
                <span className={cx('num', s.idx)}>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className={s.title}>{it.title}</h3>
              <p className={s.text}>{it.text}</p>
              <ul className={s.list}>
                {it.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <div className={s.foot}>
                <span className={s.footLabel}>{services.rhythmLabel}</span>
                <span className={s.footValue}>{it.rhythm}</span>
              </div>
            </Item>
          )
        })}
        <Item className={cx(s.card, s.dark)}>
          <div className={s.darkBody}>
            <SectionLabel tone="onDark">{services.diagnostic.eyebrow}</SectionLabel>
            <h3 className={cx(s.title, s.darkTitle)}>{services.diagnostic.title}</h3>
            <p className={s.darkText}>{services.diagnostic.text}</p>
          </div>
          <div className={s.darkCta}>
            <Button href="#contato" variant="onDark" size="lg" iconRight={<ArrowRight size={16} />}>
              {services.diagnostic.cta}
            </Button>
          </div>
        </Item>
      </Stagger>
    </Section>
  )
}
