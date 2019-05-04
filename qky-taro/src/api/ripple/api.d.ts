export namespace ripple {
  export class User {
    /** 账号名称 */
    accountName?: string;

    /** 头像url */
    avatarUrl?: string;

    /** 唯一code */
    code?: string;

    /** 创建时间 */
    createDate?: number;

    /** 创建者 */
    creator?: string;

    /** 唯一标识 */
    id?: number;

    /** 更新时间 */
    lastModDate?: number;

    /** 更新者 */
    lastModifier?: string;

    /** 昵称 */
    nickName?: string;

    /** 密码 */
    password?: string;

    /** 手机号码 */
    phone?: string;

    /** 状态 0-启用，1-停用 */
    status?: number;

    /** 用户名 */
    username?: string;

    /** 微信登录验证code */
    weChatCode?: string;

    /** 微信平台id */
    wechatId?: string;
  }
}

export namespace ripple {
  /**
   * 登录相关接口
   */
  export namespace system {
    /**
     * 微信单点登录接口
     * /system/ssoLogin
     */
    export namespace ssoLogin {
      export type ResponseType = Promise<string>;
      export function request(bodyParams: ripple.User): ResponseType;
    }
  }
}
