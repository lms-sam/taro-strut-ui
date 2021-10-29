import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import { StIconProps } from 'types/icon'
import { Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import StComponent from '../../common/component'
import { initTestEnv } from '../../common/utils'

initTestEnv()

export default class StIcon extends StComponent<StIconProps> {
  public static defaultProps: StIconProps
  public static propTypes: InferProps<StIconProps>

  private handleClick(): void {
    this.props.onClick && this.props.onClick(arguments as any)
  }

  public render(): JSX.Element {
    const {
      customStyle,
      className,
      prefixClass,
      value,
      size,
      color
    } = this.props

    const rootStyle = {
      fontSize: `${Taro.pxTransform(parseInt(String(size)) * 2)}`,
      color
    }

    const iconName = value ? `${prefixClass}-${value}` : ''
    return (
      <Text
        className={classNames(prefixClass, iconName, className)}
        style={this.mergeStyle(rootStyle, customStyle as object)}
        onClick={this.handleClick.bind(this)}
      ></Text>
    )
  }
}

StIcon.defaultProps = {
  customStyle: '',
  className: '',
  prefixClass: 'st-icon',
  value: '',
  color: '',
  size: 24,
  onClick: () => {}
}

StIcon.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  prefixClass: PropTypes.string,
  value: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func
}
