import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

import {
  StNavBar,
  StBaseLayout,
  StMenusLinkLayout
} from '@lms/st-ui'
import {
  StNavBar as SSNavBar
} from 'taro-st-ui'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页',
    navigationStyle: 'custom'
  }

  render () {
    return (
      <View className='index'>
        <StBaseLayout
          title="标题"
          isTopTransparency={true}
          isNavBarFix={false}
          isNavBarCustomContent={true}
          isBrickBottom
          renderNavBarCon={()=>{
            return (
              <View>123</View>
            )
          }}
          renderBottom={()=>{
            return (
              <View>123</View>
            )
          }}
        >
          <StMenusLinkLayout
            // direction="horizontal"
            menuWidth="200"
            menusDatas={[1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]}
            conDatas={[1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]}
            isBrickBottom
            renderMenuItem={(data)=>{
              return (
                <View>{data}</View>
              )
            }}
            renderConItems={(data)=>{
              return (
                <View>{data}</View>
              )
            }}
            // renderConItems={(datas)=>{
            //   return (
            //     <View>{datas.map((data)=>{
            //       console.log(data)
            //       return (
            //         <View>{data}</View>
            //       )
            //     })}</View>
            //   )
            // }}
          ></StMenusLinkLayout>
        </StBaseLayout>
        {/* <StNavBar
          title="标题"
          isCustomContent={true}
        >
          sad
        </StNavBar> */}
        {/* <SSNavBar
          title="标题2"
        >
          sad
        </SSNavBar> */}
        {/* <Text>Hello world!</Text> */}
      </View>
    )
  }
}
