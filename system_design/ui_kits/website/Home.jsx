const {Button,Stat,ServiceCard,Quote,SectionLabel,Rule,Card,Icon,Badge}=window.EFFICAXDesignSystem_edde19;

function HomePage({go}){
  const {PhotoSlot,Section}=window;
  return (<main>
    <section style={{background:'var(--surface-dark)',color:'#fff',padding:'var(--space-9) 0'}}>
      <div className="wrap" style={{display:'grid',gridTemplateColumns:'1.15fr .85fr',gap:'var(--space-8)',alignItems:'center'}}>
        <div>
          <SectionLabel tone="onDark">Assessoria financeira</SectionLabel>
          <h1 style={{marginTop:'var(--space-4)',fontSize:'var(--fs-display-2)',lineHeight:1.08,letterSpacing:'var(--ls-display)',color:'#fff',maxWidth:'20ch'}}>
            Decisoes financeiras com base em numeros, nao em intuicao.
          </h1>
          <p style={{marginTop:'var(--space-5)',font:'400 var(--fs-body-lg)/1.62 var(--font-sans)',color:'var(--graphite-300)',maxWidth:'50ch'}}>
            Trabalhamos ao lado de empresas de pequeno e medio porte em M&A, controladoria, funding, valuation e analise de novos negocios.
          </p>
          <div style={{display:'flex',gap:'var(--space-3)',marginTop:'var(--space-6)'}}>
            <Button variant="onDark" size="lg" onClick={()=>go('contato')}>Agendar diagnostico</Button>
            <Button variant="secondaryOnDark" size="lg" onClick={()=>go('servicos')}>Ver servicos</Button>
          </div>
        </div>
        <PhotoSlot height={340} style={{background:'var(--graphite-700)',borderColor:'var(--border-on-dark)',color:'var(--graphite-400)'}}
          label="Espaco reservado para foto do time ou do escritorio"/>
      </div>
    </section>

    <section style={{borderBottom:'1px solid var(--border-subtle)',padding:'var(--space-7) 0'}}>
      <div className="wrap" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'var(--space-6)'}}>
        <Stat prefix="R$" value="1,2" suffix="bi" label="em transacoes assessoradas"/>
        <Stat value="140" suffix="+" label="mandatos concluidos"/>
        <Stat value="18" suffix="anos" label="de atuacao no mercado"/>
        <Stat value="9" suffix="setores" label="atendidos com recorrencia"/>
      </div>
    </section>

    <Section label="Servicos" title="Uma frente para cada decisao." intro="Cada servico entra em um momento diferente da empresa — da rotina financeira ate a mesa de negociacao.">
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--space-5)'}}>
        <ServiceCard icon="handshake" title="M&A" description="Conducao de compra e venda, da tese ao fechamento." items={['Preparacao da empresa','Mapeamento de compradores','Negociacao e closing']} href="#"/>
        <ServiceCard icon="calculator" title="Controladoria" description="Rotina financeira organizada e numeros confiaveis." items={['Fechamento mensal','Orcamento e forecast','Indicadores gerenciais']} href="#"/>
        <ServiceCard icon="landmark" title="Funding" description="Estrutura de capital adequada ao plano da empresa." items={['Credito bancario e mercado','Relacionamento com investidores','Modelagem de cenarios']} href="#"/>
      </div>
      <div style={{marginTop:'var(--space-5)',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--space-5)'}}>
        <ServiceCard icon="trending-up" title="Valuation" description="Quanto vale a empresa e o que sustenta esse numero." items={['Fluxo de caixa descontado','Multiplos comparaveis','Laudos para negociacao']} href="#"/>
        <ServiceCard icon="search-check" title="Novos negocios" description="Analise de viabilidade antes do investimento." items={['Estudo de retorno','Analise de risco','Plano de implantacao']} href="#"/>
        <Card variant="dark" style={{display:'flex',flexDirection:'column',justifyContent:'space-between',gap:'var(--space-5)'}}>
          <div>
            <SectionLabel tone="onDark">Diagnostico</SectionLabel>
            <h3 style={{marginTop:'var(--space-4)',fontSize:'var(--fs-h3)',color:'#fff',lineHeight:1.3}}>45 minutos sobre os numeros da sua empresa.</h3>
          </div>
          <Button variant="onDark" onClick={()=>go('contato')} iconRight={<Icon name="arrow-right" size={15}/>}>Agendar</Button>
        </Card>
      </div>
    </Section>

    <Section tone="sunken" label="Como trabalhamos" title="Quatro etapas, sem surpresa no meio do caminho." compact>
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'var(--space-5)'}}>
        {[['01','Diagnostico','Entendemos o caixa, a estrutura e a decisao em aberto.'],
          ['02','Plano','Definimos escopo, prazo e o numero que precisa melhorar.'],
          ['03','Execucao','Atuamos junto ao time financeiro, com reuniao semanal.'],
          ['04','Entrega','Relatorio, laudo ou transacao fechada — com o proximo passo claro.']].map(([n,t,d])=>(
          <div key={n} style={{borderTop:'var(--border-width-rule) solid var(--brand)',paddingTop:'var(--space-4)'}}>
            <div style={{font:'500 var(--fs-body-sm)/1 var(--font-mono)',color:'var(--green-700)'}}>{n}</div>
            <h4 style={{marginTop:'var(--space-3)',fontSize:'var(--fs-h4)'}}>{t}</h4>
            <p style={{marginTop:'var(--space-2)',font:'400 var(--fs-body-sm)/1.62 var(--font-sans)',color:'var(--text-muted)'}}>{d}</p>
          </div>))}
      </div>
    </Section>

    <Section label="Clientes" title="O que muda depois." compact>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-8)'}}>
        <Quote author="Marina Alves" role="CFO · Industria Alfa">A EFFICAX organizou nosso caixa antes da rodada. Fechamos em quatro meses.</Quote>
        <Quote author="Rafael Nunes" role="Socio · Distribuidora Beta">Entramos na negociacao sabendo exatamente quanto a empresa valia e por que.</Quote>
      </div>
    </Section>

    <section style={{background:'var(--surface-brand)',padding:'var(--space-8) 0'}}>
      <div className="wrap" style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'var(--space-6)'}}>
        <div>
          <h2 style={{fontSize:'var(--fs-h2)',color:'#fff',maxWidth:'28ch'}}>Vamos olhar os seus numeros juntos.</h2>
          <p style={{marginTop:'var(--space-3)',font:'400 var(--fs-body)/1.6 var(--font-sans)',color:'rgba(255,255,255,.92)'}}>Resposta em ate 1 dia util.</p>
        </div>
        <Button size="lg" onClick={()=>go('contato')} style={{background:'var(--graphite-900)',borderColor:'var(--graphite-900)',color:'#fff'}}>Agendar diagnostico</Button>
      </div>
    </section>
  </main>);
}
window.HomePage=HomePage;
