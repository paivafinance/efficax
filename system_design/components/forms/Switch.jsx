import React from 'react';

export function Switch({label,checked,defaultChecked,disabled,onChange,style,...rest}){
  const [inner,setInner]=React.useState(!!defaultChecked);
  const on=checked!==undefined?checked:inner;
  const toggle=e=>{if(disabled)return;if(checked===undefined)setInner(!on);onChange&&onChange(e)};
  return (
    <label style={{display:'inline-flex',gap:'var(--space-3)',alignItems:'center',cursor:disabled?'not-allowed':'pointer',opacity:disabled?.5:1,...style}}>
      <input type="checkbox" role="switch" checked={on} disabled={disabled} onChange={toggle}
        style={{position:'absolute',opacity:0,width:0,height:0}} {...rest}/>
      <span style={{width:38,height:22,flex:'none',borderRadius:'var(--radius-pill)',padding:2,
        background:on?'var(--brand)':'var(--graphite-300)',transition:'background-color var(--dur-fast) var(--ease-standard)',display:'flex'}}>
        <span style={{width:18,height:18,borderRadius:'var(--radius-pill)',background:'#fff',
          boxShadow:'var(--shadow-xs)',transform:on?'translateX(16px)':'translateX(0)',
          transition:'transform var(--dur-fast) var(--ease-standard)'}}/>
      </span>
      {label&&<span style={{font:'var(--fw-regular) var(--fs-body-sm)/1.3 var(--font-sans)',color:'var(--graphite-800)'}}>{label}</span>}
    </label>
  );
}
