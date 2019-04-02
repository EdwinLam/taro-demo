import Taro from '@tarojs/taro'
import BaseHttp from '../base/BaseHttp'
import Store from './store'

/**
 * 网络请求相关基础类
 * @class BaseHttp
 * @constructor
 */
export class Fetch extends BaseHttp {
  constructor() {
    super(Taro.request)
  }
  /**
   * 请求前处理
   * @param  {ctx} ctx
   */
  protected async beforeRequest(ctx: Qky.http.ctx) {
    const accessToken =Store.getStorage('accessToken')
    if(accessToken!=null)
      ctx.options =Object.assign(ctx.options,{header:{accessToken}})
    }

  /**
   * 请求后处理
   * @param  {object} res
   */
  protected afterRequest(res: object) {
    console.log(res)
  }
}

export default new Fetch()
