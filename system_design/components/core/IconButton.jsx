import React from 'react';
import { Icon } from '../brand/Icon.jsx';

const sizes={sm:28,md:36,lg:44};

export function IconButton({name,label,variant='secondary',size='md',disabled,onClick,style,...rest}){
  const [hover,setHover]=React.useState(false);
  const d=sizes[size];
  const tones={
    secondary:{background:'transparent',border:'1px solid var(--border-default)',color:'var(--graphite-700)'},
    ghost:{background:'transparent',border:'1px solid transparent',color:'var(--graphite-500)'},
    solid:{background:'var(--brand)',border:'1px solid var(--brand)',color:'#fff'}
  };
  const hov={
    secondary:{borderColor:'var(--graphite-800)',color:'var(--graphite-900)'},
    ghost:{color:'var(--graphite-900)',background:'var(--graphite-50)'},
    solid:{background:'var(--green-600)',borderColor:'var(--green-600)'}
  };
  return (
    <button aria-label={label} onClick={onClick} disabled={disabled}
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{width:d,height:d,display:'inline-flex',alignItems:'center',justifyContent:'center',
        borderRadius:'var(--radius-control)',cursor:disabled?'not-allowed':'pointer',
        transition:'var(--transition-control)',...tones[variant],...(hover&&!disabled?hov[variant]:null),
        ...(disabled?{opacity:.42}:null),...style}} {...rest}>
      <Icon name={name} size={size==='sm'?14:size==='lg'?20:16}/>
    </button>
  );
}
