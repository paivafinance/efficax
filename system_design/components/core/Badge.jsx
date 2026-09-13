import React from 'react';

const tones={
  brand:{background:'var(--brand-soft)',color:'var(--green-800)',border:'1px solid var(--green-200)'},
  neutral:{background:'var(--graphite-50)',color:'var(--graphite-700)',border:'1px solid var(--border-default)'},
  positive:{background:'var(--positive-50)',color:'var(--positive-500)',border:'1px solid rgba(47,143,78,.25)'},
  attention:{background:'var(--attention-50)',color:'var(--attention-500)',border:'1px solid rgba(192,138,0,.25)'},
  negative:{background:'var(--negative-50)',color:'var(--negative-500)',border:'1px solid rgba(178,60,46,.25)'},
  dark:{background:'var(--graphite-800)',color:'#fff',border:'1px solid var(--graphite-800)'}
};

export function Badge({tone='neutral',children,style,...rest}){
  return <span style={{display:'inline-block',font:'var(--fw-semibold) var(--fs-label)/1.2 var(--font-label)',
    letterSpacing:'var(--ls-label)',textTransform:'uppercase',padding:'5px 9px 4px',
    borderRadius:'var(--radius-xs)',...tones[tone],...style}} {...rest}>{children}</span>;
}
