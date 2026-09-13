import * as React from 'react';
/**
 * Tabela de numeros para relatorios e propostas: cabecalho em caixa alta espacada, zebra leve, colunas numericas em mono tabular.
 * @startingPoint section="Conteudo" subtitle="Tabela financeira com colunas numericas em mono" viewport="700x260"
 */
export interface DataTableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  /** { key, label, align? } — use align "right" nas colunas numericas */
  columns?: Array<string | { key: string; label: string; align?: 'left' | 'right' }>;
  /** objetos indexados pelas keys das colunas */
  rows?: Array<Record<string, React.ReactNode>>;
  /** legenda acima da tabela (fonte dos dados, periodo) */
  caption?: string;
  dense?: boolean;
}
export function DataTable(props: DataTableProps): JSX.Element;
