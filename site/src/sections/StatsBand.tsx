import { Stat } from '../components/Stat'
import { Reveal } from '../components/Reveal'
import { stats } from '../content/site'
import { cx } from '../lib/cx'
import s from './StatsBand.module.css'

/** Faixa de números logo abaixo do hero: consultoria financeira vive de número. */
export function StatsBand() {
  return (
    <section className={s.band} aria-label="Números da Efficax">
      <div className={cx('wrap', s.grid)}>
        {stats.map((st, i) => (
          <Reveal key={st.label} delay={i * 0.08} className={s.cell}>
            <Stat {...st} delay={0.1 + i * 0.12} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
