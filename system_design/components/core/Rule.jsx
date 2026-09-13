import React from 'react';

export function Rule({variant='hairline',width,style,...rest}){
  const variants={
    hairline:{height:1,background:'var(--rule-hairline)',width:width||'100%'},
    brand:{height:'var(--border-width-rule)',background:'var(--brand)',width:width||'56px'},
    onDark:{height:1,background:'var(--border-on-dark)',width:width||'100%'}
  };
  return <div role="separator" style={{border:0,flex:'none',...variants[variant],...style}} {...rest}/>;
}
