import { useState } from 'react'
import { Reveal, Stagger, Item } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { Stat } from '../components/Stat'
import { Logo } from '../components/Logo'
import { about } from '../content/site'
import { cx } from '../lib/cx'
import s from './About.module.css'

/** Retrato em public/brand/andre-paiva.jpg. Se o arquivo não existir, cai no selo cinza da marca. */
function Portrait() {
  const [missing, setMissing] = useState(false)
  if (missing) return <Logo variant="badge" height={128} className={s.badge} />
  return (
    <img
      src="./brand/andre-paiva.jpg"
      alt={`Retrato de ${about.name}`}
      className={s.photo}
      width={128}
      height={128}
      onError={() => setMissing(true)}
    />
  )
}

/** Quem toca: composição tipográfica, cartão de credenciais com retrato e trajetória. */
export function About() {
  return (
    <section id={about.id} className={s.section}>
      <div className={cx('wrap', s.grid)}>
        <Reveal className={s.copy}>
          <SectionLabel>{about.eyebrow}</SectionLabel>
          <h2 className={s.name}>{about.name}</h2>
          <p className={s.role}>{about.role}</p>
          {about.paragraphs.map((p) => (
            <p key={p} className={s.p}>
              {p}
            </p>
          ))}
          <ul className={s.creds}>
            {about.credentials.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className={s.card}>
          <div className={s.cardHead}>
            <Portrait />
            <div>
              <div className={s.cardName}>{about.name}</div>
              <div className={s.cardRole}>{about.cardRole}</div>
            </div>
          </div>
          <div className={s.cardStats}>
            {about.stats.map((st, i) => (
              <Stat key={st.label} {...st} size="lg" delay={0.2 + i * 0.12} />
            ))}
          </div>
        </Reveal>
      </div>

      <div className={cx('wrap', s.careerWrap)}>
        <Reveal>
          <SectionLabel tone="muted">{about.careerEyebrow}</SectionLabel>
        </Reveal>
        <Stagger as="ol" className={s.timeline} gap={0.05}>
          {about.career.map((c) => (
            <Item key={c.years + c.company} as="li" className={s.entry}>
              <span className={cx('num', s.years)}>{c.years}</span>
              <span className={s.who}>
                <span className={s.entryRole}>{c.role}</span>
                <span className={s.company}>{c.company}</span>
              </span>
              <span className={s.note}>{c.note}</span>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
