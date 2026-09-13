import { Check } from 'lucide-react'
import { Section } from '../components/Section'
import { Stagger, Item } from '../components/Reveal'
import { why } from '../content/site'
import s from './Why.module.css'

export function Why() {
  return (
    <Section id={why.id} tone="dark" label={why.eyebrow} title={why.title}>
      <Stagger className={s.grid} gap={0.08}>
        {why.items.map((it) => (
          <Item key={it.title} className={s.item}>
            <span className={s.check} aria-hidden="true">
              <Check size={16} strokeWidth={2.5} />
            </span>
            <h3 className={s.title}>{it.title}</h3>
            <p className={s.text}>{it.text}</p>
          </Item>
        ))}
      </Stagger>
    </Section>
  )
}
