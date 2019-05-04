import Taro, { Component } from '@tarojs/taro'
import { QkyButton } from '../../../component'
import { UI } from '../../../utils'
import {inject,observer } from '@tarojs/mobx'

@inject('systemStore')
@observer
export default class Auth extends Component<any> {
  agreeAuth = (res) => {
    const { errMsg, userInfo } = res.detail
    console.log(res)

    if (errMsg === 'getUserInfo:ok') {
      this.props.systemStore.initSystem(userInfo)
      UI.showToast(`微信昵称: ${userInfo.nickName}，请使用邮箱登录`)
    } else {
      UI.showToast(`授权失败`)
    }
  }

  render () {
    return (
      <QkyButton
        type='primary'
        text='微信登录'
        openType='getUserInfo'
        onGetUserInfo={this.agreeAuth}
      />
    )
  }
}
