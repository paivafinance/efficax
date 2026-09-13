const intFmt = new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 0 })

/** Inteiro em pt-BR: 1.234.567 */
export function formatInt(n: number): string {
  return intFmt.format(Math.round(n))
}

/** Milhares de reais: R$ 482 mil · +R$ 91 mil · −R$ 12 mil */
export function brlMil(nMil: number, { signed = false }: { signed?: boolean } = {}): string {
  const abs = Math.abs(Math.round(nMil))
  const sign = !signed ? '' : nMil < 0 ? '−' : '+'
  return `${sign}R$ ${formatInt(abs)} mil`
}

/** Percentual sem casas decimais: 46% */
export function pct(n: number): string {
  return `${formatInt(n)}%`
}
