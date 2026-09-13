import React from 'react';

const CDN='https://unpkg.com/lucide-static@0.446.0/icons/';

/** Icone Lucide (stroke 2, cantos retos) pintado com currentColor via CSS mask. */
export function Icon({name,size=18,color='currentColor',strokeWidth,style,...rest}){
  const url=CDN+name+'.svg';
  return <span aria-hidden="true" role="img" style={{display:'inline-block',width:size,height:size,flex:'none',
    background:color,WebkitMaskImage:'url('+url+')',maskImage:'url('+url+')',
    WebkitMaskRepeat:'no-repeat',maskRepeat:'no-repeat',WebkitMaskSize:'contain',maskSize:'contain',
    WebkitMaskPosition:'center',maskPosition:'center',...style}} {...rest}/>;
}
