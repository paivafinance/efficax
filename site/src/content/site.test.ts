import { describe, expect, it } from 'vitest'
import { nav, cases, services, method, about, cta, problem, why, hero } from './site'

describe('navegação', () => {
  it('cada link do menu aponta para uma seção existente', () => {
    const ids = new Set([cases.id, services.id, method.id, about.id, cta.id, problem.id, why.id])
    for (const item of nav) {
      expect(item.href.startsWith('#')).toBe(true)
      expect(ids.has(item.href.slice(1))).toBe(true)
    }
  })
})

describe('regras de conteúdo do DS', () => {
  it('nenhum texto usa emoji ou dingbat unicode', () => {
    const all = JSON.stringify({ cases, services, method, about, cta, problem, why, hero })
    expect(/[☀-➿\u{1F300}-\u{1FAFF}]/u.test(all)).toBe(false)
  })
  it('CTAs têm entre 2 e 4 palavras', () => {
    for (const label of [cta.whatsapp, cta.email, services.diagnostic.cta, hero.primary, hero.secondary]) {
      const words = label.trim().split(/\s+/).length
      expect(words).toBeGreaterThanOrEqual(2)
      expect(words).toBeLessThanOrEqual(4)
    }
  })
  it('o destaque do hero é um trecho do título', () => {
    expect(hero.title.includes(hero.highlight)).toBe(true)
  })
  it('cada serviço tem três entregáveis e um ritmo', () => {
    for (const s of services.items) {
      expect(s.deliverables).toHaveLength(3)
      expect(s.rhythm.length).toBeGreaterThan(0)
    }
  })
  it('casos citam setor e frente, nunca nome de empresa', () => {
    const companies = about.career.map((c) => c.company.split(' ')[0])
    for (const c of cases.items) {
      const text = `${c.situation} ${c.action} ${c.result}`
      for (const name of companies) expect(text.includes(name)).toBe(false)
      expect(c.sector.length).toBeGreaterThan(0)
      expect(c.front.length).toBeGreaterThan(0)
    }
  })
})

describe('trajetória', () => {
  it('vem do mais recente para o mais antigo, com ano de início válido', () => {
    const starts = about.career.map((c) => Number(c.years.slice(0, 4)))
    for (const y of starts) expect(y).toBeGreaterThan(1980)
    for (let i = 1; i < starts.length; i++) expect(starts[i]).toBeLessThanOrEqual(starts[i - 1])
  })
})
