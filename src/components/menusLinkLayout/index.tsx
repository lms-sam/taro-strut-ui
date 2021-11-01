import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import { StMenusLinkLayoutProps, StMenusLinkLayoutState } from 'types/menusLinkLayout'
import {
    View,
    ScrollView
} from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import StComponent from '../../common/component'
import { delayQuerySelector, initTestEnv } from '../../common/utils'

initTestEnv()

export default class StMenusLinkLayout extends StComponent<StMenusLinkLayoutProps, StMenusLinkLayoutState> {
    public static defaultProps: StMenusLinkLayoutProps
    public static propTypes: InferProps<StMenusLinkLayoutProps>

    public constructor(props: StMenusLinkLayoutProps) {
        super(props)
        this.state = {
        }
    }

    public render(): JSX.Element {
        const {
            className,
            direction,
            menuBgColor,
            menusDatas,
            menuWidth,
            isShowSubMenus,
            subMenusDatas,
            subMenuWidth,
            contentBgColor,
            conDatas,
            isLink,
            isContentLink
        } = this.props;
        const _isVertical = direction === 'vertical'; // 是否垂直排列
        const rootCls = classNames('st-menusLinkLayout', {
            vertical: direction === 'vertical',
            horizontal: direction === 'horizontal',
        }, className)
        const menusWrapCls = classNames('st-menusLinkLayout__menu-wrap', className)
        const subMenusWrapCls = classNames('st-menusLinkLayout__subMenu-wrap', className)
        const contentWrapCls = classNames('st-menusLinkLayout__content-wrap', className)

        return (
            <View className={rootCls}>
                {/* 一级菜单 */}
                <View className={menusWrapCls} style={{
                    [_isVertical ? 'width' : 'height']: Taro.pxTransform(menuWidth),
                    [!_isVertical ? 'width' : 'height']: '100%',
                    backgroundColor: menuBgColor,
                }}>
                    <ScrollView
                        className="st-scrollView"
                        scrollX={!_isVertical}
                        scrollY={_isVertical}
                    >
                        <View className={classNames('st-menusLinkLayout__menu-con', {
                            horizontal: direction === 'horizontal',
                        })}>
                            {menusDatas.map((data, index)=>{
                                return (
                                    <View key={index} className="menu-item">
                                        {this.props.renderMenuItem(data,index)}
                                    </View>
                                )
                            })}
                        </View>
                    </ScrollView>
                </View>
                <View className='st-menusLinkLayout_main-con'>
                    {/* 二级菜单 */}
                    {isShowSubMenus && <View className={subMenusWrapCls} style={{
                        [_isVertical ? 'width' : 'height']: Taro.pxTransform(subMenuWidth || menuWidth),
                        [!_isVertical ? 'width' : 'height']: '100%',
                        backgroundColor: menuBgColor,
                    }}>
                        {subMenusDatas.map((data, index)=>{
                            return (
                                <View key={index}>
                                    {this.props.renderSubMenuItem(data,index)}
                                </View>
                            )
                        })}
                    </View>}
                    {/* 内容区 */}
                    <View
                        className={contentWrapCls}
                        style={{
                            backgroundColor: contentBgColor
                        }}
                    >
                        <ScrollView
                            className="st-scrollView"
                            scrollY
                        >
                        {conDatas.map((data, index)=>{
                            return (
                                <View key={index}>
                                    {this.props.renderConItems(data)}
                                </View>
                            )
                        })}
                        </ScrollView>
                    </View>
                </View>
            </View>
        )
    }
}

StMenusLinkLayout.defaultProps = {
    menusDatas: [],
    conDatas: [],
    direction: 'vertical', // horizontal 水平， vertical 垂直
    renderMenuItem: () => {},
    renderConItem: () => {}
}
StMenusLinkLayout.propTypes = {
    renderMenuItem: PropTypes.func,
    renderConItem: PropTypes.func,
}