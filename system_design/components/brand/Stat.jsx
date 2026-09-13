import React from 'react';

export function Stat({value,prefix,suffix,label,tone='default',align='left',style,...rest}){
  const c=tone==='onDark'?{v:'#fff',l:'var(--graphite-300)'}:tone==='brand'?{v:'var(--green-700)',l:'var(--text-muted)'}:{v:'var(--graphite-900)',l:'var(--text-muted)'};
  return (
    <div style={{textAlign:align,...style}} {...rest}>
      <div style={{fontFamily:'var(--font-mono)',fontWeight:'var(--fw-medium)',fontSize:'var(--fs-h1)',
        lineHeight:1.05,letterSpacing:'-0.02em',color:c.v,fontVariantNumeric:'tabular-nums'}}>
        {prefix&&<span style={{fontSize:'0.55em',verticalAlign:'0.35em',marginRight:2}}>{prefix}</span>}
        {value}
        {suffix&&<span style={{fontSize:'0.55em',verticalAlign:'0.35em',marginLeft:2}}>{suffix}</span>}
      </div>
      <div style={{marginTop:'var(--space-2)',font:'var(--fw-regular) var(--fs-body-sm)/1.45 var(--font-sans)',color:c.l,maxWidth:'28ch',...(align==='center'?{marginLeft:'auto',marginRight:'auto'}:null)}}>{label}</div>
    </div>
  );
}
