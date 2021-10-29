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
            menusDatas,
            direction,
            menuWidth,
            menuBgColor,
            contentBgColor,
            isLink,
            isContentLink,
        } = this.props;
        const rootCls = classNames('st-menusLinkLayout', {
            vertical: direction === 'vertical'
        }, className)
        const menusWrapCls = classNames('st-menusLinkLayout__menu-wrap', className)
        const contentWrapCls = classNames('st-menusLinkLayout__content-wrap', className)
        return (
            <View className={rootCls}>
                <View className={menusWrapCls}>
                    {menusDatas.map((data, index)=>{
                        return (
                            <View key={index}>
                                {this.props.renderMenuItem(data,index)}
                            </View>
                        )
                    })}
                </View>
                <View className={contentWrapCls}>
                    {/* 内容区，有可能有2项导航 */}
                </View>
            </View>
        )
    }
}

StMenusLinkLayout.defaultProps = {
    menusDatas: [],
    direction: 'vertical', // horizontal
}
StMenusLinkLayout.propTypes = {
}