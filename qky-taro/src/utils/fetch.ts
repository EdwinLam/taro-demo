import Taro from '@tarojs/taro'
import BaseHttp from '../base/BaseHttp'

/**
 * 网络请求相关基础类
 * @class BaseHttp
 * @constructor
 */
class Fetch extends BaseHttp {
  constructor() {
    super(Taro.request)
  }
  /**
   * 请求前处理
   * @param  {ctx} ctx
   */
  protected beforeRequest(ctx: Qky.http.ctx) {
    console.log(ctx.options)
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
