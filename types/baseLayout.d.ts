import { MouseEvent, ComponentClass } from 'react'
import { CommonEvent } from '@tarojs/components/types/common'

import StComponent from './base'

export interface StBaseLayoutProps extends StComponent {
    /**
     * 是否使用slot填充内容区
     * @default false
     */
    isCustomContent?: boolean
    /**
     * 点击头部触发事件
     */
    onLeftClick?: (event: CommonEvent) => void
}

export interface StBaseLayoutState {
}

declare const StBaseLayout: ComponentClass<StBaseLayoutProps>

export default StBaseLayout