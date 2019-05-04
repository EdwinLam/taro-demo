import {SystemCode} from '../enums'

/**
 * 异常类
 * @class BaseHttp
 * @constructor
 */
export default class Exception {
  code: number
  message: string
  constructor (code = SystemCode.API_BUSSINESS_ERROR, message) {
    this.code = code
    this.message = message
  }
  print () {
    console.error(`[${this.code}]${this.message}`)
  }
}
