const {Tag,Card,Badge,Stat,SectionLabel,Button,Icon,Quote}=window.EFFICAXDesignSystem_edde19;

const CASES=[
  {setor:'Industria',servico:'M&A',titulo:'Venda de participacao minoritaria para fundo de private equity',resumo:'Preparacao de dois anos de numeros, materiais e negociacao com seis interessados.',metrica:['R$','92','mi','valor da transacao']},
  {setor:'Distribuicao',servico:'Controladoria',titulo:'Fechamento contabil de 27 para 9 dias',resumo:'Reorganizacao da rotina financeira e painel gerencial mensal para o conselho.',metrica:['','-18','dias','no prazo de fechamento']},
  {setor:'Servicos',servico:'Funding',titulo:'Troca de divida curta por linha de longo prazo',resumo:'Renegociacao com tres bancos e alongamento do perfil da divida.',metrica:['','-3,4','p.p.','no custo medio da divida']},
  {setor:'Agro',servico:'Valuation',titulo:'Laudo para entrada de novo socio',resumo:'Fluxo de caixa descontado com premissas revisadas junto ao time comercial.',metrica:['R$','210','mi','valor de referencia']},
  {setor:'Saude',servico:'Novos negocios',titulo:'Viabilidade de duas novas unidades',resumo:'Estudo de retorno comparando expansao propria e franquia.',metrica:['','22','%','TIR do cenario aprovado']},
  {setor:'Tecnologia',servico:'M&A',titulo:'Aquisicao de concorrente regional',resumo:'Tese de consolidacao, abordagem do alvo e coordenacao da due diligence.',metrica:['','4','meses','da abordagem ao closing']}
];

function CasesPage({go}){
  const {Section}=window;
  const [filtro,setFiltro]=React.useState('Todos');
  const filtros=['Todos','M&A','Controladoria','Funding','Valuation','Novos negocios'];
  const lista=filtro==='Todos'?CASES:CASES.filter(c=>c.servico===filtro);
  return (<main>
    <section style={{padding:'var(--space-8) 0 var(--space-6)',borderBottom:'1px solid var(--border-subtle)'}}>
      <div className="wrap">
        <SectionLabel>Casos</SectionLabel>
        <h1 style={{marginTop:'var(--space-4)',fontSize:'var(--fs-h1)',maxWidth:'24ch'}}>Mandatos concluidos, sem nome de cliente.</h1>
        <p style={{marginTop:'var(--space-3)',font:'400 var(--fs-body-lg)/1.62 var(--font-sans)',color:'var(--text-body)',maxWidth:'56ch'}}>
          Os numeros sao reais; os nomes ficam em sigilo. Podemos detalhar cada caso em uma conversa.
        </p>
        <div style={{display:'flex',gap:'var(--space-2)',marginTop:'var(--space-6)',flexWrap:'wrap'}}>
          {filtros.map(t=><Tag key={t} active={t===filtro} onClick={()=>setFiltro(t)}>{t}</Tag>)}
        </div>
      </div>
    </section>
    <section style={{padding:'var(--section-y-compact) 0'}}>
      <div className="wrap" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--space-5)'}}>
        {lista.map(c=>(
          <Card key={c.titulo} href="#" style={{display:'flex',flexDirection:'column',gap:'var(--space-4)'}}>
            <div style={{display:'flex',gap:'var(--space-2)'}}><Badge tone="brand">{c.servico}</Badge><Badge>{c.setor}</Badge></div>
            <h3 style={{fontSize:'var(--fs-h4)',fontFamily:'var(--font-display)',fontWeight:'var(--fw-medium)',lineHeight:1.3}}>{c.titulo}</h3>
            <p style={{margin:0,font:'400 var(--fs-body-sm)/1.62 var(--font-sans)',color:'var(--text-muted)'}}>{c.resumo}</p>
            <div style={{marginTop:'auto',paddingTop:'var(--space-4)',borderTop:'1px solid var(--border-subtle)'}}>
              <Stat prefix={c.metrica[0]} value={c.metrica[1]} suffix={c.metrica[2]} label={c.metrica[3]}
                style={{transform:'scale(.8)',transformOrigin:'left'}}/>
            </div>
          </Card>))}
      </div>
      <div className="wrap" style={{marginTop:'var(--space-8)',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-8)',alignItems:'center'}}>
        <Quote author="Rafael Nunes" role="Socio · Distribuidora Beta">Entramos na negociacao sabendo exatamente quanto a empresa valia e por que.</Quote>
        <Card variant="sunken" style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'var(--space-5)'}}>
          <div><h4 style={{fontSize:'var(--fs-h4)'}}>Quer o detalhe de um caso?</h4>
            <p style={{margin:'var(--space-2) 0 0',font:'400 var(--fs-body-sm)/1.6 var(--font-sans)',color:'var(--text-muted)'}}>Enviamos o material sob acordo de confidencialidade.</p></div>
          <Button onClick={()=>go('contato')} iconRight={<Icon name="arrow-right" size={15}/>}>Solicitar</Button>
        </Card>
      </div>
    </section>
  </main>);
}
window.CasesPage=CasesPage;
