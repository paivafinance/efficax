import { motion, useReducedMotion } from 'motion/react'
import { useCountUp } from '../hooks/useCountUp'
import { dashboard } from '../content/site'
import { brlMil, pct } from '../lib/format'
import { cx } from '../lib/cx'
import { easeOut } from '../lib/motion'
import s from './HeroDashboard.module.css'

type Props = { startAt?: number }

/* Cores das séries (tokens --chart-*, ajustadas para fundo grafite) */
const SERIES = {
  inflow: 'var(--green-500)',
  outflow: 'var(--graphite-400)',
  line: 'var(--green-400)',
  mix: ['var(--green-500)', 'var(--green-300)', 'var(--graphite-300)', 'var(--graphite-500)'],
}

function Kpi({ label, valueMil, signed, delay }: { label: string; valueMil: number; signed: boolean; delay: number }) {
  const v = useCountUp(valueMil, { delay, duration: 1.4 })
  return (
    <div className={s.kpi}>
      <span className={s.kpiLabel}>{label}</span>
      <span className={cx('num', s.kpiValue, signed && s.kpiPositive)}>{brlMil(v, { signed })}</span>
    </div>
  )
}

function Bars({ startAt, reduce }: { startAt: number; reduce: boolean }) {
  const { inflow, outflow, months } = dashboard.cashflow
  const W = 240
  const H = 84
  const base = 76
  const max = 520
  const group = W / inflow.length
  const bw = 9
  const scale = (v: number) => (v / max) * 64
  return (
    <div>
      <svg viewBox={`0 0 ${W} ${H}`} className={s.svg} aria-hidden="true">
        <line x1="0" y1={base + 0.5} x2={W} y2={base + 0.5} stroke="var(--border-on-dark)" strokeWidth="1" />
        {inflow.map((v, i) => {
          const x0 = i * group + group / 2 - bw - 1.5
          const hi = scale(v)
          const ho = scale(outflow[i])
          const t = (k: number) => ({ duration: 0.7, ease: easeOut, delay: startAt + i * 0.06 + k * 0.05 })
          return (
            <g key={i}>
              <motion.rect
                x={x0}
                width={bw}
                rx="1"
                fill={SERIES.inflow}
                initial={reduce ? false : { height: 0, y: base }}
                animate={{ height: hi, y: base - hi }}
                transition={t(0)}
              />
              <motion.rect
                x={x0 + bw + 3}
                width={bw}
                rx="1"
                fill={SERIES.outflow}
                initial={reduce ? false : { height: 0, y: base }}
                animate={{ height: ho, y: base - ho }}
                transition={t(1)}
              />
            </g>
          )
        })}
      </svg>
      <div className={cx('num', s.axis)}>
        {months.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
      <div className={s.legend}>
        <span>
          <i style={{ background: SERIES.inflow }} /> Entradas
        </span>
        <span>
          <i style={{ background: SERIES.outflow }} /> Saídas
        </span>
      </div>
    </div>
  )
}

function Donut({ startAt, reduce }: { startAt: number; reduce: boolean }) {
  const items = dashboard.outflowMix.items
  let acc = 0
  const segs = items.map((it, i) => {
    const frac = it.pct / 100
    const seg = { start: acc + 0.006, len: Math.max(frac - 0.012, 0.004), color: SERIES.mix[i] }
    acc += frac
    return seg
  })
  return (
    <div className={s.donutRow}>
      <div className={s.donutWrap}>
        <svg viewBox="0 0 100 100" className={s.donut} aria-hidden="true">
          <circle cx="50" cy="50" r="38" fill="none" stroke="var(--border-on-dark)" strokeWidth="11" />
          <g transform="rotate(-90 50 50)">
            {segs.map((seg, i) => (
              <motion.circle
                key={i}
                cx="50"
                cy="50"
                r="38"
                fill="none"
                stroke={seg.color}
                strokeWidth="11"
                initial={reduce ? false : { pathLength: 0, pathOffset: seg.start, pathSpacing: 1 }}
                animate={{ pathLength: seg.len, pathOffset: seg.start, pathSpacing: 1 }}
                transition={{ duration: 0.9, ease: easeOut, delay: startAt + i * 0.12 }}
              />
            ))}
          </g>
        </svg>
        <div className={s.donutCenter}>
          <span className={s.kpiLabel}>Saídas</span>
          <span className={cx('num', s.donutValue)}>{brlMil(391)}</span>
        </div>
      </div>
      <ul className={s.mixList}>
        {items.map((it, i) => (
          <motion.li
            key={it.label}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.42, delay: startAt + 0.2 + i * 0.1 }}
          >
            <i style={{ background: SERIES.mix[i] }} />
            <span>{it.label}</span>
            <span className={cx('num', s.mixPct)}>{pct(it.pct)}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

function Line({ startAt, reduce }: { startAt: number; reduce: boolean }) {
  const series = dashboard.balance.series
  const W = 300
  const H = 80
  const lo = 30
  const hi = 100
  const pts = series.map((v, i) => {
    const x = (i / (series.length - 1)) * (W - 8) + 4
    const y = 72 - ((v - lo) / (hi - lo)) * 62
    return [x, y] as const
  })
  const d = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`).join(' ')
  const [ex, ey] = pts[pts.length - 1]
  return (
    <div className={s.lineWrap}>
      <svg viewBox={`0 0 ${W} ${H}`} className={s.svg} aria-hidden="true">
        {[16, 44, 72].map((y) => (
          <line key={y} x1="0" y1={y + 0.5} x2={W} y2={y + 0.5} stroke="var(--border-on-dark)" strokeWidth="1" />
        ))}
        <motion.path
          d={d}
          fill="none"
          stroke={SERIES.line}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={reduce ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: easeOut, delay: startAt }}
        />
        <motion.circle
          cx={ex}
          cy={ey}
          fill={SERIES.line}
          initial={reduce ? false : { r: 0 }}
          animate={{ r: 3.5 }}
          transition={{ duration: 0.3, ease: easeOut, delay: startAt + 1.4 }}
        />
      </svg>
      <motion.span
        className={cx('num', s.lineTag)}
        initial={reduce ? false : { opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.42, ease: easeOut, delay: startAt + 1.5 }}
      >
        {brlMil(series[series.length - 1], { signed: true })}
      </motion.span>
    </div>
  )
}

/** Painel "Resultado do mês": gráficos que se desenham na abertura. Exemplo ilustrativo. */
export function HeroDashboard({ startAt = 0.8 }: Props) {
  const reduce = useReducedMotion() ?? false
  const t0 = reduce ? 0 : startAt
  return (
    <div className={s.card} role="img" aria-label="Painel ilustrativo de resultado do mês, com fluxo de caixa, composição das saídas e evolução do saldo">
      <div className={s.head}>
        <span className={s.title}>{dashboard.title}</span>
        <span className={s.badge}>{dashboard.badge}</span>
      </div>

      <div className={s.kpis}>
        {dashboard.kpis.map((k, i) => (
          <Kpi key={k.label} {...k} delay={t0 + i * 0.1} />
        ))}
      </div>

      <div className={s.row}>
        <div className={s.panel}>
          <span className={s.panelLabel}>{dashboard.cashflow.label}</span>
          <Bars startAt={t0 + 0.2} reduce={reduce} />
        </div>
        <div className={s.panel}>
          <span className={s.panelLabel}>{dashboard.outflowMix.label}</span>
          <Donut startAt={t0 + 0.4} reduce={reduce} />
        </div>
      </div>

      <div className={s.panel}>
        <span className={s.panelLabel}>{dashboard.balance.label}</span>
        <Line startAt={t0 + 0.6} reduce={reduce} />
      </div>

      <div className={s.caption}>{dashboard.caption}</div>
    </div>
  )
}
