Tabela financeira. Coluna numerica sempre `align:"right"` — isso troca a fonte para mono tabular.

```jsx
<DataTable caption="Valores em R$ mil — 2024"
  columns={[{key:'linha',label:'Linha'},{key:'v24',label:'2024',align:'right'}]}
  rows={[{linha:'Receita liquida',v24:'48.210'}]} />
```
