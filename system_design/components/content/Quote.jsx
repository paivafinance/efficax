import React from 'react';

export function Quote({children,author,role,tone='default',style,...rest}){
  const dark=tone==='onDark';
  return (
    <figure style={{margin:0,display:'flex',flexDirection:'column',gap:'var(--space-5)',...style}} {...rest}>
      <div style={{width:56,height:'var(--border-width-rule)',background:dark?'var(--green-400)':'var(--brand)'}}/>
      <blockquote style={{margin:0,fontFamily:'var(--font-display)',fontSize:'var(--fs-h3)',lineHeight:1.45,
        fontWeight:'var(--fw-regular)',color:dark?'#fff':'var(--text-strong)',maxWidth:'46ch'}}>{children}</blockquote>
      {(author||role)&&<figcaption style={{font:'var(--fw-regular) var(--fs-body-sm)/1.4 var(--font-sans)',color:dark?'var(--graphite-300)':'var(--text-muted)'}}>
        {author&&<span style={{fontWeight:'var(--fw-semibold)',color:dark?'#fff':'var(--graphite-800)'}}>{author}</span>}
        {author&&role&&<span> · </span>}{role}
      </figcaption>}
    </figure>
  );
}
