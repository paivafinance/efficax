const {Tabs,Breadcrumb,SectionLabel,DataTable,Button,Card,Icon,Badge,Rule}=window.EFFICAXDesignSystem_edde19;

const SERVICES={
  'M&A':{icon:'handshake',claim:'Conduzimos a transacao do primeiro estudo ate a assinatura.',
    entregas:['Preparacao da empresa e materiais (teaser, memorando)','Mapeamento e abordagem de compradores ou alvos','Coordenacao de due diligence','Negociacao de precos e condicoes'],
    prazo:'6 a 12 meses',time:'2 socios + 1 analista'},
  'Controladoria':{icon:'calculator',claim:'Colocamos a rotina financeira em ordem e mantemos assim.',
    entregas:['Fechamento mensal em ate 10 dias uteis','Orcamento anual e forecast trimestral','Painel de indicadores gerenciais','Rotina de conciliacao e controles'],
    prazo:'Contrato recorrente',time:'1 gerente + 1 analista'},
  'Funding':{icon:'landmark',claim:'Estruturamos capital na medida do plano, sem encarecer a operacao.',
    entregas:['Diagnostico da estrutura de capital','Negociacao com bancos e fundos','Modelagem de cenarios de servico da divida','Acompanhamento de covenants'],
    prazo:'3 a 6 meses',time:'1 socio + 1 analista'},
  'Valuation':{icon:'trending-up',claim:'Um numero defensavel, com as premissas abertas.',
    entregas:['Fluxo de caixa descontado','Multiplos de mercado comparaveis','Analise de sensibilidade','Laudo para negociacao ou societario'],
    prazo:'4 a 8 semanas',time:'1 socio + 1 analista'},
  'Novos negocios':{icon:'search-check',claim:'Analise de viabilidade antes de comprometer capital.',
    entregas:['Estudo de retorno (TIR, payback)','Analise de riscos e cenarios','Estrutura de investimento','Plano de implantacao'],
    prazo:'6 a 10 semanas',time:'1 socio + 1 analista'}
};

function ServicesPage({go}){
  const {Section}=window;
  const [tab,setTab]=React.useState('M&A');
  const s=SERVICES[tab];
  return (<main>
    <section style={{borderBottom:'1px solid var(--border-subtle)',padding:'var(--space-6) 0 var(--space-7)'}}>
      <div className="wrap">
        <Breadcrumb items={[{label:'Inicio',href:'#'},'Servicos']}/>
        <h1 style={{marginTop:'var(--space-4)',fontSize:'var(--fs-h1)',maxWidth:'26ch'}}>Cinco frentes, uma logica: decidir com numero.</h1>
        <div style={{marginTop:'var(--space-6)'}}><Tabs items={Object.keys(SERVICES)} value={tab} onChange={setTab}/></div>
      </div>
    </section>

    <section style={{padding:'var(--section-y-compact) 0'}}>
      <div className="wrap" style={{display:'grid',gridTemplateColumns:'1.4fr .6fr',gap:'var(--space-8)',alignItems:'start'}}>
        <div>
          <div style={{display:'flex',gap:'var(--space-4)',alignItems:'center'}}>
            <span style={{width:44,height:44,display:'grid',placeItems:'center',background:'var(--brand-soft)',color:'var(--green-700)',borderRadius:'var(--radius-xs)'}}><Icon name={s.icon} size={22}/></span>
            <h2 style={{fontSize:'var(--fs-h2)'}}>{tab}</h2>
          </div>
          <p style={{marginTop:'var(--space-5)',font:'400 var(--fs-body-lg)/1.62 var(--font-sans)',color:'var(--text-body)',maxWidth:'58ch'}}>{s.claim}</p>
          <div style={{marginTop:'var(--space-6)'}}><SectionLabel>Entregaveis</SectionLabel></div>
          <ul style={{listStyle:'none',padding:0,margin:'var(--space-4) 0 0',display:'flex',flexDirection:'column',gap:'var(--space-3)',maxWidth:'62ch'}}>
            {s.entregas.map(e=>(<li key={e} style={{display:'flex',gap:'var(--space-3)',alignItems:'flex-start',font:'400 var(--fs-body)/1.6 var(--font-sans)',color:'var(--text-body)',borderBottom:'1px solid var(--border-subtle)',paddingBottom:'var(--space-3)'}}>
              <Icon name="check" size={16} style={{color:'var(--brand)',marginTop:4}}/>{e}</li>))}
          </ul>
          <div style={{marginTop:'var(--space-7)'}}>
            <DataTable caption="Exemplo de impacto — cliente do setor industrial, valores em R$ mil"
              columns={[{key:'l',label:'Linha'},{key:'a',label:'Antes',align:'right'},{key:'b',label:'Depois',align:'right'},{key:'v',label:'Var.',align:'right'}]}
              rows={[{l:'Receita liquida',a:'38.940',b:'48.210',v:'+23,8%'},{l:'EBITDA ajustado',a:'5.120',b:'7.880',v:'+53,9%'},{l:'Divida liquida',a:'12.400',b:'9.150',v:'-26,2%'},{l:'Prazo de fechamento contabil',a:'27 dias',b:'9 dias',v:'-18 dias'}]}/>
          </div>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-4)',position:'sticky',top:100}}>
          <Card variant="raised">
            <SectionLabel>Formato</SectionLabel>
            <div style={{marginTop:'var(--space-4)',display:'flex',flexDirection:'column',gap:'var(--space-4)'}}>
              <div><div style={{font:'var(--type-eyebrow)',letterSpacing:'var(--ls-label)',textTransform:'uppercase',color:'var(--text-subtle)'}}>Prazo tipico</div>
                <div style={{font:'500 var(--fs-h4)/1.3 var(--font-mono)',color:'var(--graphite-900)',marginTop:4}}>{s.prazo}</div></div>
              <Rule/>
              <div><div style={{font:'var(--type-eyebrow)',letterSpacing:'var(--ls-label)',textTransform:'uppercase',color:'var(--text-subtle)'}}>Time alocado</div>
                <div style={{font:'400 var(--fs-body-sm)/1.5 var(--font-sans)',color:'var(--graphite-800)',marginTop:4}}>{s.time}</div></div>
            </div>
          </Card>
          <Card variant="dark">
            <h4 style={{color:'#fff',fontSize:'var(--fs-h4)'}}>Nao sabe por onde comecar?</h4>
            <p style={{margin:'var(--space-3) 0 var(--space-5)',font:'400 var(--fs-body-sm)/1.6 var(--font-sans)',color:'var(--graphite-300)'}}>O diagnostico aponta a frente mais urgente.</p>
            <Button variant="onDark" fullWidth onClick={()=>go('contato')}>Agendar</Button>
          </Card>
        </div>
      </div>
    </section>
  </main>);
}
window.ServicesPage=ServicesPage;
