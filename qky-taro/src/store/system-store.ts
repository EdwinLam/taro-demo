import { observable, action } from 'mobx'
import { api } from '@/api'
/**
 * 系统相关
 */
export default class SystemStore {
    /**保存用户信息 */
    @observable userInfo:qky.userInfo;

    constructor(userInfo:qky.userInfo) {
        this.userInfo = userInfo;
    }

    @action
    initSystem(){
      api.classgroup.system.ssoLogin.request({code:'sds'})
    }
}
