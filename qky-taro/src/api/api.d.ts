import RequestUtil from '../../../utils/fetch';

export namespace defs {
  export class BasAtts {
    /** 创建时间 */
    createDate?: number;

    /** 创建者 */
    creator?: string;

    /** 文件id,上传第三方文件系统时，文件标识的id */
    fileId?: string;

    /** 文件名称,用于显示 */
    fileName?: string;

    /** 文件大小，单位是k */
    fileSize?: number;

    /** 文件类型 */
    fileType?: string;

    /** 文件访问路径 */
    fileUrl?: string;

    /** 所属群组id */
    groupId?: number;

    /** 唯一标识 */
    id?: number;

    /** 更新时间 */
    lastModDate?: number;

    /** 更新者 */
    lastModifier?: string;

    /** 来源标识编码,通常是sourceId所对应的表名，如biz_notice表示通知；biz_enroll表示报名； */
    sourceCode?: string;

    /** 所属业务表id */
    sourceId?: number;

    /** 状态 0-启用，1-停用 */
    status?: number;
  }

  export class BasGroup {
    /** 创建时间 */
    createDate?: number;

    /** 创建者 */
    creator?: string;

    /** 群号,9位数字构成,类似于QQ群的群号 */
    groupCode?: string;

    /** 群组名称 */
    groupName?: string;

    /** 唯一标识 */
    id?: number;

    /** 群组介绍 */
    introduce?: string;

    /** 成员是否要审核，1：是；0：否；开启时，所加入的成员需审核后才能加入群组。 */
    isNeedCheck?: number;

    /** 是否加入 */
    joined?: boolean;

    /** 更新时间 */
    lastModDate?: number;

    /** 更新者 */
    lastModifier?: string;

    /** 成员人数限制,-1表示无限制（该字段用于日后增值考虑） */
    memberLimit?: number;

    /** 成员人数 */
    memberNum?: number;

    /** 通知公告 */
    notice?: string;

    /** 手机号码 */
    phone?: string;

    /** 状态 0-启用，1-停用 */
    status?: number;
  }

  export class BasUser {
    /** 用户头像，最后一个数值代表正方形头像大小（有0、46、64、96、132数值可选，0代表640*640正方形头像），用户没有头像时该项为空。若用户更换头像，原有头像URL将失效。 */
    avatarUrl?: string;

    /** 用户所在城市 */
    city?: string;

    /** country */
    country?: string;

    /** countryCode */
    countryCode?: string;

    /** 创建时间 */
    createDate?: number;

    /** 创建者 */
    creator?: string;

    /** 用户的性别，值为1时是男性，值为2时是女性，值为0时是未知 */
    gender?: number;

    /** 分组昵称 */
    groupNickName?: string;

    /** 分组数量 */
    groupNum?: number;

    /** 唯一标识 */
    id?: number;

    /** 更新时间 */
    lastModDate?: number;

    /** 更新者 */
    lastModifier?: string;

    /** 用户昵称 */
    nickName?: string;

    /** 用户唯一标识 */
    openid?: string;

    /** 密码 */
    password?: string;

    /** 用户绑定的手机号（国外手机号会有区号） */
    phoneNumber?: string;

    /** 用户所在省份 */
    province?: string;

    /** 没有区号的手机号 */
    purePhoneNumber?: string;

    /** 状态 0-启用，1-停用 */
    status?: number;

    /** 开放平台的唯一标识符 */
    unionid?: string;

    /** 用户名 */
    username?: string;
  }

  export class BizEnroll {
    /** 附件列表 */
    basAtts: BasAtts[];

    /** 内容 */
    content?: string;

    /** 创建时间 */
    createDate?: number;

    /** 创建者 */
    creator?: string;

    /** 创建人名称 */
    creatorName?: string;

    /** 报名截止时间 */
    endDate?: number;

    /** 报名人数 */
    enrollNum?: number;

    /** 所属群组id */
    groupId?: number;

    /** 唯一标识 */
    id?: number;

    /** 更新时间 */
    lastModDate?: number;

    /** 更新者 */
    lastModifier?: string;

    /** 报名名额,-1表示不限； */
    limitNum?: number;

    /** 已读人数 */
    readNum?: number;

    /** 状态 0-启用，1-停用 */
    status?: number;

    /** 标题 */
    title?: string;
  }

  export class BizMessage {
    /** 创建时间 */
    createDate?: number;

    /** 创建者 */
    creator?: string;

    /** 创建者名称 */
    creatorName?: string;

    /** 所属群组id */
    groupId?: number;

    /** 唯一标识 */
    id?: number;

    /** 更新时间 */
    lastModDate?: number;

    /** 更新者 */
    lastModifier?: string;

    /** 消息内容 */
    messageContent?: string;

    /** 消息名称 */
    messageTitle?: string;

    /** 来源标识编码,通常是sourceId所对应的表名，如biz_notice表示通知；biz_enroll表示报名； */
    sourceCode?: string;

    /** 所属业务表id */
    sourceId?: number;

    /** 状态 0-启用，1-停用 */
    status?: number;
  }

  export class BizNotice {
    /** 附件列表 */
    basAtts: BasAtts[];

    /** 已读列表 */
    basUsers: BasUser[];

    /** 内容 */
    content?: string;

    /** 创建时间 */
    createDate?: number;

    /** 创建者 */
    creator?: string;

    /** 创建人名称 */
    creatorName?: string;

    /** 所属群组 */
    groupId?: number;

    /** 唯一标识 */
    id?: number;

    /** 更新时间 */
    lastModDate?: number;

    /** 更新者 */
    lastModifier?: string;

    /** 已读人数 */
    readNum?: number;

    /** 状态 0-启用，1-停用 */
    status?: number;

    /** 标题 */
    title?: string;
  }

  export class GroupUserRel {
    /** basGroup */
    basGroup: BasGroup;

    /** basUser */
    basUser: BasUser;

    /** 创建时间 */
    createDate?: number;

    /** 创建者 */
    creator?: string;

    /** 群组id */
    groupId?: number;

    /** 唯一标识 */
    id?: number;

    /** 更新时间 */
    lastModDate?: number;

    /** 更新者 */
    lastModifier?: string;

    /** 成员在群组中的昵称 */
    nickName?: string;

    /** 备注，可用于用户申请加入群组时，填写的信息，用于审核依据 */
    remark?: string;

    /** 状态 0-启用，1-停用 */
    status?: number;

    /** 关联学生id */
    studentId?: number;

    /** 用户id */
    userId?: number;

    /** 用户在群组中的身份，1：班主任（创建人) ；2：管理员；3：教师；4：家长。群组创建人默认是班主任，管理员由群主设置。 */
    userIdentity?: number;

    /** 成员状态，审核不通过时，移除记录，只保留两种状态；0：待审核，1：正式成员； */
    userStatus?: number;

    /** 用户类型(1:教师；2：家长) */
    userType?: number;
  }

  export class Page<T0 = any> {
    /** content */
    content: T0[];

    /** first */
    first?: boolean;

    /** last */
    last?: boolean;

    /** number */
    number?: number;

    /** numberOfElements */
    numberOfElements?: number;

    /** pageable */
    pageable: Pageable;

    /** size */
    size?: number;

    /** sort */
    sort: Sort;

    /** totalElements */
    totalElements?: number;

    /** totalPages */
    totalPages?: number;
  }

  export class Pageable {
    /** offset */
    offset?: number;

    /** pageNumber */
    pageNumber?: number;

    /** pageSize */
    pageSize?: number;

    /** paged */
    paged?: boolean;

    /** sort */
    sort: Sort;

    /** unpaged */
    unpaged?: boolean;
  }

  export class Sort {
    /** sorted */
    sorted?: boolean;

    /** unsorted */
    unsorted?: boolean;
  }

  export class StatisticalGroupMemberNumber {
    /** 管理员数量 */
    adminNumber?: string;

    /** 分组id */
    groupId?: number;

    /** 分组名称 */
    groupName?: string;

    /** 成员数量 */
    memberNumber?: string;

    /** 群主数量 */
    ownerNumber?: string;

    /** 家长数量 */
    parentNumber?: string;

    /** 教师数量 */
    teacherNumber?: string;
  }

  export class SystemUser {
    /** 是否管理员 */
    admin?: boolean;

    /** 头像 */
    avatarUrl?: string;

    /** 所在分组code */
    groupCode?: string;

    /** 所在分组id */
    groupId?: number;

    /** 分组名称 */
    groupName?: string;

    /** 分组昵称 */
    groupNickName?: string;

    /** 所在分组公告 */
    groupNotice?: string;

    /** 分组数量 */
    groupNum?: number;

    /** 是否拥有者 */
    owner?: boolean;

    /** 手机号码 */
    phoneNumber?: string;

    /** 分组数量统计 */
    statisticalGroupMemberNumber: StatisticalGroupMemberNumber;

    /** 用户id */
    userId?: number;
  }
}

export namespace API {
  /**
   * 用户分组接口
   */
  export namespace basGroup {
    /**
     * 登录接口
     * /basGroup/queryByCode
     */
    export namespace queryByCode {
      export class Params {
        /** 分组code */
        groupCode?: string;
      }

      export type ResponseType = Promise<BasGroup>;
      export function request(
        params: Params,
        options?: RequestConfig,
      ): ResponseType;
    }

    /**
     * 统计分组各种人员数量
     * /basGroup/statisticalGroupMemberNumber
     */
    export namespace statisticalGroupMemberNumber {
      export type ResponseType = Promise<StatisticalGroupMemberNumber>;
      export function request(
        bodyParams: any,
        options?: RequestConfig,
      ): ResponseType;
    }
  }

  /**
   * 用户基本信息管理接口
   */
  export namespace basUser {
    /**
     * 获取用户拥有的分组
     * /basUser/getUserRelByUserId
     */
    export namespace getUserRelByUserId {
      export type ResponseType = Promise<GroupUserRel[]>;
      export function request(
        bodyParams: any,
        options?: RequestConfig,
      ): ResponseType;
    }

    /**
     * 更新用户分组姓名
     * /basUser/updateGroupNickName
     */
    export namespace updateGroupNickName {
      export type ResponseType = Promise<boolean>;
      export function request(
        bodyParams: any,
        options?: RequestConfig,
      ): ResponseType;
    }
  }

  /**
   * 班级通知接口
   */
  export namespace bizEnroll {
    /**
     * 根据分组Id查询通知信息
     * /biz/enroll/queryByGroupId
     */
    export namespace queryByGroupId {
      export class Params {
        /** 页号 */
        pageNumber?: number;
        /** 页面大小 */
        pageSize?: number;
        /** 排序字段 */
        sort?: string;
        /** 排序方式 asc/desc */
        order?: string;
        /** 分组id */
        groupId?: number;
      }

      export type ResponseType = Promise<Page<BizEnroll>>;
      export function request(
        params: Params,
        options?: RequestConfig,
      ): ResponseType;
    }

    /**
     * 根据id获取信息
     * /biz/enroll/view
     */
    export namespace view {
      export class Params {
        /** id */
        id?: number;
      }

      export type ResponseType = Promise<BizEnroll>;
      export function request(
        params: Params,
        options?: RequestConfig,
      ): ResponseType;
    }
  }

  /**
   * 消息总表
   */
  export namespace bizMessage {
    /**
     * 根据分组Id查询分组信息
     * /bizMessage/queryByGroupId
     */
    export namespace queryByGroupId {
      export class Params {
        /** 页号 */
        pageNumber?: number;
        /** 页面大小 */
        pageSize?: number;
        /** 排序字段 */
        sort?: string;
        /** 排序方式 asc/desc */
        order?: string;
        /** 分组id */
        groupId?: number;
      }

      export type ResponseType = Promise<Page<BizMessage>>;
      export function request(
        params: Params,
        options?: RequestConfig,
      ): ResponseType;
    }
  }

  /**
   * 班级通知接口
   */
  export namespace bizNotice {
    /**
     * 新增通知
     * /bizNotice/add
     */
    export namespace add {
      export type ResponseType = Promise<boolean>;
      export function request(
        bodyParams: BizNotice,
        options?: RequestConfig,
      ): ResponseType;
    }

    /**
     * 根据分组Id查询通知信息
     * /bizNotice/queryByGroupId
     */
    export namespace queryByGroupId {
      export class Params {
        /** 页号 */
        pageNumber?: number;
        /** 页面大小 */
        pageSize?: number;
        /** 排序字段 */
        sort?: string;
        /** 排序方式 asc/desc */
        order?: string;
        /** 分组id */
        groupId?: number;
      }

      export type ResponseType = Promise<Page<BizNotice>>;
      export function request(
        params: Params,
        options?: RequestConfig,
      ): ResponseType;
    }

    /**
     * 根据id获取信息
     * /bizNotice/view
     */
    export namespace view {
      export class Params {
        /** id */
        id?: number;
      }

      export type ResponseType = Promise<BizNotice>;
      export function request(
        params: Params,
        options?: RequestConfig,
      ): ResponseType;
    }
  }

  /**
   * 登录相关接口
   */
  export namespace system {
    /**
     * 获取登录用户相关信息
     * /system/getInfo
     */
    export namespace getInfo {
      export type ResponseType = Promise<SystemUser>;
      export function request(options?: RequestConfig): ResponseType;
    }

    /**
     * 微信单点登录接口
     * /system/ssoLogin
     */
    export namespace login {
      export class Params {
        /** 唯一标识 */
        id?: number;
        /** 创建者 */
        creator?: string;
        /** 创建时间 */
        createDate?: number;
        /** 更新者 */
        lastModifier?: string;
        /** 更新时间 */
        lastModDate?: number;
        /** 状态 0-启用，1-停用 */
        status?: number;
        /** 用户唯一标识 */
        openid?: string;
        /** 开放平台的唯一标识符 */
        unionid?: string;
        /** 用户昵称 */
        nickName?: string;
        /** 用户头像，最后一个数值代表正方形头像大小（有0、46、64、96、132数值可选，0代表640*640正方形头像），用户没有头像时该项为空。若用户更换头像，原有头像URL将失效。 */
        avatarUrl?: string;
        /** 用户的性别，值为1时是男性，值为2时是女性，值为0时是未知 */
        gender?: number;
        /** 用户所在城市 */
        city?: string;
        /** 用户所在省份 */
        province?: string;
        /** country */
        country?: string;
        /** 用户绑定的手机号（国外手机号会有区号） */
        phoneNumber?: string;
        /** 没有区号的手机号 */
        purePhoneNumber?: string;
        /** countryCode */
        countryCode?: string;
        /** 用户名 */
        username?: string;
        /** 密码 */
        password?: string;
        /** 分组数量 */
        groupNum?: number;
        /** 分组昵称 */
        groupNickName?: string;
      }

      export type ResponseType = Promise<string>;
      export function request(
        params: Params,
        bodyParams: any,
        options?: RequestConfig,
      ): ResponseType;
    }

    /**
     * 切换用户分组
     * /system/switchGroup
     */
    export namespace switchGroup {
      export type ResponseType = Promise<boolean>;
      export function request(
        bodyParams: any,
        options?: RequestConfig,
      ): ResponseType;
    }
  }

  /**
   * 测试接口
   */
  export namespace test {
    /**
     * 测试短信发送接口
     * /test/msg
     */
    export namespace msg {
      export type ResponseType = Promise<any>;
      export function request(options?: RequestConfig): ResponseType;
    }
  }
}
