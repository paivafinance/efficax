import * as React from 'react';
/**
 * Cartao de frente de servico: icone em quadrado verde claro, titulo serifado, lista de entregaveis.
 * @startingPoint section="Conteudo" subtitle="Cartao de servico com icone, titulo e entregaveis" viewport="700x300"
 */
export interface ServiceCardProps extends React.HTMLAttributes<HTMLElement> {
  /** nome do icone Lucide */
  icon?: string;
  title: string;
  description?: string;
  /** entregaveis, 2–4 itens curtos */
  items?: string[];
  href?: string;
}
export function ServiceCard(props: ServiceCardProps): JSX.Element;
