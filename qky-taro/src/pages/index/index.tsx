import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'


export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  agreeAuth =async (res) => {
    
    console.log(res)
    const { errMsg, userInfo } = res.detail
    const loginRes = await Taro.login()
    console.log(loginRes)
    if (errMsg === 'getUserInfo:ok') {
      Taro.showToast({
        title: `微信昵称: ${userInfo.nickName}，请使用邮箱登录`,
        icon: 'none'
      })
    } else {
      Taro.showToast({
        title: '授权失败',
        icon: 'none'
      })
    }
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
      <View className='index'>
       <ButtonItem
        type='primary'
        text='微信登录'
        openType='getUserInfo'
        onGetUserInfo={this.agreeAuth}
      />
      </View>
    )
  }
}
