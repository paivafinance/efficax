import React from 'react';

const base={fontFamily:'var(--font-sans)',fontWeight:'var(--fw-semibold)',letterSpacing:'.01em',
  borderRadius:'var(--radius-control)',border:'1px solid transparent',cursor:'pointer',
  display:'inline-flex',alignItems:'center',justifyContent:'center',gap:'var(--space-2)',
  transition:'var(--transition-control)',textDecoration:'none',whiteSpace:'nowrap'};

const sizes={
  sm:{fontSize:'var(--fs-body-sm)',padding:'7px 14px',lineHeight:1.3},
  md:{fontSize:'var(--fs-body-sm)',padding:'11px 20px',lineHeight:1.3},
  lg:{fontSize:'var(--fs-body)',padding:'14px 28px',lineHeight:1.3}
};

const variants={
  primary:{background:'var(--brand)',color:'var(--text-on-brand)',borderColor:'var(--brand)'},
  secondary:{background:'transparent',color:'var(--graphite-800)',borderColor:'var(--border-strong)'},
  ghost:{background:'transparent',color:'var(--text-brand)',borderColor:'transparent',padding:'11px 8px'},
  onDark:{background:'var(--brand)',color:'var(--graphite-900)',borderColor:'var(--brand)'},
  secondaryOnDark:{background:'transparent',color:'#fff',borderColor:'var(--border-on-dark)'}
};

const hovers={
  primary:{background:'var(--green-600)',borderColor:'var(--green-600)'},
  secondary:{borderColor:'var(--graphite-800)',background:'var(--graphite-25)'},
  ghost:{color:'var(--green-800)',background:'var(--brand-soft)'},
  onDark:{background:'var(--green-400)',borderColor:'var(--green-400)'},
  secondaryOnDark:{background:'rgba(255,255,255,.10)',borderColor:'rgba(255,255,255,.45)'}
};

export function Button({variant='primary',size='md',disabled=false,fullWidth=false,href,iconLeft,iconRight,children,style,...rest}){
  const [hover,setHover]=React.useState(false);
  const [press,setPress]=React.useState(false);
  const Tag=href?'a':'button';
  const s={...base,...sizes[size],...variants[variant],
    ...(hover&&!disabled?hovers[variant]:null),
    ...(press&&!disabled?{transform:'translateY(1px)'}:null),
    ...(fullWidth?{width:'100%'}:null),
    ...(disabled?{opacity:.42,cursor:'not-allowed'}:null),...style};
  return (
    <Tag href={href} disabled={Tag==='button'?disabled:undefined} style={s}
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>{setHover(false);setPress(false)}}
      onMouseDown={()=>setPress(true)} onMouseUp={()=>setPress(false)} {...rest}>
      {iconLeft}{children}{iconRight}
    </Tag>
  );
}
