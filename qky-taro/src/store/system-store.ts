import { observable, action } from 'mobx'
import { api } from '../api'
import Taro from '@tarojs/taro'
/**
 * 系统相关
 */
class SystemStore {
    /**保存用户信息 */
    @observable 
    userInfo:qky.userInfo;


    @action 
    async initSystem(userInfo){
      const res:any = await Taro.login()
      await api.ripple.system.ssoLogin.request(Object.assign(userInfo,{weChatCode:res.code}))
    }
}

export default new SystemStore()
