import React from 'react';

export function Radio({label,description,name,value,checked,disabled,onChange,style,...rest}){
  return (
    <label style={{display:'flex',gap:'var(--space-3)',alignItems:'flex-start',cursor:disabled?'not-allowed':'pointer',opacity:disabled?.5:1,...style}}>
      <input type="radio" name={name} value={value} checked={checked} disabled={disabled} onChange={onChange}
        style={{position:'absolute',opacity:0,width:0,height:0}} {...rest}/>
      <span style={{width:18,height:18,flex:'none',marginTop:2,borderRadius:'var(--radius-pill)',
        border:'1px solid '+(checked?'var(--brand)':'var(--border-strong)'),background:'#fff',
        display:'flex',alignItems:'center',justifyContent:'center',transition:'var(--transition-control)'}}>
        {checked&&<span style={{width:9,height:9,borderRadius:'var(--radius-pill)',background:'var(--brand)'}}/>}
      </span>
      <span>
        <span style={{font:'var(--fw-regular) var(--fs-body-sm)/1.45 var(--font-sans)',color:'var(--graphite-800)'}}>{label}</span>
        {description&&<span style={{display:'block',font:'var(--fw-regular) var(--fs-caption)/1.45 var(--font-sans)',color:'var(--text-muted)',marginTop:2}}>{description}</span>}
      </span>
    </label>
  );
}
