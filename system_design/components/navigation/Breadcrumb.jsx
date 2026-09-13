import React from 'react';
import { Icon } from '../brand/Icon.jsx';

export function Breadcrumb({items=[],style,...rest}){
  return (
    <nav aria-label="Trilha" style={{display:'flex',alignItems:'center',gap:'var(--space-2)',flexWrap:'wrap',...style}} {...rest}>
      {items.map((it,i)=>{const last=i===items.length-1;const l=it.label||it;
        return (
          <React.Fragment key={l}>
            {last
              ? <span style={{font:'var(--fw-medium) var(--fs-caption)/1.3 var(--font-sans)',color:'var(--graphite-700)'}}>{l}</span>
              : <a href={it.href||'#'} style={{font:'var(--fw-regular) var(--fs-caption)/1.3 var(--font-sans)',color:'var(--text-muted)',borderBottom:0}}>{l}</a>}
            {!last&&<Icon name="chevron-right" size={12} style={{color:'var(--graphite-300)'}}/>}
          </React.Fragment>
        );})}
    </nav>
  );
}
