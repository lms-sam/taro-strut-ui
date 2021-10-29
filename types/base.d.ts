import { CSSProperties } from 'react'

export interface StComponent {
  className?: string

  customStyle?: string | CSSProperties
}

// export interface StIconBaseProps2 extends StComponent {
//   value: string

//   color?: string
// }

export interface StIconBaseProps extends StComponent {
  value: string

  color?: string

  prefixClass?: string

  size?: number | string
}

export default StComponent
