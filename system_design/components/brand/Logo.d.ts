import * as React from 'react';
/** Assinatura da marca. `primary` = logo colorido sobre fundo claro; `onDark` = versao em branco; `badge` = selo circular cinza. */
export interface LogoProps extends React.HTMLAttributes<HTMLImageElement> {
  variant?: 'primary' | 'onDark' | 'badge';
  /** altura em px; minimo de uso 24px */
  height?: number;
  /** prefixo do caminho dos arquivos em assets/ (ajuste conforme a profundidade da pagina) */
  assetBase?: string;
}
export function Logo(props: LogoProps): JSX.Element;
