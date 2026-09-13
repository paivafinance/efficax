import React from 'react';

/** Assinatura EFFICAX. Sempre use o arquivo — nunca redesenhe o wordmark. */
export function Logo({variant='primary',height=36,assetBase='assets/',style,...rest}){
  const src=variant==='badge'?assetBase+'logo-efficax-badge-gray.png':assetBase+'logo-efficax-primary.png';
  return <img src={src} alt="EFFICAX Assessoria Financeira"
    style={{height,width:'auto',display:'block',
      ...(variant==='onDark'?{filter:'brightness(0) invert(1)'}:null),...style}} {...rest}/>;
}
