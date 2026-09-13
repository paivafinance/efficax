import * as React from 'react';
/** Caixa de selecao quadrada (raio 2px), verde quando marcada. */
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  /** linha secundaria de apoio */
  description?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
}
export function Checkbox(props: CheckboxProps): JSX.Element;
