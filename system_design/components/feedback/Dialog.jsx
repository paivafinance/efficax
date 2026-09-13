import React from 'react';
import { IconButton } from '../core/IconButton.jsx';

export function Dialog({open=false,title,description,footer,width=520,onClose,children,style,...rest}){
  if(!open) return null;
  return (
    <div role="presentation" onClick={onClose}
      style={{position:'fixed',inset:0,background:'var(--overlay)',display:'flex',alignItems:'center',
        justifyContent:'center',padding:'var(--space-5)',zIndex:60,backdropFilter:'blur(2px)'}}>
      <div role="dialog" aria-modal="true" aria-label={title} onClick={e=>e.stopPropagation()}
        style={{background:'var(--surface-card)',borderRadius:'var(--radius-card)',boxShadow:'var(--shadow-lg)',
          width:'100%',maxWidth:width,padding:'var(--space-6)',...style}} {...rest}>
        <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:'var(--space-4)'}}>
          <div>
            {title&&<h3 style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-h3)',color:'var(--text-strong)',margin:0,lineHeight:1.2}}>{title}</h3>}
            {description&&<p style={{margin:'var(--space-2) 0 0',font:'var(--fw-regular) var(--fs-body-sm)/1.6 var(--font-sans)',color:'var(--text-muted)'}}>{description}</p>}
          </div>
          {onClose&&<IconButton name="x" label="Fechar" variant="ghost" size="sm" onClick={onClose}/>}
        </div>
        {children&&<div style={{marginTop:'var(--space-5)'}}>{children}</div>}
        {footer&&<div style={{marginTop:'var(--space-6)',display:'flex',gap:'var(--space-3)',justifyContent:'flex-end'}}>{footer}</div>}
      </div>
    </div>
  );
}
