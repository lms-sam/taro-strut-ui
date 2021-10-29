import { MouseEvent, ComponentClass } from 'react'
import { CommonEvent } from '@tarojs/components/types/common'

import StComponent from './base'

export interface StNavBarProps extends StComponent {
    /**
     * 是否使用slot填充内容区
     * @default false
     */
    isCustomContent?: boolean
    /**
     * 居中方式
     * @enum 'center','left'
     * @default 'center'
     */
    layoutType?: string
    /**
     * 是否隐藏左边功能区
     * @default false
     */
    isHideLeft?: boolean
    /**
     * 是否常驻在顶部
     * @default false
     */
    isFix?: boolean
    /**
     * 是否透明
     * @default false
     */
    isTransparent?: boolean
    /**
     * 标题
     * @default false
     */
    title?: string
    /**
     * 左侧icon图标
     */
    icon?: string
    /**
     * 点击头部触发事件
     */
    onLeftClick?: (event: CommonEvent) => void
}

export interface StNavBarState {
    menuButtonInfos: object
}

declare const StNavBar: ComponentClass<StNavBarProps>

export default StNavBar