import * as React from 'react';
/** Abas com sublinhado verde no item ativo. Controlado (`value`) ou nao (`defaultValue`). */
export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** strings ou { value, label } */
  items?: Array<string | { value: string; label: string }>;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  tone?: 'default' | 'onDark';
}
export function Tabs(props: TabsProps): JSX.Element;
