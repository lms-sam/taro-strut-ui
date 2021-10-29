import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import { StBaseLayoutProps, StBaseLayoutState } from 'types/baseLayout'
import {
    View,
    ScrollView
} from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import StComponent from '../../common/component'
import { delayQuerySelector, initTestEnv } from '../../common/utils'

import NavBar from '../navBar/index'

initTestEnv()

export default class StBaseLayout extends StComponent<StBaseLayoutProps, StBaseLayoutState> {

    public static defaultProps: StBaseLayoutProps
    public static propTypes: InferProps<StBaseLayoutProps>

    public constructor(props: StBaseLayoutProps) {
        super(props)
        this.state = {
            isNavBarTransparency: props.isTopTransparency || false,
        }
    }

    private handleScroll = (event: CommonEvent): void => {
        const {
            topToShowScrollDistanch,
            isTopTransparency
        } = this.props;
        let _scrollTop = event.target.scrollTop;
        if (isTopTransparency && topToShowScrollDistanch) {
            if (_scrollTop > topToShowScrollDistanch) {
                this.setState({
                    isNavBarTransparency: false
                })
            } else {
                this.setState({
                    isNavBarTransparency: true
                })
            }
        }
    }

    public render(): JSX.Element {
        const {
            isNavBarTransparency
        } = this.state;
        const {
            className,
            isBrickTop,
            isBrickBottom,
            isNavBarFix,
            scrollTop,
            isNavBarCustomContent
        } = this.props;
        const rootCls = classNames('st-baseLayout', className)
        return (
            <View className={rootCls}>
                <NavBar
                    title="标题"
                    isTransparent={isNavBarTransparency}
                    isFix={isNavBarFix}
                    isCustomContent={isNavBarCustomContent}
                >{(isNavBarCustomContent && this.props.renderNavBarCon())}</NavBar>
                {isBrickTop && this.props.renderTop()}
                <View className='st-baseLayout__scroll-container'>
                    <ScrollView
                        scrollY={true}
                        scrollWithAnimation={true}
                        className='st-baseLayout__scrollView'
                        onScroll={this.handleScroll}
                        scrollTop={scrollTop}
                    >
                        {this.props.children}
                    </ScrollView>
                </View>
                {isBrickBottom && this.props.renderBottom()}
            </View>
        )
    }
}

StBaseLayout.defaultProps = {
    scrollTop: 0,
    topToShowScrollDistanch: 60,
    renderBottom: ()=>{},
    renderTop: ()=>{},
}
StBaseLayout.propTypes = {
    renderTop: PropTypes.func,
    renderBottom: PropTypes.func,
}