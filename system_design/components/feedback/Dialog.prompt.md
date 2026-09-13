Modal para uma tarefa curta (agendar conversa, baixar material).

```jsx
<Dialog open={open} title="Agendar diagnostico" description="Resposta em ate 1 dia util."
  onClose={()=>setOpen(false)} footer={<><Button variant="secondary">Cancelar</Button><Button>Enviar</Button></>}>
  <Input label="E-mail corporativo" />
</Dialog>
```
