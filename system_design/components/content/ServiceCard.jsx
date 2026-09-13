import React from 'react';
import { Card } from '../core/Card.jsx';
import { Icon } from '../brand/Icon.jsx';

export function ServiceCard({icon='trending-up',title,description,items=[],href,style,...rest}){
  return (
    <Card href={href} variant="default" style={{display:'flex',flexDirection:'column',gap:'var(--space-4)',height:'100%',...style}} {...rest}>
      <span style={{width:40,height:40,display:'flex',alignItems:'center',justifyContent:'center',
        background:'var(--brand-soft)',color:'var(--green-700)',borderRadius:'var(--radius-xs)'}}>
        <Icon name={icon} size={20}/>
      </span>
      <h3 style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-h4)',fontWeight:'var(--fw-medium)',color:'var(--text-strong)',margin:0,lineHeight:1.3}}>{title}</h3>
      {description&&<p style={{margin:0,font:'var(--fw-regular) var(--fs-body-sm)/1.62 var(--font-sans)',color:'var(--text-body)'}}>{description}</p>}
      {items.length>0&&<ul style={{margin:'auto 0 0',padding:0,listStyle:'none',display:'flex',flexDirection:'column',gap:'var(--space-2)',paddingTop:'var(--space-2)'}}>
        {items.map(i=>(
          <li key={i} style={{display:'flex',gap:'var(--space-2)',alignItems:'flex-start',
            font:'var(--fw-regular) var(--fs-caption)/1.5 var(--font-sans)',color:'var(--text-muted)'}}>
            <span style={{width:4,height:4,borderRadius:'50%',background:'var(--brand)',marginTop:7,flex:'none'}}/>{i}
          </li>))}
      </ul>}
    </Card>
  );
}
