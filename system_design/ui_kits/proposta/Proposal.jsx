const {Logo,SectionLabel,Badge,DataTable,Stat,Rule,Icon,Card,Quote}=window.EFFICAXDesignSystem_edde19;

function Page({n,children,tone='light'}){
  const dark=tone==='dark';
  return (<div className="page" style={dark?{background:'var(--surface-dark)'}:null}>
    {children}
    <div className="pfoot" style={dark?{borderColor:'var(--border-on-dark)',color:'var(--graphite-400)'}:null}>
      <span>EFFICAX Assessoria Financeira · Confidencial</span>
      <span style={{fontFamily:'var(--font-mono)'}}>{n}</span>
    </div>
  </div>);
}

function H2({children}){return <h2 style={{fontSize:'var(--fs-h2)',marginTop:'var(--space-4)',maxWidth:'26ch'}}>{children}</h2>}
function Body({children,style}){return <p style={{margin:'var(--space-4) 0 0',font:'400 var(--fs-body)/1.68 var(--font-sans)',color:'var(--text-body)',maxWidth:'66ch',...style}}>{children}</p>}

function Proposal(){
  return (<div>
    {/* ---- Capa ---- */}
    <Page n="1 / 4" tone="dark">
      <Logo variant="onDark" height={34} assetBase="../../assets/"/>
      <div style={{marginTop:'auto'}}>
        <div style={{width:56,height:3,background:'var(--brand)'}}/>
        <div style={{font:'var(--type-eyebrow)',letterSpacing:'var(--ls-label)',textTransform:'uppercase',color:'var(--green-400)',marginTop:'var(--space-5)'}}>Proposta comercial</div>
        <h1 style={{marginTop:'var(--space-4)',fontSize:'var(--fs-display-2)',lineHeight:1.08,letterSpacing:'var(--ls-display)',color:'#fff',maxWidth:'22ch'}}>
          Assessoria em M&A para a venda de participacao minoritaria
        </h1>
        <p style={{marginTop:'var(--space-5)',font:'400 var(--fs-body-lg)/1.6 var(--font-sans)',color:'var(--graphite-300)',maxWidth:'46ch'}}>
          Preparada para a diretoria da Industria Alfa S.A.
        </p>
        <div style={{marginTop:'var(--space-7)',display:'flex',gap:'var(--space-8)'}}>
          {[['Documento','PRP-2026-014'],['Data','30/06/2026'],['Validade','30 dias']].map(([k,v])=>(
            <div key={k}>
              <div style={{font:'var(--type-eyebrow)',letterSpacing:'var(--ls-label)',textTransform:'uppercase',color:'var(--graphite-400)'}}>{k}</div>
              <div style={{font:'500 var(--fs-body)/1.4 var(--font-mono)',color:'#fff',marginTop:6}}>{v}</div>
            </div>))}
        </div>
      </div>
    </Page>

    {/* ---- Contexto e escopo ---- */}
    <Page n="2 / 4">
      <SectionLabel>Contexto</SectionLabel>
      <H2>O que entendemos do momento da empresa.</H2>
      <Body>A Industria Alfa avalia a entrada de um socio financeiro para sustentar a expansao da unidade de Sorocaba. O time financeiro atual fecha o mes em 27 dias e nao possui material de apresentacao para investidores. A decisao precisa ser tomada no segundo semestre.</Body>
      <div style={{marginTop:'var(--space-7)'}}><SectionLabel>Escopo</SectionLabel></div>
      <div style={{marginTop:'var(--space-5)',display:'flex',flexDirection:'column',gap:'var(--space-4)'}}>
        {[['01','Preparacao','Revisao de dois anos de numeros, ajuste de EBITDA e construcao do teaser e do memorando de informacoes.'],
          ['02','Mercado','Mapeamento de compradores e fundos com tese compativel, abordagem sob sigilo e coordenacao das reunioes.'],
          ['03','Due diligence','Organizacao do data room, resposta a listas de perguntas e acompanhamento dos assessores juridicos.'],
          ['04','Fechamento','Negociacao de preco, estrutura de pagamento e acordo de acionistas ate a assinatura.']].map(([n,t,d])=>(
          <div key={n} style={{display:'grid',gridTemplateColumns:'48px 1fr',gap:'var(--space-4)',borderTop:'1px solid var(--border-subtle)',paddingTop:'var(--space-4)'}}>
            <div style={{font:'500 var(--fs-body)/1 var(--font-mono)',color:'var(--green-700)'}}>{n}</div>
            <div><h4 style={{fontSize:'var(--fs-h4)'}}>{t}</h4>
              <p style={{margin:'6px 0 0',font:'400 var(--fs-body-sm)/1.62 var(--font-sans)',color:'var(--text-muted)',maxWidth:'62ch'}}>{d}</p></div>
          </div>))}
      </div>
      <div style={{marginTop:'var(--space-7)',display:'flex',gap:'var(--space-3)'}}>
        <Badge tone="brand">M&amp;A</Badge><Badge>Sell-side</Badge><Badge tone="dark">Confidencial</Badge>
      </div>
    </Page>

    {/* ---- Numeros ---- */}
    <Page n="3 / 4">
      <SectionLabel>Base numerica</SectionLabel>
      <H2>Os numeros que sustentam a conversa.</H2>
      <Body>Dados fornecidos pela companhia, ajustados por eventos nao recorrentes. Todos os valores em R$ mil.</Body>
      <div style={{marginTop:'var(--space-6)'}}>
        <DataTable caption="Demonstrativo resumido — 2022 a 2024 (R$ mil)"
          columns={[{key:'l',label:'Linha'},{key:'a',label:'2022',align:'right'},{key:'b',label:'2023',align:'right'},{key:'c',label:'2024',align:'right'},{key:'v',label:'CAGR',align:'right'}]}
          rows={[{l:'Receita liquida',a:'31.480',b:'38.940',c:'48.210',v:'+23,8%'},
                 {l:'Custo dos produtos',a:'19.740',b:'23.860',c:'28.410',v:'+20,0%'},
                 {l:'EBITDA ajustado',a:'3.910',b:'5.120',c:'7.880',v:'+42,0%'},
                 {l:'Margem EBITDA',a:'12,4%',b:'13,1%',c:'16,3%',v:'+3,9 p.p.'},
                 {l:'Divida liquida',a:'14.100',b:'12.400',c:'9.150',v:'-19,4%'},
                 {l:'Divida liquida / EBITDA',a:'3,6x',b:'2,4x',c:'1,2x',v:'-2,4x'}]}/>
      </div>
      <div style={{marginTop:'var(--space-7)',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--space-5)',paddingTop:'var(--space-5)',borderTop:'1px solid var(--border-subtle)'}}>
        <Stat prefix="R$" value="48.210" label="receita liquida 2024 (R$ mil)"/>
        <Stat value="16,3" suffix="%" label="margem EBITDA ajustada" tone="brand"/>
        <Stat value="1,2" suffix="x" label="divida liquida sobre EBITDA"/>
      </div>
      <div style={{marginTop:'var(--space-7)'}}>
        <SectionLabel>Faixa indicativa de valor</SectionLabel>
        <div style={{marginTop:'var(--space-5)',display:'flex',alignItems:'flex-end',gap:16,height:150}}>
          {[['5,0x','39.400',56],['6,0x','47.280',80],['7,0x','55.160',104],['8,0x','63.040',128]].map(([m,v,h],i)=>(
            <div key={m} style={{flex:1,textAlign:'center'}}>
              <div style={{font:'500 var(--fs-caption)/1.4 var(--font-mono)',color:'var(--graphite-800)',marginBottom:6}}>{v}</div>
              <div style={{height:h,background:'var(--chart-'+(i+1)+')'}}/>
              <div style={{font:'400 var(--fs-caption)/1.4 var(--font-mono)',color:'var(--text-muted)',paddingTop:6}}>{m} EBITDA</div>
            </div>))}
        </div>
        <p style={{margin:'var(--space-4) 0 0',font:'400 var(--fs-caption)/1.6 var(--font-sans)',color:'var(--text-subtle)'}}>
          Faixa calculada sobre o EBITDA ajustado de 2024. Multiplos observados em transacoes comparaveis do setor nos ultimos 24 meses.
        </p>
      </div>
    </Page>

    {/* ---- Investimento ---- */}
    <Page n="4 / 4">
      <SectionLabel>Investimento</SectionLabel>
      <H2>Honorarios e cronograma.</H2>
      <div style={{marginTop:'var(--space-6)'}}>
        <DataTable
          columns={[{key:'i',label:'Item'},{key:'f',label:'Formato'},{key:'v',label:'Valor',align:'right'}]}
          rows={[{i:'Retainer mensal',f:'12 meses',v:'R$ 28.000'},
                 {i:'Success fee',f:'% sobre o valor da transacao',v:'1,8%'},
                 {i:'Despesas reembolsaveis',f:'mediante aprovacao previa',v:'ate R$ 15.000'}]}/>
      </div>
      <div style={{marginTop:'var(--space-7)'}}>
        <SectionLabel>Cronograma</SectionLabel>
        <div style={{marginTop:'var(--space-5)',display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:2}}>
          {[['Preparacao','M1–M3'],['Mercado','M3–M6'],['Due diligence','M6–M9'],['Fechamento','M9–M12']].map(([t,p],i)=>(
            <div key={t} style={{background:i%2?'var(--graphite-50)':'var(--brand-soft)',padding:'var(--space-4)'}}>
              <div style={{font:'600 var(--fs-body-sm)/1.3 var(--font-sans)',color:'var(--graphite-900)'}}>{t}</div>
              <div style={{font:'500 var(--fs-caption)/1.4 var(--font-mono)',color:'var(--green-700)',marginTop:4}}>{p}</div>
            </div>))}
        </div>
      </div>
      <div style={{marginTop:'var(--space-7)',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-5)'}}>
        <Card variant="sunken" padding="var(--space-5)">
          <SectionLabel>Time alocado</SectionLabel>
          <div style={{marginTop:'var(--space-4)',display:'flex',flexDirection:'column',gap:'var(--space-3)',font:'400 var(--fs-body-sm)/1.5 var(--font-sans)',color:'var(--graphite-800)'}}>
            <span>2 socios responsaveis pelo mandato</span><Rule/><span>1 analista dedicado em tempo integral</span><Rule/><span>Reuniao semanal de status com a diretoria</span>
          </div>
        </Card>
        <Card variant="outlineBrand" padding="var(--space-5)">
          <SectionLabel>Proximo passo</SectionLabel>
          <p style={{margin:'var(--space-4) 0 0',font:'400 var(--fs-body-sm)/1.62 var(--font-sans)',color:'var(--text-body)'}}>
            Assinatura do mandato e envio da lista de documentos para a fase de preparacao.
          </p>
          <div style={{marginTop:'var(--space-5)',display:'flex',flexDirection:'column',gap:'var(--space-4)'}}>
            <div style={{borderBottom:'1px solid var(--border-default)',height:36}}/>
            <div style={{font:'400 var(--fs-caption)/1.4 var(--font-sans)',color:'var(--text-subtle)'}}>Diretoria — Industria Alfa S.A.</div>
          </div>
        </Card>
      </div>
      <p style={{margin:'var(--space-7) 0 0',font:'400 var(--fs-caption)/1.6 var(--font-sans)',color:'var(--text-subtle)',maxWidth:'70ch'}}>
        Documento ilustrativo do design system. Empresa, numeros, honorarios e datas sao ficticios e servem apenas para demonstrar a formatacao de propostas e relatorios da EFFICAX.
      </p>
    </Page>
  </div>);
}
window.Proposal=Proposal;
