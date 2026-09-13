const {Logo,Button,Icon,SectionLabel,Rule}=window.EFFICAXDesignSystem_edde19;
const NAV=[['home','Inicio'],['servicos','Servicos'],['casos','Casos'],['contato','Contato']];

function SiteHeader({page,go}){
  return (
    <header style={{position:'sticky',top:0,zIndex:30,background:'rgba(255,255,255,.92)',backdropFilter:'blur(8px)',borderBottom:'1px solid var(--border-subtle)'}}>
      <div className="wrap" style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:78}}>
        <a href="#" onClick={e=>{e.preventDefault();go('home')}} style={{borderBottom:0,display:'flex'}}><Logo height={34} assetBase="../../assets/"/></a>
        <nav style={{display:'flex',alignItems:'center',gap:'var(--space-6)'}}>
          {NAV.map(([k,l])=>(
            <a key={k} href="#" onClick={e=>{e.preventDefault();go(k)}}
              style={{borderBottom:'2px solid '+(page===k?'var(--brand)':'transparent'),paddingBottom:3,
                font:(page===k?'var(--fw-semibold)':'var(--fw-regular)')+' var(--fs-body-sm)/1.3 var(--font-sans)',
                color:page===k?'var(--graphite-900)':'var(--text-muted)'}}>{l}</a>))}
          <Button size="sm" onClick={()=>go('contato')}>Agendar diagnostico</Button>
        </nav>
      </div>
    </header>);
}

function SiteFooter({go}){
  return (
    <footer style={{background:'var(--surface-dark)',color:'var(--graphite-300)',paddingTop:'var(--space-8)',paddingBottom:'var(--space-6)',marginTop:0}}>
      <div className="wrap">
        <div style={{display:'grid',gridTemplateColumns:'1.4fr 1fr 1fr',gap:'var(--space-7)'}}>
          <div>
            <Logo variant="onDark" height={30} assetBase="../../assets/"/>
            <p style={{margin:'var(--space-4) 0 0',font:'400 var(--fs-body-sm)/1.7 var(--font-sans)',color:'var(--graphite-300)',maxWidth:'34ch'}}>
              Assessoria financeira para empresas de pequeno e medio porte. M&A, controladoria, funding, valuation e analise de novos negocios.
            </p>
          </div>
          <div>
            <div style={{font:'var(--type-eyebrow)',letterSpacing:'var(--ls-label)',textTransform:'uppercase',color:'var(--green-400)',marginBottom:'var(--space-4)'}}>Servicos</div>
            {['M&A','Controladoria','Funding','Valuation','Novos negocios'].map(s=>(
              <a key={s} href="#" onClick={e=>{e.preventDefault();go('servicos')}} style={{display:'block',color:'var(--graphite-300)',borderBottom:0,font:'400 var(--fs-body-sm)/2.1 var(--font-sans)'}}>{s}</a>))}
          </div>
          <div>
            <div style={{font:'var(--type-eyebrow)',letterSpacing:'var(--ls-label)',textTransform:'uppercase',color:'var(--green-400)',marginBottom:'var(--space-4)'}}>Contato</div>
            <div style={{display:'flex',flexDirection:'column',gap:'var(--space-3)',font:'400 var(--fs-body-sm)/1.5 var(--font-sans)'}}>
              <span style={{display:'flex',gap:10,alignItems:'center'}}><Icon name="mail" size={15}/>contato@efficax.com.br</span>
              <span style={{display:'flex',gap:10,alignItems:'center'}}><Icon name="phone" size={15}/>+55 11 0000-0000</span>
              <span style={{display:'flex',gap:10,alignItems:'center'}}><Icon name="linkedin" size={15}/>/company/efficax</span>
            </div>
          </div>
        </div>
        <div style={{marginTop:'var(--space-7)',paddingTop:'var(--space-4)',borderTop:'1px solid var(--border-on-dark)',display:'flex',justifyContent:'space-between',font:'400 var(--fs-caption)/1.5 var(--font-sans)',color:'var(--graphite-400)'}}>
          <span>© 2026 EFFICAX Assessoria Financeira</span><span>Sao Paulo · SP</span>
        </div>
      </div>
    </footer>);
}

function PhotoSlot({height=320,label='Espaco reservado para foto — a marca ainda nao forneceu imagens',style}){
  return (<div style={{height,background:'var(--graphite-50)',border:'1px dashed var(--border-default)',
    display:'grid',placeItems:'center',textAlign:'center',padding:'var(--space-5)',
    font:'400 var(--fs-caption)/1.5 var(--font-sans)',color:'var(--text-subtle)',...style}}>{label}</div>);
}

function Section({label,title,intro,children,tone='page',compact=false}){
  const dark=tone==='dark';
  return (
    <section style={{background:tone==='sunken'?'var(--surface-sunken)':dark?'var(--surface-dark)':'var(--surface-page)',
      padding:(compact?'var(--section-y-compact)':'var(--section-y)')+' 0'}}>
      <div className="wrap">
        {label&&<SectionLabel tone={dark?'onDark':'brand'}>{label}</SectionLabel>}
        {title&&<h2 style={{marginTop:'var(--space-4)',fontSize:'var(--fs-h2)',maxWidth:'24ch',color:dark?'#fff':'var(--text-strong)'}}>{title}</h2>}
        {intro&&<p style={{marginTop:'var(--space-3)',font:'400 var(--fs-body-lg)/1.62 var(--font-sans)',color:dark?'var(--graphite-300)':'var(--text-body)',maxWidth:'58ch'}}>{intro}</p>}
        <div style={{marginTop:'var(--space-7)'}}>{children}</div>
      </div>
    </section>);
}

Object.assign(window,{SiteHeader,SiteFooter,PhotoSlot,Section,NAV});
