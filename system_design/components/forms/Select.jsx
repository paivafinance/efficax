import React from 'react';
import { Icon } from '../brand/Icon.jsx';
const control=(focus,error,disabled)=>({
  width:'100%',fontFamily:'var(--font-sans)',fontSize:'var(--fs-body)',color:'var(--graphite-900)',
  background:disabled?'var(--graphite-50)':'#fff',padding:'11px 13px',
  border:'1px solid '+(error?'var(--negative-500)':focus?'var(--green-500)':'var(--border-default)'),
  borderRadius:'var(--radius-control)',outline:'none',
  boxShadow:focus?'var(--shadow-focus)':'none',
  transition:'var(--transition-control)',
  cursor:disabled?'not-allowed':'auto'
});
function FieldShell({label,hint,error,required,htmlFor,children,style}){
  return (
    <div style={{display:'flex',flexDirection:'column',gap:'var(--space-2)',...style}}>
      {label&&<label htmlFor={htmlFor} style={{font:'var(--fw-semibold) var(--fs-body-sm)/1.3 var(--font-sans)',color:'var(--graphite-800)'}}>
        {label}{required&&<span style={{color:'var(--brand)',marginLeft:3}}>*</span>}</label>}
      {children}
      {(error||hint)&&<span style={{font:'var(--fw-regular) var(--fs-caption)/1.45 var(--font-sans)',color:error?'var(--negative-500)':'var(--text-muted)'}}>{error||hint}</span>}
    </div>
  );
}

export function Select({label,hint,error,required,disabled,id,options=[],placeholder,style,...rest}){
  const [focus,setFocus]=React.useState(false);
  const uid=id||React.useId();
  return (
    <FieldShell label={label} hint={hint} error={error} required={required} htmlFor={uid} style={style}>
      <div style={{position:'relative'}}>
        <select id={uid} disabled={disabled} required={required} defaultValue={placeholder?'':undefined}
          onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}
          style={{...control(focus,error,disabled),appearance:'none',paddingRight:38,cursor:disabled?'not-allowed':'pointer'}} {...rest}>
          {placeholder&&<option value="" disabled>{placeholder}</option>}
          {options.map(o=>{const v=typeof o==='string'?o:o.value;const l=typeof o==='string'?o:o.label;
            return <option key={v} value={v}>{l}</option>;})}
        </select>
        <span style={{position:'absolute',right:12,top:'50%',transform:'translateY(-50%)',pointerEvents:'none',color:'var(--graphite-500)',display:'flex'}}>
          <Icon name="chevron-down" size={16}/>
        </span>
      </div>
    </FieldShell>
  );
}
