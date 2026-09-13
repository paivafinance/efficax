import * as React from 'react';

/**
 * Acao primaria da marca. Retangular (raio 3px), verde EFFICAX no primario.
 * @startingPoint section="Core" subtitle="Botoes: primario, secundario, ghost e sobre fundo escuro" viewport="700x180"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** primary = verde da marca; secondary = contorno grafite; ghost = texto; onDark = verde sobre fundo escuro; secondaryOnDark = contorno claro sobre fundo grafite */
  variant?: 'primary' | 'secondary' | 'ghost' | 'onDark' | 'secondaryOnDark';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  fullWidth?: boolean;
  /** renderiza como <a> quando informado */
  href?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}
export function Button(props: ButtonProps): JSX.Element;
