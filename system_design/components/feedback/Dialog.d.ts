import * as React from 'react';
/** Modal centrado com overlay grafite translucido. Usado para agendamento e downloads com formulario. */
export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  title?: string;
  description?: string;
  /** area de acoes no pe, alinhada a direita */
  footer?: React.ReactNode;
  /** largura maxima em px; default 520 */
  width?: number;
  onClose?: () => void;
  children?: React.ReactNode;
}
export function Dialog(props: DialogProps): JSX.Element | null;
