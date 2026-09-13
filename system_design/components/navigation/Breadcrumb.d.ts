import * as React from 'react';
/** Trilha de navegacao para paginas internas (casos, artigos, servico especifico). */
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  /** strings ou { label, href }; o ultimo item e a pagina atual */
  items?: Array<string | { label: string; href?: string }>;
}
export function Breadcrumb(props: BreadcrumbProps): JSX.Element;
