import { MouseEvent, ComponentClass } from 'react'
import { CommonEvent } from '@tarojs/components/types/common'

import StComponent from './base'

export interface StBaseLayoutProps extends StComponent {
    /**
     * 是否使用自定义顶部内容
     * @default false
     */
    isNavBarCustomContent?: boolean
    /**
     * 距离顶部，用于回到顶部
     * @default false
     */
    scrollTop?: number
    /**
     * 是否堆砌顶部
     * @default false
     */
    isBrickTop?: boolean
    /**
     * 是否堆砌底部，用户固定底部块
     * @default false
     */
    isBrickBottom?: boolean
    isNavBarFix?: boolean
    /**
     * 是否顶部透明
     * @default false
     */
    isTopTransparency?: boolean
    /**
     * 距离顶部多少px显示顶部
     * @default false
     */
    topToShowScrollDistanch?: Number
    /**
     * 点击头部触发事件
     */
    onLeftClick?: (event: CommonEvent) => void
    renderTop?: () => void
    renderBottom?: () => void
    renderNavBarCon?: () => void
}

export interface StBaseLayoutState {
    isNavBarTransparency: boolean,
}

declare const StBaseLayout: ComponentClass<StBaseLayoutProps>

export default StBaseLayout