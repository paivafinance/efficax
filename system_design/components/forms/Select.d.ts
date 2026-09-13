import * as React from 'react';
/** Lista suspensa nativa com a seta chevron-down da marca. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  /** strings ou { value, label } */
  options?: Array<string | { value: string; label: string }>;
  /** primeira opcao desabilitada, usada como estado vazio */
  placeholder?: string;
}
export function Select(props: SelectProps): JSX.Element;
