import * as React from 'react';
/**
 * Contentor de conteudo: raio 5px, borda hairline, sombra so quando eleva ou e clicavel.
 * @startingPoint section="Core" subtitle="Cartoes: default, raised, sunken, dark" viewport="700x220"
 */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'raised' | 'sunken' | 'dark' | 'outlineBrand';
  /** valor CSS de padding; default var(--space-6) */
  padding?: string;
  /** renderiza como <a> e ativa o hover de elevacao */
  href?: string;
  children?: React.ReactNode;
}
export function Card(props: CardProps): JSX.Element;
