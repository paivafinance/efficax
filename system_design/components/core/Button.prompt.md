Botao de acao da EFFICAX — use `primary` uma vez por bloco, `secondary` para a alternativa e `ghost` para acoes terciarias/links de lista.

```jsx
<Button variant="primary" size="lg" href="/contato">Falar com um assessor</Button>
<Button variant="secondary">Baixar apresentacao</Button>
<Button variant="ghost" iconRight={<Icon name="arrow-right" size={16}/>}>Ver casos</Button>
```

Variantes: `primary | secondary | ghost | onDark | secondaryOnDark`. Tamanhos `sm | md | lg`. `onDark` existe para heros e slides com fundo grafite (texto grafite sobre verde para manter contraste). Nunca arredonde em pill.

Sobre fundo `--surface-dark` use `onDark` (acao primaria) e `secondaryOnDark` (alternativa). Nunca use `secondary` com cores sobrescritas inline em fundo escuro: o hover da variante clara pinta o fundo de `--graphite-25` e o texto branco desaparece.
