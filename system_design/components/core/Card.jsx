import React from 'react';

export function Card({variant='default',padding='var(--space-6)',href,children,style,...rest}){
  const [hover,setHover]=React.useState(false);
  const variants={
    default:{background:'var(--surface-card)',border:'1px solid var(--border-subtle)',boxShadow:'var(--shadow-none)'},
    raised:{background:'var(--surface-card)',border:'1px solid var(--border-subtle)',boxShadow:'var(--shadow-sm)'},
    sunken:{background:'var(--surface-sunken)',border:'1px solid transparent',boxShadow:'none'},
    dark:{background:'var(--surface-dark)',border:'1px solid var(--graphite-700)',color:'var(--graphite-100)'},
    outlineBrand:{background:'var(--surface-card)',border:'1px solid var(--green-200)',boxShadow:'none'}
  };
  const Tag=href?'a':'div';
  return (
    <Tag href={href}
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{display:'block',borderRadius:'var(--radius-card)',padding,textDecoration:'none',
        transition:'box-shadow var(--dur-base) var(--ease-standard),border-color var(--dur-base) var(--ease-standard),transform var(--dur-base) var(--ease-standard)',
        ...variants[variant],
        ...(href&&hover?{boxShadow:'var(--shadow-md)',borderColor:'var(--border-default)',transform:'translateY(-2px)'}:null),
        ...style}} {...rest}>{children}</Tag>
  );
}
