import { Section } from '../components/Section'
import { SectionLabel } from '../components/SectionLabel'
import { Stat } from '../components/Stat'
import { Reveal, Stagger, Item } from '../components/Reveal'
import { cases, problem } from '../content/site'
import { cx } from '../lib/cx'
import s from './Problem.module.css'

/** As três dores do dono de PME, o que fazemos com cada uma, e quatro casos reais com número. */
export function Problem() {
  return (
    <Section id={problem.id} tone="sunken" label={problem.eyebrow} title={problem.title} intro={problem.intro}>
      <Stagger className={s.pains} gap={0.1}>
        {problem.items.map((it) => (
          <Item key={it.quote} className={s.pain}>
            <blockquote className={s.quote}>
              <p>“{it.quote}”</p>
            </blockquote>
            <p className={s.text}>{it.text}</p>
            <div className={s.fix}>
              <span className={s.fixLabel}>{problem.fixLabel}</span>
              <a href="#servicos" className={s.fixText}>
                {it.fix}
              </a>
            </div>
          </Item>
        ))}
      </Stagger>

      <div id={cases.id} className={s.cases}>
        <Reveal className={s.casesHeader}>
          <SectionLabel>{cases.eyebrow}</SectionLabel>
          <h3 className={s.casesTitle}>{cases.title}</h3>
          <p className={s.casesIntro}>{cases.intro}</p>
        </Reveal>

        <Stagger className={s.grid} gap={0.08}>
          {cases.items.map((c, i) => (
            <Item key={c.sector + c.front} className={s.card}>
              <div className={s.cardTop}>
                <span className={s.tag}>
                  {c.sector} · {c.front}
                </span>
                <span className={cx('num', s.idx)}>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <Stat {...c.figure} size="lg" tone="brand" delay={0.15 + i * 0.1} className={s.figure} />
              <dl className={s.rows}>
                <div className={s.row}>
                  <dt>{cases.rows.situation}</dt>
                  <dd>{c.situation}</dd>
                </div>
                <div className={s.row}>
                  <dt>{cases.rows.action}</dt>
                  <dd>{c.action}</dd>
                </div>
                <div className={cx(s.row, s.rowResult)}>
                  <dt>{cases.rows.result}</dt>
                  <dd>{c.result}</dd>
                </div>
              </dl>
            </Item>
          ))}
        </Stagger>
      </div>
    </Section>
  )
}
