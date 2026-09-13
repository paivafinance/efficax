import React from 'react';

export function SectionLabel({children,tone='brand',rule=true,style,...rest}){
  const colors={brand:'var(--green-700)',muted:'var(--text-muted)',onDark:'var(--green-400)'};
  return (
    <div style={{display:'flex',alignItems:'center',gap:'var(--space-3)',...style}} {...rest}>
      {rule&&<span style={{width:28,height:'var(--border-width-accent)',background:tone==='onDark'?'var(--green-400)':'var(--brand)',flex:'none'}}/>}
      <span style={{font:'var(--type-eyebrow)',letterSpacing:'var(--ls-label)',textTransform:'uppercase',color:colors[tone]}}>{children}</span>
    </div>
  );
}
