declare namespace Qky {
    namespace http{
        type requestMethod = 'POST' | 'GET' | 'post' | 'get'
        interface ctx {
            /**
             * 传入的参数
             */  
            options ? : object
            /**
             * 获取的结果
             */ 
            res ? : object
          }
          
          export interface options {
            /**
             * 请求的url
             */
            url: string
            /**
             * 请求的方法
             */
            method: requestMethod
          }
    }
   
}