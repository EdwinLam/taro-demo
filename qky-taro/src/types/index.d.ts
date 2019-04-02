declare namespace Qky {
    /**用户信息 */
    interface userInfo{
      /**用户名称 */
      userName:string
    }
    namespace http{
        type requestMethod = 'POST' | 'GET' | 'post' | 'get'
        export interface options {
          /**
           * 请求的url
           */
          url: string
          /**
           * 请求的方法
           */
          method: requestMethod
          /** 头部参数 */
          header?: any
        }
        interface ctx {
            /**
             * 传入的参数
             */  
            options ? : options
            /**
             * 获取的结果
             */ 
            res ? : object
          }
    }

   
}