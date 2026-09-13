import * as React from 'react';
/** Sobretitulo (eyebrow) em caixa alta espacada com tracinho verde — abre toda secao e todo slide. */
export interface SectionLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'brand' | 'muted' | 'onDark';
  /** mostra o tracinho de 28px antes do texto; default true */
  rule?: boolean;
  children?: React.ReactNode;
}
export function SectionLabel(props: SectionLabelProps): JSX.Element;
