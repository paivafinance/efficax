import * as React from 'react';
/** Alternancia imediata de estado (ex. alternar moeda ou periodo em um relatorio). */
export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
}
export function Switch(props: SwitchProps): JSX.Element;
