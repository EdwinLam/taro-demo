import Taro, { Component } from '@tarojs/taro'
import { ButtonItem } from '@components'
import { UI } from '@/utils'

export default class Auth extends Component {
  agreeAuth = (res) => {
    const { errMsg, userInfo } = res.detail
    if (errMsg === 'getUserInfo:ok') {
      UI.showToast(`微信昵称: ${userInfo.nickName}，请使用邮箱登录`)
    } else {
      UI.showToast(`授权失败`)
    }
  }

  render () {
    return (
      <ButtonItem
        type='primary'
        text='微信登录'
        openType='getUserInfo'
        onGetUserInfo={this.agreeAuth}
      />
    )
  }
}
