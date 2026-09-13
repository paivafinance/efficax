Campo de formulario. Use `multiline` em vez de um Textarea separado.

```jsx
<Input label="E-mail corporativo" type="email" placeholder="nome@empresa.com.br" required />
<Input label="Como podemos ajudar?" multiline rows={4} hint="Opcional" />
```

Rotulos em sentence case. Erro: frase curta, sem "Erro:".
