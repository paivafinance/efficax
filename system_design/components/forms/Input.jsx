import React from 'react';
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

export function Input({label,hint,error,required,disabled,id,multiline=false,rows=4,style,...rest}){
  const [focus,setFocus]=React.useState(false);
  const uid=id||React.useId();
  const Tag=multiline?'textarea':'input';
  return (
    <FieldShell label={label} hint={hint} error={error} required={required} htmlFor={uid} style={style}>
      <Tag id={uid} rows={multiline?rows:undefined} disabled={disabled} required={required}
        onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}
        style={{...control(focus,error,disabled),...(multiline?{resize:'vertical',lineHeight:1.55}:null)}} {...rest}/>
    </FieldShell>
  );
}
