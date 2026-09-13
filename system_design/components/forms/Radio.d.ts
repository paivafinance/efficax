import * as React from 'react';
/** Escolha unica dentro de um grupo (mesmo `name`). */
export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  description?: string;
  name: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
}
export function Radio(props: RadioProps): JSX.Element;
