import { describe, expect, it } from 'vitest'
import { formatInt, brlMil, pct } from './format'

describe('formatInt', () => {
  it('usa ponto de milhar pt-BR', () => {
    expect(formatInt(1234567)).toBe('1.234.567')
  })
  it('arredonda para inteiro (contadores animados passam por frações)', () => {
    expect(formatInt(481.6)).toBe('482')
  })
})

describe('brlMil', () => {
  it('formata milhares de reais', () => {
    expect(brlMil(482)).toBe('R$ 482 mil')
  })
  it('sinaliza positivo quando pedido', () => {
    expect(brlMil(91, { signed: true })).toBe('+R$ 91 mil')
  })
  it('sinaliza negativo com sinal de menos tipográfico', () => {
    expect(brlMil(-12, { signed: true })).toBe('−R$ 12 mil')
  })
})

describe('pct', () => {
  it('sem casas decimais', () => {
    expect(pct(46.4)).toBe('46%')
  })
})
