import * as React from 'react';
/**
 * Numero em destaque com legenda. Cifra em mono tabular — padrao da marca para dados.
 * @startingPoint section="Brand" subtitle="Numeros em mono tabular com legenda" viewport="700x160"
 */
export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  /** o numero, ja formatado em pt-BR (ex. "1,2") */
  value: string | number;
  /** ex. "R$" */
  prefix?: string;
  /** ex. "bi", "%" */
  suffix?: string;
  label: string;
  tone?: 'default' | 'brand' | 'onDark';
  align?: 'left' | 'center';
}
export function Stat(props: StatProps): JSX.Element;
