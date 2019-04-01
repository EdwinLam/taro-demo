/**
 * 网络请求相关基础类
 * @class BaseHttp
 * @constructor
 */
export default abstract class BaseHttp{
  requestMethod:any
  constructor(requestMethod: any) { 
    this.requestMethod = requestMethod
  }
  /**
   * 请求前处理
   * @param  {ctx} ctx
   */
  protected abstract beforeRequest(ctx: Qky.http.ctx):void

  /**
   * 请求后处理
   * @param  {object} res
   */
  protected abstract afterRequest(res:object):void

  /**
   * 请求处理
   * @param  {options} options
   */
  public async request(options: Qky.http.options){
    let ctx: Qky.http.ctx = {options}
    this.beforeRequest(ctx)
    ctx.res = await this.requestMethod(ctx.options)
    this.afterRequest(ctx)
    return ctx
  }
}

