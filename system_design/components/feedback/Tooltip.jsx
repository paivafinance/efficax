import React from 'react';

export function Tooltip({content,placement='top',children,style,...rest}){
  const [show,setShow]=React.useState(false);
  const pos=placement==='bottom'?{top:'calc(100% + 8px)'}:{bottom:'calc(100% + 8px)'};
  return (
    <span style={{position:'relative',display:'inline-flex',...style}}
      onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}
      onFocus={()=>setShow(true)} onBlur={()=>setShow(false)} {...rest}>
      {children}
      {show&&<span role="tooltip" style={{position:'absolute',left:'50%',transform:'translateX(-50%)',...pos,
        background:'var(--graphite-800)',color:'#fff',padding:'6px 10px',borderRadius:'var(--radius-xs)',
        font:'var(--fw-regular) var(--fs-caption)/1.35 var(--font-sans)',whiteSpace:'nowrap',
        boxShadow:'var(--shadow-md)',zIndex:40}}>{content}</span>}
    </span>
  );
}
