import * as React from 'react';
/** Depoimento de cliente em serifada, aberto pelo tracinho verde. */
export interface QuoteProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  author?: string;
  /** cargo e empresa, ex. "CFO · Industria Alfa" */
  role?: string;
  tone?: 'default' | 'onDark';
}
export function Quote(props: QuoteProps): JSX.Element;
