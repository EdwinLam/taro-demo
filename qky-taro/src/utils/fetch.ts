import Taro from '@tarojs/taro'
import Store from './store'
import UI from '../utils/ui'
import {SystemCode} from '../enums'
import Exception from './exception'
/**
 * 网络请求相关基础类
 * @class BaseHttp
 * @constructor
 */
export class Fetch {
  constructor(){
    this.request = this.request.bind(this);
  }

  /**
   * 请求前处理
   * @param  {ctx} ctx
   */
  protected async beforeRequest(ctx: qky.http.ctx) {
    const accessToken =Store.getStorage('accessToken')
    if(accessToken!=null){
      ctx.options.header =Object.assign( ctx.options.header,{accessToken})
    }
  }

  /**
   * 请求后处理
   * @param  {object} res
   */
  protected afterRequest({res}) {
    if(res.data.code!==SystemCode.API_SUCCESS){
      UI.showToast(res.data.message)
      throw new Exception( res.data.code,res.data.message)
    }
  }

    /**
   * 请求处理
   * @param  {options} options
   */
  public async request(options: any){
    options.url = `${process.env.SERVICE_URL}${options.url}`
    let ctx: any = {options}
    try{
      this.beforeRequest(ctx)
      ctx.res = await Taro.request(options)
      this.afterRequest(ctx)
      return ctx
    }catch(e){
      console.log(e)
    }
    
    
  }
}

export default new Fetch().request
