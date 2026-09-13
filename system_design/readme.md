# EFFICAX — Design System

Design system da **EFFICAX Assessoria Financeira**, consultoria financeira brasileira que atende empresas de pequeno e medio porte em **M&A, controladoria, funding, valuation e analise de novos negocios**.

O objetivo do sistema e permitir que qualquer pessoa (ou agente) produza site, apresentacoes, propostas e relatorios com a mesma cara: verde da marca como destaque, base clara, grafite institucional, numeros sempre em mono tabular.

---

## 1. Fontes deste sistema

| Fonte | Caminho | Observacao |
|---|---|---|
| Logo principal (JPG, fundo branco) | `uploads/LOGO EFFICAX.jpg` → `assets/logo-efficax-original.jpg` | unico material de marca fornecido |
| Logo em selo circular cinza (PNG) | `assets/logo-efficax-badge-gray.png` | enviado pelo cliente na segunda rodada |
| Briefing do cliente | formulario respondido no chat | servicos, tom, idioma, paleta e tipografia |

**Nao foram fornecidos:** manual de marca, arquivos vetoriais (SVG/AI/EPS), arquivos de fonte, fotografia, site existente, Figma, codebase ou deck anterior.
Consequencia: **cores foram amostradas pixel a pixel do logo**, tipografia e uma **aproximacao** (ver secao 4) e nao ha imagem fotografica em nenhum kit — todo espaco de imagem esta marcado como reservado.

---

## 2. Indice de arquivos

**Raiz**
- `styles.css` — ponto de entrada unico (somente `@import`). Consumidores linkam este arquivo.
- `thumbnail.html` — miniatura do sistema.
- `SKILL.md` — versao Agent Skill (para uso no Claude Code).
- `readme.md` — este guia.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css`, `base.css`

**`assets/`** — `logo-efficax-primary.png` (fundo transparente, recortado), `logo-efficax-original.jpg`, `logo-efficax-badge-gray.png`

**`components/`** (20 componentes, `window.EFFICAXDesignSystem_edde19`)
| Grupo | Componentes |
|---|---|
| `core/` | Button, IconButton, Badge, Tag, Card, Rule |
| `brand/` | Logo, Icon, SectionLabel, Stat |
| `forms/` | Input (com `multiline`), Select, Checkbox, Radio, Switch |
| `navigation/` | Tabs, Breadcrumb |
| `feedback/` | Dialog, Tooltip |
| `content/` | DataTable, Quote, ServiceCard |

Cada componente tem `.jsx`, `.d.ts` (contrato de props) e `.prompt.md` (quando e como usar).

**`ui_kits/`**
- `website/` — site institucional navegavel: home, servicos, casos, contato (`README.md` proprio)
- `proposta/` — proposta comercial A4 em 4 paginas, pronta para impressao/PDF

**`slides/`** — 8 tipos de slide 16:9 (capa, divisor, agenda, numeros, servicos, tabela, citacao, encerramento)

**`guidelines/`** — 18 cards de fundamentos (cores, tipografia, espacamento, raios, elevacao, marca, movimento)

### Adicoes intencionais
O briefing nao trazia inventario de componentes (nao havia Figma nem codebase), entao o conjunto foi autorado a partir das necessidades das tres superficies pedidas. Quatro componentes existem por necessidade especifica da marca e nao fazem parte de um kit generico:
- **Logo** — garante que a assinatura venha sempre do arquivo, nunca redesenhada.
- **Icon** — wrapper do set Lucide (ver secao 6).
- **SectionLabel** — o sobretitulo com tracinho verde e o motivo grafico central da marca.
- **Stat / DataTable** — consultoria financeira vive de numero; ambos forcam mono tabular e formato pt-BR.

---

## 3. Content fundamentals

**Idioma:** portugues do Brasil, sempre. Numeros em formato pt-BR: virgula decimal, ponto de milhar, `R$ 48.210`, `16,3%`, `3,9 p.p.`, `1,2x`, `30/06/2026`.

**Tom:** moderno e direto, frases curtas, sem jargao. A consultoria fala como quem ja olhou a planilha, nao como quem vende metodologia.

**Pessoa:** "nos" para a EFFICAX, "voce"/"sua empresa" para o cliente. Nunca terceira pessoa institucional ("a empresa oferece").

- Bom: "Organizamos o financeiro da sua empresa e mostramos o numero que precisa melhorar."
- Evitar: "A EFFICAX disponibiliza solucoes integradas de gestao financeira com foco em resultados."

**Casing:** titulos em sentence case ("Uma frente para cada decisao"), nunca Title Case. Caixa alta somente em sobretitulos, badges e rotulos de tabela — sempre com `letter-spacing: .16em`.

**Pontuacao:** titulos de secao podem terminar em ponto ("Uma frente para cada decisao."); itens de lista e legendas nao levam ponto final. Sem exclamacao. Travessao usado com moderacao, no maximo um por paragrafo.

**Extensao:** h1 ate 22 caracteres por linha (~20ch); paragrafo de abertura entre 15 e 35 palavras; item de lista ate 6 palavras; legenda de numero ate 5 palavras.

**Numeros vem antes de adjetivos.** "Fechamento contabil de 27 para 9 dias" em vez de "melhoria significativa no fechamento".

**Confidencialidade:** casos nunca citam nome de cliente — sempre setor + servico ("Industria · M&A"). Badge `Confidencial` em todo documento de proposta.

**Emoji: nunca.** Nem em interface, nem em slide, nem em e-mail. Icones Lucide fazem esse papel.

**Vocabulario preferido:** diagnostico, mandato, frente, entregavel, fechamento, premissa, faixa de valor, proximo passo.
**Evitar:** solucoes, inovador, disruptivo, parceria estrategica, ecossistema, alavancar, "unlock".

**Chamadas de acao** (sempre verbo no infinitivo, 2–4 palavras): "Agendar diagnostico", "Baixar apresentacao", "Solicitar material", "Ver casos". Uma acao primaria por tela.

---

## 4. Visual foundations

### Cor
Verde amostrado do logo: **#85B803** (`--green-500`). Grafite do logo: **#6d6e71** e **#595959**.
O verde e **destaque, nao fundo**: aparece em tracinhos, icones, botao primario, sublinhado de aba ativa e numeros positivos. Um unico bloco verde cheio por peca (faixa de CTA, slide de encerramento) — mais que isso satura.

Fundos permitidos: branco (padrao), `--graphite-25/50` (faixa alternada) e `--surface-dark` `#2e3033` (hero, capa, rodape). **Maximo dois fundos por peca** alem do branco. Nao existe gradiente em nenhum lugar do sistema — nenhum.

Texto: `--text-strong` `#1d1f21` em titulos, `--text-body` `#434446` em corpo, `--text-muted` `#6d6e71` em apoio. Verde como cor de texto so em `--green-700` ou mais escuro (contraste).

Estados (positivo/atencao/negativo/informativo) sao **dessaturados de proposito** — em um relatorio financeiro, vermelho berrante lê como alarme.

### Tipografia
- **Newsreader** (serifada) — titulos, citacoes. Peso 400 em tamanho grande; 500 em h4. Serifada dá o peso institucional pedido no briefing.
- **Archivo** (sans grotesca) — corpo, interface, rotulos. 400 e 600.
- **Jost** (geometrica leve) — sobretitulos, badges e cabecalho de tabela em caixa alta espacada. Escolhida pela afinidade com o wordmark do logo.
- **IBM Plex Mono** — toda cifra, percentual, data e numero de pagina, sempre `font-variant-numeric: tabular-nums`.

Escala: 64 / 48 / 38 / 29 / 22 / 18 / 16 / 14 / 12,5 px. Entrelinha 1.08 em display, 1.2 em titulo, 1.62 em corpo.

> **Substituicao de fontes a confirmar.** Nenhum arquivo de fonte foi fornecido. O wordmark do logo e um sans geometrico leve e muito espacado (familia Kabel/Eurostile); **Jost** e a aproximacao mais proxima no Google Fonts e cobre o papel de rotulo. Newsreader, Archivo e IBM Plex Mono foram escolhidas para os demais papeis. Se a EFFICAX tiver licenca das fontes originais, envie os arquivos e eu troco os `@font-face` em `tokens/fonts.css`.

### Layout
Container de 1200px com margem lateral de 40px (`--page-margin` fluida: 20–80px). Grade de 12 colunas implicita; grades de conteudo sempre 3 ou 4 colunas. Medida de leitura maxima 66ch (`--measure`).
Secao respira 96px em cima e embaixo (`--section-y`), 64px em secoes compactas. Ritmo interno fixo: sobretitulo → 16px → titulo → 12px → texto → 48px → conteudo.
Header fixo (`position: sticky`) de 78px com fundo branco a 92% e `backdrop-filter: blur(8px)` — **o unico uso de blur no sistema**, junto ao overlay de modal (2px).

### Fundos e imagem
Sem padroes, sem texturas, sem ilustracao, sem grain. Blocos de cor plana e hairlines fazem toda a separacao visual.
**Nao ha fotografia disponivel.** Onde entraria imagem, os kits usam `PhotoSlot` — bloco cinza com borda tracejada e legenda dizendo o que falta. Quando a marca fornecer fotos, a direcao indicada e: luz natural, temperatura neutra a fria, ambiente de escritorio real, sem stock sorridente, sem filtro verde.

### Bordas, raios e sombra
Raio quase reto: **3px** em controles, **5px** em cartoes, 2px em badges e caixas de icone. `--radius-pill` existe para um unico componente (Tag). Nada mais e arredondado.
Bordas: hairline de 1px `--graphite-100/200`; 2px verde em sobretitulo; 3px verde no tracinho e no topo de cartoes de etapa.
Sombra e discreta e serve de sinal de interacao, nao de decoracao: cartao estatico tem borda e **nenhuma** sombra; `raised` ganha `--shadow-sm`; cartao clicavel sobe para `--shadow-md` no hover; modal usa `--shadow-lg`. Nunca sombra colorida, nunca sombra interna (a unica excecao e `--shadow-inset-rule`, uma hairline inferior).

### Interacao
- **Hover:** botao primario escurece um passo (`--green-500` → `--green-600`); secundario ganha borda grafite-800 e fundo grafite-25; ghost ganha fundo `--brand-soft`; cartao clicavel sobe 2px e ganha sombra md; link de texto escurece e a borda inferior fica verde cheia. **Nunca opacidade como hover.**
- **Press:** `translateY(1px)`, sem mudanca de cor e sem escala.
- **Foco:** anel de 2px `--green-400` com `outline-offset: 2px`; campos usam `--shadow-focus` (3px verde a 35%).
- **Desabilitado:** opacidade .42 e `cursor: not-allowed`.

### Movimento
Rapido e discreto: 140ms em hover/foco, 220ms em elevacao e abas, 420ms na entrada de modal. Easing padrao `cubic-bezier(.2,.6,.2,1)`. **Sem bounce, sem overshoot, sem parallax, sem autoplay.** Nada acima de 420ms. Revelacao em scroll, se usada, e um fade de 420ms com 8px de deslocamento — nunca mais que isso.

### Transparencia e blur
Tres usos, e nenhum mais: header (branco 92% + blur 8px), overlay de modal (grafite 55% + blur 2px) e bordas sobre fundo escuro (branco 18%). Nenhum cartao translucido, nenhum glassmorphism.

---

## 5. Uso do logo

- `assets/logo-efficax-primary.png` — versao padrao (verde + grafite), fundo transparente, para fundo claro.
- Sobre fundo escuro: mesma arte com `filter: brightness(0) invert(1)` (todo branco) — e assim que o componente `Logo` resolve `variant="onDark"`.
- `assets/logo-efficax-badge-gray.png` — selo circular cinza, para avatar e uso pequeno.

Altura minima 24px. Area de respiro = altura da letra "E" em todos os lados. Nao aplicar sombra, contorno, rotacao, outra cor ou recorte do "X".

> **Falta o vetor.** So existe raster (JPG/PNG). O PNG transparente foi gerado por remocao de fundo do JPG original, portanto tem bordas levemente suavizadas e **nao serve para impressao grande**. Peca ao designer original o SVG/AI/EPS.

---

## 6. Iconografia

Nenhum icone foi fornecido. O sistema adota o **Lucide** (`lucide-static@0.446.0`, via CDN unpkg), consumido pelo componente `Icon`, que aplica o SVG como `mask-image` para que o glifo herde `currentColor`.

- Estilo: stroke de 2px, cantos retos, sem preenchimento — combina com o desenho linear e fino do logo.
- Tamanhos: 14 / 16 / 18 / 20 / 22 px. Icone de servico vive em um quadrado de 40px com fundo `--brand-soft` e glifo `--green-700`.
- Set em uso: `handshake`, `trending-up`, `calculator`, `landmark`, `search-check`, `file-text`, `check`, `arrow-right`, `chevron-right`, `chevron-down`, `download`, `x`, `info`, `mail`, `phone`, `map-pin`, `clock`, `linkedin`.
- **Sem emoji. Sem dingbat unicode.** Bullets de lista sao pontos de 4px na cor da marca, desenhados em CSS, nunca caracteres.
- Icone nunca aparece sozinho como acao sem `aria-label` (ver `IconButton`).

> **Substituicao sinalizada:** Lucide e uma escolha nossa, nao da marca. Se a EFFICAX ja usa outro set (ou tem icones proprios), envie os arquivos e eu troco — o componente `Icon` isola essa dependencia em um unico lugar.

---

## 7. Caveats

1. Fontes sao aproximacoes do Google Fonts; nenhum arquivo original foi fornecido.
2. Logo so existe em raster; o PNG transparente e derivado do JPG.
3. Sem fotografia — todos os espacos de imagem estao marcados como reservados.
4. Todo o conteudo dos kits (numeros, casos, depoimentos, honorarios, contato) e **ficticio e ilustrativo**, escrito a partir do briefing para demonstrar formato.
5. Nao havia site, Figma ou codebase anterior: os UI kits sao propostas de estrutura, nao recriacoes.
