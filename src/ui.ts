import Taro from '@tarojs/taro'

Taro.initPxTransform({ designWidth: 750, deviceRatio: {} })

export {default as StNavBar} from './components/navBar'