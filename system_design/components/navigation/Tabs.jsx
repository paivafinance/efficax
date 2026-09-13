import React from 'react';

export function Tabs({items=[],value,defaultValue,onChange,tone='default',style,...rest}){
  const [inner,setInner]=React.useState(defaultValue||(items[0]&&(items[0].value||items[0])));
  const active=value!==undefined?value:inner;
  const pick=v=>{if(value===undefined)setInner(v);onChange&&onChange(v)};
  const dark=tone==='onDark';
  return (
    <div role="tablist" style={{display:'flex',gap:'var(--space-6)',borderBottom:'1px solid '+(dark?'var(--border-on-dark)':'var(--border-subtle)'),...style}} {...rest}>
      {items.map(it=>{const v=it.value||it;const l=it.label||it;const on=v===active;
        return (
          <button key={v} role="tab" aria-selected={on} onClick={()=>pick(v)}
            style={{background:'none',border:0,borderBottom:'2px solid '+(on?'var(--brand)':'transparent'),
              padding:'0 0 12px',marginBottom:-1,cursor:'pointer',
              font:(on?'var(--fw-semibold)':'var(--fw-regular)')+' var(--fs-body-sm)/1.3 var(--font-sans)',
              color:on?(dark?'#fff':'var(--graphite-900)'):(dark?'var(--graphite-300)':'var(--text-muted)'),
              transition:'var(--transition-control)'}}>{l}</button>
        );})}
    </div>
  );
}
