import React from 'react';
import { Icon } from '../brand/Icon.jsx';

export function Checkbox({label,description,checked,defaultChecked,disabled,onChange,style,...rest}){
  const [inner,setInner]=React.useState(!!defaultChecked);
  const on=checked!==undefined?checked:inner;
  const toggle=e=>{if(disabled)return;if(checked===undefined)setInner(!on);onChange&&onChange(e)};
  return (
    <label style={{display:'flex',gap:'var(--space-3)',alignItems:'flex-start',cursor:disabled?'not-allowed':'pointer',opacity:disabled?.5:1,...style}}>
      <input type="checkbox" checked={on} disabled={disabled} onChange={toggle}
        style={{position:'absolute',opacity:0,width:0,height:0}} {...rest}/>
      <span style={{width:18,height:18,flex:'none',marginTop:2,borderRadius:'var(--radius-xs)',
        border:'1px solid '+(on?'var(--brand)':'var(--border-strong)'),background:on?'var(--brand)':'#fff',
        display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',transition:'var(--transition-control)'}}>
        {on&&<Icon name="check" size={13}/>}
      </span>
      <span>
        <span style={{font:'var(--fw-regular) var(--fs-body-sm)/1.45 var(--font-sans)',color:'var(--graphite-800)'}}>{label}</span>
        {description&&<span style={{display:'block',font:'var(--fw-regular) var(--fs-caption)/1.45 var(--font-sans)',color:'var(--text-muted)',marginTop:2}}>{description}</span>}
      </span>
    </label>
  );
}
