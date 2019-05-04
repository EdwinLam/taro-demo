import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './login.scss'
import Auth from './auth/index.weapp'

export default class Login extends Component {
  config: Config = {
    navigationBarTitleText: '登录'
  }

  async componentWillMount () {
   }


  async componentDidMount () { 
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='login'>
        <Auth/>
      </View>
    )
  }
}
