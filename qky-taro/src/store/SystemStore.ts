import { observable, action } from 'mobx'
import {API} from '../api'
/**
 * 系统相关
 */
export default class SystemStore {
    /**保存用户信息 */
    @observable userInfo:Qky.userInfo;

    constructor(userInfo:Qky.userInfo) {
        this.userInfo = userInfo;
    }

    @action
    initSystem(){
      API.system.login({})
    }
}