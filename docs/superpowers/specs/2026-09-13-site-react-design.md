# Site EFFICAX em React — design

Data: 2026-09-13 · Status: em implementação

## Objetivo
Substituir a landing atual (HTML estático em `efficaxassessoria.com.br/Efficax_Landing`) por um site em React com apresentação de alto acabamento e animações sofisticadas, construído sobre o design system em `system_design/` (skill `efficax-design`).

## Decisões

| Tema | Decisão | Motivo |
|---|---|---|
| Stack | Vite + React 19 + TypeScript, CSS Modules, `motion` (ex-framer-motion), `lucide-react` | Saída estática (`dist/`) que cabe em qualquer hospedagem, inclusive a pasta atual. Sem Tailwind: o DS é baseado em custom properties e Tailwind brigaria com os tokens. |
| Local | `site/` na raiz do repo, `system_design/` intocado | Skill continua servindo proposta, slides e outros artefatos. |
| Tokens | `system_design/tokens/*.css` copiados para `site/src/styles/tokens/` | Fonte canônica continua sendo o DS; a cópia é build-time e documentada. |
| Conteúdo | Copy real do site atual (André Paiva, 25+ anos, R$ 70MM, R$ 150MM, contato), reescrita para as regras do DS (sentence case, sem emoji, sem "✓" unicode, números em mono tabular pt-BR) | O site atual já tem o posicionamento validado pelo cliente. |
| Tema | Único, seguindo o DS: base clara, hero e rodapé em grafite escuro, um bloco verde de CTA | Sem toggle de tema. O DS define uma cara só. |
| Fotos | Nenhuma foi fornecida. Sem PhotoSlot tracejado em produção: a seção "Quem toca" usa composição tipográfica + selo cinza. Slot de retrato preparado no código para troca futura. | Placeholder visível em produção parece inacabado. |

## Movimento — desvio deliberado do DS
O DS limita movimento a 420 ms, fade + 8 px, sem parallax, bounce, overshoot ou autoplay. Um site com "efeito WOW" exige mais no hero. Regra adotada:

- **Tier padrão (todo o site):** revelação em scroll fade + 8 px, 420 ms, `--ease-standard`, stagger de 60 ms. Hover/press/foco exatamente como o DS.
- **Tier cinematográfico (somente hero e números):** entrada coreografada de até ~1,2 s no carregamento (título por linha com máscara, painel "Resultado do mês" desenhando gráficos via `pathLength`, contadores de número). Easing `--ease-out`. Sem bounce, sem overshoot.
- **Scroll-linked (Método):** régua de progresso que preenche com o scroll. Não é parallax: nenhum elemento se move em velocidade diferente do documento.
- **Header:** transparente sobre o hero escuro; vira branco 92% + blur 8px ao rolar (mesmo elemento, mesma regra de blur do DS).
- `prefers-reduced-motion`: tudo colapsa para fade instantâneo; gráficos aparecem prontos.

Mantido sem exceção: sem gradiente, sem glassmorphism, sem texturas, sem opacidade como hover, raios 3/5 px, sombra só como sinal de interação.

## Estrutura da página (uma rota, âncoras)
1. Header fixo (78 px) — logo, Serviços · Casos · Método · Sobre, CTA "Falar com a Efficax"
2. Hero (grafite-800) — eyebrow, h1 Newsreader, parágrafo, 2 botões; painel "Resultado do mês" animado à direita
3. Faixa de números — 4 `Stat` com contador
4. O problema — 3 dores do dono de PME, cada uma com "o que fazemos"; depois "Na prática": 4 casos reais da trajetória do André (setor · frente, número em mono, situação / o que foi feito / resultado)
5. Serviços — 7 cartões com 3 entregáveis e ritmo cada, grade de 3; cartão escuro de diagnóstico ocupa 2 colunas
6. Método — 3 passos com régua de progresso ligada ao scroll
7. Por que Efficax — 4 itens com ícone `check`, fundo grafite
8. Quem toca — 50/50: bio + credenciais à esquerda; cartão com retrato de 128 px e 4 números grandes à direita; trajetória de 8 posições abaixo
9. CTA verde — WhatsApp + e-mail
10. Footer grafite

Revisão de 2026-09-13 (pedido do Thiago): seção "Áreas de expertise" removida por redundância com Serviços; casos adicionados ao problema; serviços ganharam entregáveis e ritmo; "Quem toca" passou a 50/50.

## Verificação
- `tsc --noEmit`, `vite build` limpos
- Vitest: formatação pt-BR dos números, âncoras da navegação batem com ids das seções, hook de reduced-motion
- Inspeção visual no browser (desktop 1280 e mobile 375) com screenshots
- Gate G2 (client-facing): `/code-review` ao final
