# Site EFFICAX

Site institucional da EFFICAX Assessoria Financeira em React, construído sobre o design system em `../system_design/`.

## Rodar

```bash
npm install
npm run dev        # http://localhost:5173
```

```bash
npm run test       # vitest (formatação pt-BR, âncoras da navegação, regras de conteúdo)
npm run typecheck  # tsc
npm run build      # gera dist/ (saída estática, base relativa)
```

## Publicar (Cloudflare Workers, build via Git)

Repositório: `github.com/paivafinance/efficax`. O Worker `efficax-assessoria` (conta Cloudflare do domínio `efficaxassessoria.com.br`) está conectado ao repo com Workers Builds. O `wrangler.jsonc` usa o mesmo nome do Worker, então cada build em `main` substitui o site publicado sem mexer em DNS.

| Configuração | Valor |
|---|---|
| Production branch | `main` |
| Root directory | `/site` |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Branches de preview | `npx wrangler versions upload` |
| Variável de build | `NODE_VERSION` = `22` |

`public/_redirects` manda `/Efficax_Landing` e `/Efficax_Landing/*` para `/` com 301, então links antigos continuam funcionando. Rollback: aba Deployments do Worker, escolher a versão anterior.

Sem Git: `npm run build` e `npx wrangler deploy` com login na conta do domínio.

## Onde mexer

| O quê | Onde |
|---|---|
| Todo o texto do site (copy, contatos, números) | `src/content/site.ts` |
| Tokens de cor, tipo, espaço, movimento | `src/styles/tokens/` (cópia de `../system_design/tokens/`, o DS é a fonte) |
| Seções da página, na ordem em que aparecem | `src/sections/` |
| Componentes do DS (Button, Stat, SectionLabel, Logo, Section, Reveal) | `src/components/` |
| Painel animado do hero (gráficos SVG) | `src/sections/HeroDashboard.tsx` |
| Curvas e durações das animações | `src/lib/motion.ts` |
| Imagem de preview (WhatsApp, LinkedIn, Google) | template em `og/og-image.html`; renderizar a 1200×630 e salvar como `public/og-image.jpg` (JPEG < 300 KB) |

## Decisões de design

Registradas em `../docs/superpowers/specs/2026-09-13-site-react-design.md`. Resumo:

- Base clara, hero e rodapé em grafite, um único bloco verde (CTA). Sem gradiente, sem blur além do header, sem glassmorphism.
- Revelação em scroll segue o DS (420 ms, 8 px). O hero usa um tier cinematográfico próprio (título por máscara, gráficos que se desenham, contadores). `prefers-reduced-motion` desliga tudo.
- Retrato: a seção "Quem toca" carrega `public/brand/andre-paiva.jpg` (quadrado, mínimo 300 px). Se o arquivo não existir, mostra o selo cinza da marca no lugar.
- Fontes vêm do Google Fonts por `<link>` no `index.html` (Newsreader, Archivo, Jost, IBM Plex Mono).

## Pendências para o cliente

- Retrato atual (`public/brand/andre-paiva.jpg`) é o do LinkedIn, 426 px. Serve para o cartão; para uso maior, pedir foto em resolução alta.
- Logo em vetor (SVG): o PNG atual (900 px, vindo do site antigo) é nítido para web, mas não serve para impressão grande.
- Validar os números do painel ilustrativo do hero (são exemplo, e estão sinalizados como tal).
- Validar com o André os entregáveis e o ritmo de cada serviço (propostos a partir da prática de CFO terceirizado) e os quatro casos de "Na prática" (extraídos do LinkedIn dele; setor e frente, sem nome de empresa).
