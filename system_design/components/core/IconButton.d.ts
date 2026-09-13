import * as React from 'react';
/** Botao quadrado de icone unico (fechar, navegar, baixar). Usa o set Lucide via Icon. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** nome do icone Lucide, ex. "arrow-right" */
  name: string;
  /** rotulo acessivel obrigatorio */
  label: string;
  variant?: 'secondary' | 'ghost' | 'solid';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}
export function IconButton(props: IconButtonProps): JSX.Element;
