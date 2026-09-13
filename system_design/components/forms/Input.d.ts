import * as React from 'react';
/** Campo de texto de uma linha ou area de texto (`multiline`), com rotulo, dica e erro. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  /** mensagem de erro; quando presente pinta a borda de vermelho e substitui a dica */
  error?: string;
  required?: boolean;
  disabled?: boolean;
  /** renderiza <textarea> */
  multiline?: boolean;
  rows?: number;
}
export function Input(props: InputProps): JSX.Element;
