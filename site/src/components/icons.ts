import {
  Activity,
  ChartColumn,
  Handshake,
  Landmark,
  Receipt,
  Scale,
  Target,
  type LucideIcon,
} from 'lucide-react'
import type { IconName } from '../content/site'

/* Lucide, stroke 2 px, cantos retos: combina com o desenho linear do logo. */
export const icons: Record<IconName, LucideIcon> = {
  activity: Activity,
  receipt: Receipt,
  'chart-column': ChartColumn,
  target: Target,
  scale: Scale,
  landmark: Landmark,
  handshake: Handshake,
}
