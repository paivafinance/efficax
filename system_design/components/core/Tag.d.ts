import * as React from 'react';
/** Filtro/categoria clicavel em capsula — unico componente com raio pill do sistema. */
export interface TagProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}
export function Tag(props: TagProps): JSX.Element;
