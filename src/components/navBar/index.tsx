import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import { StNavBarProps, StNavBarState } from 'types/navBar'
import { Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import StComponent from '../../common/component'
import { delayQuerySelector, initTestEnv } from '../../common/utils'
import {
    getMenuButton
} from '../../common/getMenuButton'

import StIcon from '../icon/index'

initTestEnv()

export default class StNavBar extends StComponent<
    StNavBarProps,
    StNavBarState
> {
    public static defaultProps: StNavBarProps
    public static propTypes: InferProps<StNavBarProps>
    public constructor(props: StNavBarProps) {
        super(props)
        this.state = {
            menuButtonInfos: {}
        }
    }

    private handleLeftClick = (event: CommonEvent): void => {
        this.props.onLeftClick && this.props.onLeftClick(event);
    }

    public componentDidMount(): any {
        this.setState({
            menuButtonInfos: getMenuButton()
        })
    }

    public render(): JSX.Element {
        const {
            menuButtonInfos
        } = this.state;
        const {
            customStyle,
            className,
            title,
            isFix,
            isTransparent,
            layoutType,
            isHideLeft,
            isCustomContent,
            // icon
        } = this.props
        const isFlex = layoutType === 'left' || isCustomContent
        let _layoutType = layoutType
        isCustomContent && (_layoutType = 'left')

        const rootCls = classNames('st-navBar', className, {
            fixed: isFix,
            transparent: isTransparent,
        })
        const leftConCls = classNames('st-navBar__left-con')
        const wrapCls = classNames('st-navBar__wrap', {
            flex: isFlex
        })
        const rightConCls = classNames('st-navBar__right-con')
        const contentCls = classNames('st-navBar__content', _layoutType)
        return (
            <View className={rootCls}  style={this.mergeStyle({
                paddingTop: menuButtonInfos.top + 'px',
                height: menuButtonInfos.height + 'px'
            }, customStyle as object)}>
                <View
                    className={wrapCls}
                    style={{
                        width: isFlex? menuButtonInfos.left + 'px' : ''
                    }}
                >
                    {/* 左边功能区：返回、首页 */}
                    {!isHideLeft && <View className={leftConCls} onClick={this.handleLeftClick}>
                        {/* icon */}
                        <StIcon
                            className="icon-daohangfanhui"
                            size="20"
                        ></StIcon>
                    </View>}
                    {/* 内容区 */}
                    <View className={contentCls} style={{
                            height: menuButtonInfos.height + 'px',
                            lineHeight: menuButtonInfos.height + 'px',
                    }}>
                        {isCustomContent ? this.props.children : <Text className='st-navBar_content-title'>{title}</Text>}
                    </View>
                    {/* 右侧拓展功能区 */}
                    <View className={rightConCls}></View>
                </View>
            </View>
        )
    }
}

StNavBar.defaultProps = {
    layoutType: 'center', // center left
    isFix: false,
    isTransparent: false,
    isHideLeft: false,
    customStyle: '',
    className: '',
    title: '',
}
StNavBar.propTypes = {
    customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}