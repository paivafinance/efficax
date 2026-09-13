import * as React from 'react';
/** Explicacao curta no hover/foco — definicoes de metricas em relatorios. */
export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  content: React.ReactNode;
  placement?: 'top' | 'bottom';
  children?: React.ReactNode;
}
export function Tooltip(props: TooltipProps): JSX.Element;
