import React from 'react';

export function Tag({children,active=false,onClick,style,...rest}){
  const [hover,setHover]=React.useState(false);
  const interactive=!!onClick;
  return (
    <button type="button" onClick={onClick} disabled={!interactive}
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{fontFamily:'var(--font-sans)',fontSize:'var(--fs-body-sm)',fontWeight:'var(--fw-medium)',
        padding:'7px 14px',borderRadius:'var(--radius-pill)',cursor:interactive?'pointer':'default',
        transition:'var(--transition-control)',
        background:active?'var(--graphite-800)':(hover&&interactive?'var(--graphite-50)':'transparent'),
        color:active?'#fff':'var(--graphite-600)',
        border:'1px solid '+(active?'var(--graphite-800)':'var(--border-default)'),...style}} {...rest}>{children}</button>
  );
}
