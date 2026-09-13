import * as React from 'react';
/** Separador. `brand` e o tracinho verde de 56px que abre secoes e slides. */
export interface RuleProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'hairline' | 'brand' | 'onDark';
  /** largura CSS; default 100% (hairline) ou 56px (brand) */
  width?: string;
}
export function Rule(props: RuleProps): JSX.Element;
