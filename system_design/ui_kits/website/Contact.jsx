const {Input,Select,Checkbox,Radio,Button,Card,SectionLabel,Icon,Dialog,Rule}=window.EFFICAXDesignSystem_edde19;

function ContactPage({go}){
  const [etapa,setEtapa]=React.useState('avaliando');
  const [enviado,setEnviado]=React.useState(false);
  const [erro,setErro]=React.useState('');
  const [email,setEmail]=React.useState('');
  const submit=e=>{e.preventDefault();
    if(!/.+@.+\..+/.test(email)){setErro('Informe um e-mail valido.');return}
    setErro('');setEnviado(true)};
  return (<main>
    <section style={{padding:'var(--space-8) 0 var(--section-y-compact)'}}>
      <div className="wrap" style={{display:'grid',gridTemplateColumns:'1fr .8fr',gap:'var(--space-8)',alignItems:'start'}}>
        <div>
          <SectionLabel>Contato</SectionLabel>
          <h1 style={{marginTop:'var(--space-4)',fontSize:'var(--fs-h1)',maxWidth:'22ch'}}>Agende um diagnostico de 45 minutos.</h1>
          <p style={{marginTop:'var(--space-3)',font:'400 var(--fs-body-lg)/1.62 var(--font-sans)',color:'var(--text-body)',maxWidth:'52ch'}}>
            Conte o momento da empresa. Respondemos em ate 1 dia util com um horario e a lista do que precisamos ver.
          </p>
          <form onSubmit={submit} style={{marginTop:'var(--space-7)',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-5)',maxWidth:620}}>
            <Input label="Nome" placeholder="Como podemos te chamar?" required/>
            <Input label="Empresa" placeholder="Razao social ou nome fantasia"/>
            <Input label="E-mail corporativo" type="email" placeholder="nome@empresa.com.br" required
              value={email} error={erro} onChange={e=>setEmail(e.target.value)}/>
            <Select label="Faturamento anual" placeholder="Selecione"
              options={['Ate R$ 10 mi','R$ 10–50 mi','R$ 50–200 mi','Acima de R$ 200 mi']}/>
            <div style={{gridColumn:'1 / -1'}}>
              <div style={{font:'600 var(--fs-body-sm)/1.3 var(--font-sans)',color:'var(--graphite-800)',marginBottom:'var(--space-3)'}}>Em que momento voce esta?</div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-3)'}}>
                {[['avaliando','Avaliando uma venda ou compra'],['captando','Captando recursos'],['organizando','Organizando o financeiro'],['analisando','Analisando um novo negocio']].map(([v,l])=>(
                  <Radio key={v} name="etapa" value={v} label={l} checked={etapa===v} onChange={()=>setEtapa(v)}/>))}
              </div>
            </div>
            <div style={{gridColumn:'1 / -1'}}><Input label="Contexto" multiline rows={4} hint="Opcional — o que esta em aberto hoje?"/></div>
            <div style={{gridColumn:'1 / -1'}}><Checkbox defaultChecked label="Autorizo o contato por e-mail e telefone" description="Sem newsletter automatica."/></div>
            <div style={{gridColumn:'1 / -1',display:'flex',gap:'var(--space-3)',alignItems:'center'}}>
              <Button type="submit" size="lg">Enviar</Button>
              <span style={{font:'400 var(--fs-caption)/1.5 var(--font-sans)',color:'var(--text-subtle)'}}>Resposta em ate 1 dia util.</span>
            </div>
          </form>
        </div>
        <Card variant="raised" style={{position:'sticky',top:100}}>
          <SectionLabel>Escritorio</SectionLabel>
          <div style={{marginTop:'var(--space-5)',display:'flex',flexDirection:'column',gap:'var(--space-4)',font:'400 var(--fs-body-sm)/1.6 var(--font-sans)',color:'var(--graphite-800)'}}>
            <span style={{display:'flex',gap:12}}><Icon name="map-pin" size={16} style={{color:'var(--brand)'}}/>Sao Paulo · SP</span>
            <Rule/>
            <span style={{display:'flex',gap:12}}><Icon name="mail" size={16} style={{color:'var(--brand)'}}/>contato@efficax.com.br</span>
            <span style={{display:'flex',gap:12}}><Icon name="phone" size={16} style={{color:'var(--brand)'}}/>+55 11 0000-0000</span>
            <span style={{display:'flex',gap:12}}><Icon name="clock" size={16} style={{color:'var(--brand)'}}/>Seg a sex, 9h–18h</span>
          </div>
          <div style={{marginTop:'var(--space-6)',padding:'var(--space-4)',background:'var(--brand-soft)',borderRadius:'var(--radius-xs)',font:'400 var(--fs-caption)/1.6 var(--font-sans)',color:'var(--green-800)'}}>
            Dados de contato sao exemplos — substituir pelos reais da EFFICAX.
          </div>
        </Card>
      </div>
    </section>
    <Dialog open={enviado} title="Recebemos seu contato" description="Um assessor responde em ate 1 dia util com um horario."
      onClose={()=>setEnviado(false)} footer={<Button onClick={()=>{setEnviado(false);go('home')}}>Voltar ao inicio</Button>}/>
  </main>);
}
window.ContactPage=ContactPage;
