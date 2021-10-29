import { MouseEvent, ComponentClass } from 'react'
import { CommonEvent } from '@tarojs/components/types/common'

import StComponent from './base'

export interface StMenusLinkLayoutProps extends StComponent {
    /**
     * 距离顶部多少px显示顶部
     * @default false
     */
    topToShowScrollDistanch?: Number
    /**
     * 点击头部触发事件
     */
    onLeftClick?: (event: CommonEvent) => void
}

export interface StMenusLinkLayoutState {
    isNavBarTransparency: boolean,
}

declare const StMenusLinkLayout: ComponentClass<StMenusLinkLayoutProps>

export default StMenusLinkLayout