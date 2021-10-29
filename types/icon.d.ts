import { MouseEvent, ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import StComponent, { StIconBaseProps } from './base'

export interface StIconProps extends StComponent, StIconBaseProps {
  onClick?: CommonEventFunction
}

declare const AtIcon: ComponentClass<StIconProps>

export default AtIcon
