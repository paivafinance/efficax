import * as React from 'react';
/** Icone do set Lucide, carregado do CDN e mascarado para herdar currentColor. */
export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** nome kebab-case do icone Lucide, ex. "trending-up", "file-text" */
  name: string;
  /** lado em px; default 18 */
  size?: number;
  /** cor; default currentColor */
  color?: string;
}
export function Icon(props: IconProps): JSX.Element;
