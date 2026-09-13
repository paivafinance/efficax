import React from 'react';

export function DataTable({columns=[],rows=[],caption,dense=false,style,...rest}){
  const pad=dense?'9px 12px':'13px 16px';
  return (
    <div style={{width:'100%',overflowX:'auto',...style}}>
      <table style={{width:'100%',borderCollapse:'collapse',fontFamily:'var(--font-sans)'}} {...rest}>
        {caption&&<caption style={{captionSide:'top',textAlign:'left',font:'var(--fw-regular) var(--fs-caption)/1.5 var(--font-sans)',color:'var(--text-muted)',paddingBottom:'var(--space-3)'}}>{caption}</caption>}
        <thead>
          <tr>{columns.map(c=>{const k=c.key||c;const l=c.label||c;const num=c.align==='right';
            return <th key={k} scope="col" style={{textAlign:num?'right':'left',padding:pad,
              font:'var(--fw-semibold) var(--fs-label)/1.3 var(--font-label)',letterSpacing:'var(--ls-label)',
              textTransform:'uppercase',color:'var(--text-muted)',borderBottom:'1px solid var(--border-default)',whiteSpace:'nowrap'}}>{l}</th>;})}
          </tr>
        </thead>
        <tbody>
          {rows.map((r,i)=>(
            <tr key={i} style={{background:i%2?'var(--graphite-25)':'transparent'}}>
              {columns.map(c=>{const k=c.key||c;const num=c.align==='right';
                return <td key={k} style={{padding:pad,textAlign:num?'right':'left',
                  borderBottom:'1px solid var(--border-subtle)',
                  fontFamily:num?'var(--font-mono)':'var(--font-sans)',fontVariantNumeric:'tabular-nums',
                  fontSize:num?'var(--fs-body-sm)':'var(--fs-body-sm)',color:'var(--graphite-800)'}}>{r[k]}</td>;})}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
