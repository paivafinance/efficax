import * as React from 'react';
/** Rotulo de status em caixa alta espacada — setor, estagio do mandato, confidencialidade. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'brand' | 'neutral' | 'positive' | 'attention' | 'negative' | 'dark';
  children?: React.ReactNode;
}
export function Badge(props: BadgeProps): JSX.Element;
