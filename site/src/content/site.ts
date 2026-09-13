/* Todo o conteúdo do site em um lugar só.
   Copy baseada no site atual (efficaxassessoria.com.br) e no LinkedIn do André, reescrita para as
   regras do DS: sentence case, sem emoji, números em pt-BR, CTAs no infinitivo. */

export type IconName =
  | 'activity'
  | 'receipt'
  | 'chart-column'
  | 'target'
  | 'scale'
  | 'landmark'
  | 'handshake'

export const contact = {
  whatsappDisplay: '+55 21 99994-7422',
  whatsappHref:
    'https://wa.me/5521999947422?text=' +
    encodeURIComponent(
      'Olá, André. Vi o site da Efficax e quero conversar sobre o financeiro da minha empresa.',
    ),
  email: 'andre.paiva@efficaxassessoria.com.br',
  domain: 'efficaxassessoria.com.br',
}

export const nav = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Casos', href: '#casos' },
  { label: 'Método', href: '#metodo' },
  { label: 'Sobre', href: '#sobre' },
] as const

export const hero = {
  eyebrow: 'Gestão financeira terceirizada · PMEs',
  title: 'Muito além do caixa: gestão financeira estratégica para a sua empresa.',
  highlight: 'gestão financeira estratégica',
  lead: 'A experiência de um CFO sênior à frente do seu financeiro: controladoria, FP&A, tesouraria, captação e M&A. Da rotina do dia a dia às decisões que fazem a empresa crescer com segurança.',
  primary: 'Falar com a Efficax',
  secondary: 'Ver serviços',
}

/* Painel "Resultado do mês": exemplo ilustrativo, valores em R$ mil */
export const dashboard = {
  title: 'Resultado do mês',
  badge: 'Exemplo ilustrativo',
  kpis: [
    { label: 'Entradas', valueMil: 482, signed: false },
    { label: 'Saídas', valueMil: 391, signed: false },
    { label: 'Saldo', valueMil: 91, signed: true },
  ],
  cashflow: {
    label: 'Fluxo de caixa · 6 meses',
    months: ['mar', 'abr', 'mai', 'jun', 'jul', 'ago'],
    inflow: [410, 455, 430, 470, 462, 482],
    outflow: [380, 398, 372, 410, 395, 391],
  },
  outflowMix: {
    label: 'Composição das saídas',
    items: [
      { label: 'Fornecedores', pct: 46 },
      { label: 'Folha', pct: 28 },
      { label: 'Impostos', pct: 16 },
      { label: 'Outros', pct: 10 },
    ],
  },
  balance: {
    label: 'Evolução do saldo · 12 meses',
    series: [42, 48, 45, 55, 58, 52, 63, 70, 66, 78, 84, 91],
  },
  caption: 'Retrato gerencial · exemplo ilustrativo',
}

export type StatItem = {
  value: number
  prefix?: string
  suffix?: string
  unit?: string
  label: string
}

export const stats: StatItem[] = [
  { value: 25, suffix: '+', unit: 'anos', label: 'de experiência em finanças' },
  { value: 70, prefix: 'R$', unit: 'MM', label: 'captados em funding' },
  { value: 150, prefix: 'R$', unit: 'MM', label: 'em caixa corporativo geridos' },
  { value: 70, prefix: 'R$', unit: 'MM', label: 'em dívidas reestruturadas' },
]

export const problem = {
  id: 'problema',
  eyebrow: 'O problema',
  title: 'Faturar não é o mesmo que ter caixa.',
  intro:
    'A maioria das PMEs decide no escuro: o dinheiro entra e sai sem um retrato claro, e a conta só aparece quando aperta.',
  fixLabel: 'O que fazemos',
  items: [
    {
      quote: 'Não sei quanto sobra.',
      text: 'O resultado do mês é uma surpresa, não um número que você acompanha.',
      fix: 'Fluxo de caixa semanal e relatório mensal em regime de caixa.',
    },
    {
      quote: 'Vivo apagando incêndio.',
      text: 'Pagamentos e recebimentos sem planejamento viram susto de última hora.',
      fix: 'Agenda de pagamentos e recebimentos com projeção de 13 semanas.',
    },
    {
      quote: 'Não tenho um time financeiro.',
      text: 'Montar uma estrutura interna é caro e lento, e você precisa disso agora.',
      fix: 'Um CFO sênior e a rotina financeira tocada por nós, a custo previsível.',
    },
  ],
}

export type CaseItem = {
  sector: string
  front: string
  figure: StatItem
  situation: string
  action: string
  result: string
}

/* Casos reais da trajetória do André (LinkedIn). Setor e frente, nunca o nome da empresa. */
export const cases = {
  id: 'casos',
  eyebrow: 'Na prática',
  title: 'Quatro situações reais, quatro números que mudaram.',
  intro:
    'Casos da trajetória do André à frente de áreas financeiras. O setor e a frente de trabalho, nunca o nome da empresa.',
  rows: { situation: 'Situação', action: 'O que foi feito', result: 'Resultado' },
  items: [
    {
      sector: 'Saneamento',
      front: 'Turnaround',
      figure: { value: 70, prefix: 'R$', unit: 'MM', label: 'em dívidas renegociadas' },
      situation: 'Passivo com bancos, fornecedores e clientes sufocando o caixa da operação.',
      action: 'Plano de saneamento financeiro, renegociação dos passivos, orçamento anual e controles.',
      result: 'Empresa reorganizada e vendida a um grupo nacional, com due diligence e valuation conduzidos internamente.',
    },
    {
      sector: 'Biotecnologia',
      front: 'Captação',
      figure: { value: 76, prefix: 'R$', unit: 'MM', label: 'captados para a planta industrial' },
      situation: 'Startup em implantação industrial, sem histórico para crédito tradicional.',
      action: 'Funding estruturado com FINEP, BNDES, FINIMP e bancos de primeira linha.',
      result: 'Planta piloto e industrial financiadas, auditoria Big Four atendida e orçamento integrado.',
    },
    {
      sector: 'Grupo empresarial',
      front: 'Tesouraria',
      figure: { value: 150, prefix: 'R$', unit: 'MM', label: 'de caixa sob gestão' },
      situation: 'Grupo diversificado, com caixa relevante espalhado por várias controladas.',
      action: 'Política de investimentos, diversificação do portfólio, orçamento e relatórios ao conselho.',
      result: 'Resultado financeiro consistente e due diligence pronta para novas aquisições.',
    },
    {
      sector: 'Mineração',
      front: 'Controladoria',
      figure: { value: 30, prefix: 'R$', unit: 'MM', label: 'captados para capex e giro' },
      situation: 'Mineradora listada em Londres em fase de crescimento, sem controladoria estruturada.',
      action: 'Budget, forecast rolling, fechamento contábil e fiscal, KPIs e dashboards executivos.',
      result: 'Controles robustos, auditoria anual atendida e diretoria decidindo com cenários.',
    },
  ] as CaseItem[],
}

export type ServiceItem = {
  icon: IconName
  title: string
  text: string
  deliverables: string[]
  rhythm: string
}

export const services = {
  id: 'servicos',
  eyebrow: 'O que a Efficax faz',
  title: 'O seu financeiro, tocado de ponta a ponta.',
  intro: 'Você cuida do negócio. Nós cuidamos dos números, com método e transparência.',
  rhythmLabel: 'Ritmo',
  items: [
    {
      icon: 'activity',
      title: 'Fluxo de caixa',
      text: 'Projeção e acompanhamento em regime de caixa: quanto entra, quanto sai, quando e por quê.',
      deliverables: ['Projeção de caixa para 13 semanas', 'Realizado x projetado toda semana', 'Alerta de aperto com antecedência'],
      rhythm: 'Semanal',
    },
    {
      icon: 'receipt',
      title: 'Contas a pagar e a receber',
      text: 'Rotina organizada de pagamentos e cobranças. Sem atraso, sem susto.',
      deliverables: ['Agenda de pagamentos e cobranças', 'Conciliação bancária', 'Régua de cobrança e inadimplência'],
      rhythm: 'Diário',
    },
    {
      icon: 'chart-column',
      title: 'Relatórios gerenciais',
      text: 'KPIs e dashboards com um retrato mensal claro do resultado, para decidir com dado e não com achismo.',
      deliverables: ['DRE gerencial em regime de caixa', 'Painel de KPIs do mês', 'Reunião mensal de resultado'],
      rhythm: 'Mensal',
    },
    {
      icon: 'target',
      title: 'Planejamento financeiro e FP&A',
      text: 'Orçamento, forecast e cenários: metas e prioridades de caixa para os próximos meses.',
      deliverables: ['Orçamento anual', 'Forecast revisado a cada trimestre', 'Cenários e metas de caixa'],
      rhythm: 'Trimestral',
    },
    {
      icon: 'scale',
      title: 'Reestruturação de dívida',
      text: 'Renegociação de passivos e redução do custo da dívida, com fôlego de caixa.',
      deliverables: ['Mapa do endividamento e do custo', 'Renegociação com bancos e fornecedores', 'Plano de fôlego de caixa'],
      rhythm: 'Por mandato',
    },
    {
      icon: 'landmark',
      title: 'Captação de recursos',
      text: 'Estruturação e captação de funding junto a BNDES, FINEP e bancos de primeira linha.',
      deliverables: ['Diagnóstico de crédito da empresa', 'Estruturação com BNDES, FINEP e bancos', 'Acompanhamento até o desembolso'],
      rhythm: 'Por mandato',
    },
    {
      icon: 'handshake',
      title: 'Valuation, M&A e venda',
      text: 'Diagnóstico de valor e apoio em aquisições, fusões e preparação para a venda da empresa.',
      deliverables: ['Laudo de valuation', 'Preparação da empresa e data room', 'Apoio na negociação e na due diligence'],
      rhythm: 'Por mandato',
    },
  ] as ServiceItem[],
  diagnostic: {
    eyebrow: 'Diagnóstico',
    title: '45 minutos sobre os números da sua empresa.',
    text: 'Você traz o extrato e o DRE. Nós devolvemos onde o caixa está vazando e qual é o primeiro passo.',
    cta: 'Agendar diagnóstico',
  },
}

export const method = {
  id: 'metodo',
  eyebrow: 'O método',
  title: 'Três passos, um caixa previsível.',
  intro: 'O jeito Efficax de trabalhar. O mesmo mote que guia cada entrega.',
  steps: [
    {
      n: '01',
      verb: 'estruturar',
      title: 'Visibilidade',
      text: 'Organizamos e consolidamos as informações. Você passa a enxergar o financeiro com clareza.',
    },
    {
      n: '02',
      verb: 'controlar',
      title: 'Previsibilidade',
      text: 'Colocamos contas, prazos e caixa sob controle. O mês deixa de ser surpresa.',
    },
    {
      n: '03',
      verb: 'gerir',
      title: 'Resultado',
      text: 'Gerimos para gerar rentabilidade: decisões que transformam controle em resultado.',
    },
  ],
}

export const why = {
  id: 'porque',
  eyebrow: 'Por que Efficax',
  title: 'Um time financeiro sênior, sem folha de time.',
  items: [
    {
      title: 'Entregáveis em regime de caixa',
      text: 'Você vê o dinheiro de verdade, não competência contábil.',
    },
    {
      title: 'Sem montar equipe interna',
      text: 'Estrutura sênior terceirizada, a um custo previsível.',
    },
    {
      title: 'Relatório todo mês',
      text: 'Ritmo fixo de acompanhamento e reunião. Nada de caixa-preta.',
    },
    {
      title: 'Foco em decisão',
      text: 'Não entregamos só números: entregamos o que fazer com eles.',
    },
  ],
}

export type CareerItem = { years: string; role: string; company: string; note: string }

/* Trajetória e bio a partir do LinkedIn (linkedin.com/in/andregpaiva), reescritas no tom do DS. */
export const about = {
  id: 'sobre',
  eyebrow: 'Quem toca',
  name: 'André Paiva',
  role: 'Diretor financeiro, CFO e controller há mais de 25 anos. Começou como analista de investimentos no UBS.',
  cardRole: 'CFO · Efficax Assessoria Financeira',
  paragraphs: [
    'Mais de 30 anos em finanças. Começou no UBS como analista de investimentos, cobrindo 40 empresas listadas em Bolsa. Desde 1999 lidera FP&A, controladoria e tesouraria como diretor financeiro, CFO e controller em grupos empresariais, startups e uma mineradora listada na Bolsa de Londres.',
    'Passou pelos dois lados da mesa: captou mais de R$ 70 milhões com FINEP, BNDES e bancos de primeira linha, reestruturou R$ 70 milhões em dívidas e conduziu a venda de uma empresa de saneamento, da due diligence ao fechamento.',
    'Na Efficax, essa bagagem é aplicada à realidade da PME: um CFO sênior à frente do seu financeiro, sem o custo de um executivo na folha, traduzindo números em escolhas simples para o dono do negócio.',
  ],
  credentials: [
    'Economia (Cândido Mendes)',
    'Pós em finanças corporativas (FGV)',
    'Inglês fluente',
    'Rio de Janeiro',
    'Mineração',
    'Saneamento',
    'Construção civil',
    'Biotecnologia',
    'Mercado de capitais',
  ],
  careerEyebrow: 'Trajetória',
  career: [
    {
      years: '2018 – hoje',
      role: 'Controller',
      company: 'Harvest Minerals',
      note: 'Mineradora listada na Bolsa de Londres. Controladoria, FP&A, tesouraria e BI. Captação de R$ 30 milhões para capex e capital de giro.',
    },
    {
      years: '2015 – hoje',
      role: 'Fundador e sócio-diretor',
      company: 'Efficax Assessoria Financeira',
      note: 'Diagnóstico, reestruturação e planejamento financeiro para empresas de médio porte. Captação com BNDES e agências de fomento, valuation e turnaround.',
    },
    {
      years: '2013 – 2015',
      role: 'Diretor financeiro',
      company: 'Inbra Construtora',
      note: 'Infraestrutura e mercado imobiliário. Captação de longo prazo, consórcios para licitações, FP&A e análise de novos negócios.',
    },
    {
      years: '2011 – 2013',
      role: 'Gerente financeiro',
      company: 'Geociclo Biotecnologia',
      note: 'Startup em implantação industrial. Mais de R$ 76 milhões captados com FINEP, BNDES e bancos. Auditoria Big Four.',
    },
    {
      years: '2006 – 2010',
      role: 'Diretor financeiro',
      company: 'Victori',
      note: 'Grupo empresarial diversificado. Gestão de caixa de R$ 150 milhões, due diligence de aquisições e registro de capital estrangeiro no BACEN.',
    },
    {
      years: '2002 – 2006',
      role: 'Diretor financeiro',
      company: 'Eco Aqua Soluções',
      note: 'Saneamento. Turnaround com renegociação de R$ 70 milhões em dívidas e venda da empresa para a Foz do Brasil.',
    },
    {
      years: '1999 – 2002',
      role: 'Diretor financeiro',
      company: 'Victori Capital',
      note: 'De analista a diretor financeiro. Caixa de R$ 50 milhões, fundos e bonds, due diligence em telecom, mídia e internet.',
    },
    {
      years: '1993 – 1999',
      role: 'Analista de investimentos',
      company: 'UBS',
      note: 'Renda variável, cobertura de 40 empresas listadas. Relatórios com fluxo de caixa descontado e o Brazil Handbook trimestral.',
    },
  ] as CareerItem[],
  stats: [
    { value: 25, suffix: '+', unit: 'anos', label: 'liderando áreas financeiras' },
    { value: 70, prefix: 'R$', unit: 'MM', label: 'captados em funding' },
    { value: 150, prefix: 'R$', unit: 'MM', label: 'em caixa corporativo geridos' },
    { value: 70, prefix: 'R$', unit: 'MM', label: 'em dívidas reestruturadas' },
  ] as StatItem[],
}

export const cta = {
  id: 'contato',
  title: 'Vamos deixar seu caixa previsível?',
  text: 'Uma conversa rápida para entender seu momento e mostrar como a Efficax pode ajudar.',
  whatsapp: 'Falar no WhatsApp',
  email: 'Enviar e-mail',
}

export const footer = {
  tagline: 'Assessoria financeira. Gestão financeira terceirizada para PMEs.',
  copyright: `© ${new Date().getFullYear()} EFFICAX Assessoria Financeira`,
}
