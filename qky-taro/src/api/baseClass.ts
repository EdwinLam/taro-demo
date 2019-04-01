export class BasAtts {
  /** 创建时间 */
  createDate = undefined;

  /** 创建者 */
  creator = '';

  /** 文件id,上传第三方文件系统时，文件标识的id */
  fileId = '';

  /** 文件名称,用于显示 */
  fileName = '';

  /** 文件大小，单位是k */
  fileSize = undefined;

  /** 文件类型 */
  fileType = '';

  /** 文件访问路径 */
  fileUrl = '';

  /** 所属群组id */
  groupId = undefined;

  /** 唯一标识 */
  id = undefined;

  /** 更新时间 */
  lastModDate = undefined;

  /** 更新者 */
  lastModifier = '';

  /** 来源标识编码,通常是sourceId所对应的表名，如biz_notice表示通知；biz_enroll表示报名； */
  sourceCode = '';

  /** 所属业务表id */
  sourceId = undefined;

  /** 状态 0-启用，1-停用 */
  status = undefined;
}

export class BasGroup {
  /** 创建时间 */
  createDate = undefined;

  /** 创建者 */
  creator = '';

  /** 群号,9位数字构成,类似于QQ群的群号 */
  groupCode = '';

  /** 群组名称 */
  groupName = '';

  /** 唯一标识 */
  id = undefined;

  /** 群组介绍 */
  introduce = '';

  /** 成员是否要审核，1：是；0：否；开启时，所加入的成员需审核后才能加入群组。 */
  isNeedCheck = undefined;

  /** 是否加入 */
  joined = false;

  /** 更新时间 */
  lastModDate = undefined;

  /** 更新者 */
  lastModifier = '';

  /** 成员人数限制,-1表示无限制（该字段用于日后增值考虑） */
  memberLimit = undefined;

  /** 成员人数 */
  memberNum = undefined;

  /** 通知公告 */
  notice = '';

  /** 手机号码 */
  phone = '';

  /** 状态 0-启用，1-停用 */
  status = undefined;
}

export class BasUser {
  /** 用户头像，最后一个数值代表正方形头像大小（有0、46、64、96、132数值可选，0代表640*640正方形头像），用户没有头像时该项为空。若用户更换头像，原有头像URL将失效。 */
  avatarUrl = '';

  /** 用户所在城市 */
  city = '';

  /** country */
  country = '';

  /** countryCode */
  countryCode = '';

  /** 创建时间 */
  createDate = undefined;

  /** 创建者 */
  creator = '';

  /** 用户的性别，值为1时是男性，值为2时是女性，值为0时是未知 */
  gender = undefined;

  /** 分组昵称 */
  groupNickName = '';

  /** 分组数量 */
  groupNum = undefined;

  /** 唯一标识 */
  id = undefined;

  /** 更新时间 */
  lastModDate = undefined;

  /** 更新者 */
  lastModifier = '';

  /** 用户昵称 */
  nickName = '';

  /** 用户唯一标识 */
  openid = '';

  /** 密码 */
  password = '';

  /** 用户绑定的手机号（国外手机号会有区号） */
  phoneNumber = '';

  /** 用户所在省份 */
  province = '';

  /** 没有区号的手机号 */
  purePhoneNumber = '';

  /** 状态 0-启用，1-停用 */
  status = undefined;

  /** 开放平台的唯一标识符 */
  unionid = '';

  /** 用户名 */
  username = '';
}

export class BizEnroll {
  /** 附件列表 */
  basAtts = [];

  /** 内容 */
  content = '';

  /** 创建时间 */
  createDate = undefined;

  /** 创建者 */
  creator = '';

  /** 创建人名称 */
  creatorName = '';

  /** 报名截止时间 */
  endDate = undefined;

  /** 报名人数 */
  enrollNum = undefined;

  /** 所属群组id */
  groupId = undefined;

  /** 唯一标识 */
  id = undefined;

  /** 更新时间 */
  lastModDate = undefined;

  /** 更新者 */
  lastModifier = '';

  /** 报名名额,-1表示不限； */
  limitNum = undefined;

  /** 已读人数 */
  readNum = undefined;

  /** 状态 0-启用，1-停用 */
  status = undefined;

  /** 标题 */
  title = '';
}

export class BizMessage {
  /** 创建时间 */
  createDate = undefined;

  /** 创建者 */
  creator = '';

  /** 创建者名称 */
  creatorName = '';

  /** 所属群组id */
  groupId = undefined;

  /** 唯一标识 */
  id = undefined;

  /** 更新时间 */
  lastModDate = undefined;

  /** 更新者 */
  lastModifier = '';

  /** 消息内容 */
  messageContent = '';

  /** 消息名称 */
  messageTitle = '';

  /** 来源标识编码,通常是sourceId所对应的表名，如biz_notice表示通知；biz_enroll表示报名； */
  sourceCode = '';

  /** 所属业务表id */
  sourceId = undefined;

  /** 状态 0-启用，1-停用 */
  status = undefined;
}

export class BizNotice {
  /** 附件列表 */
  basAtts = [];

  /** 已读列表 */
  basUsers = [];

  /** 内容 */
  content = '';

  /** 创建时间 */
  createDate = undefined;

  /** 创建者 */
  creator = '';

  /** 创建人名称 */
  creatorName = '';

  /** 所属群组 */
  groupId = undefined;

  /** 唯一标识 */
  id = undefined;

  /** 更新时间 */
  lastModDate = undefined;

  /** 更新者 */
  lastModifier = '';

  /** 已读人数 */
  readNum = undefined;

  /** 状态 0-启用，1-停用 */
  status = undefined;

  /** 标题 */
  title = '';
}

export class GroupUserRel {
  /** basGroup */
  basGroup = new BasGroup();

  /** basUser */
  basUser = new BasUser();

  /** 创建时间 */
  createDate = undefined;

  /** 创建者 */
  creator = '';

  /** 群组id */
  groupId = undefined;

  /** 唯一标识 */
  id = undefined;

  /** 更新时间 */
  lastModDate = undefined;

  /** 更新者 */
  lastModifier = '';

  /** 成员在群组中的昵称 */
  nickName = '';

  /** 备注，可用于用户申请加入群组时，填写的信息，用于审核依据 */
  remark = '';

  /** 状态 0-启用，1-停用 */
  status = undefined;

  /** 关联学生id */
  studentId = undefined;

  /** 用户id */
  userId = undefined;

  /** 用户在群组中的身份，1：班主任（创建人) ；2：管理员；3：教师；4：家长。群组创建人默认是班主任，管理员由群主设置。 */
  userIdentity = undefined;

  /** 成员状态，审核不通过时，移除记录，只保留两种状态；0：待审核，1：正式成员； */
  userStatus = undefined;

  /** 用户类型(1:教师；2：家长) */
  userType = undefined;
}

export class Page<T0 = any> {
  /** content */
  content = [];

  /** first */
  first = false;

  /** last */
  last = false;

  /** number */
  number = undefined;

  /** numberOfElements */
  numberOfElements = undefined;

  /** pageable */
  pageable = new Pageable();

  /** size */
  size = undefined;

  /** sort */
  sort = new Sort();

  /** totalElements */
  totalElements = undefined;

  /** totalPages */
  totalPages = undefined;
}

export class Pageable {
  /** offset */
  offset = undefined;

  /** pageNumber */
  pageNumber = undefined;

  /** pageSize */
  pageSize = undefined;

  /** paged */
  paged = false;

  /** sort */
  sort = new Sort();

  /** unpaged */
  unpaged = false;
}

export class Sort {
  /** sorted */
  sorted = false;

  /** unsorted */
  unsorted = false;
}

export class StatisticalGroupMemberNumber {
  /** 管理员数量 */
  adminNumber = '';

  /** 分组id */
  groupId = undefined;

  /** 分组名称 */
  groupName = '';

  /** 成员数量 */
  memberNumber = '';

  /** 群主数量 */
  ownerNumber = '';

  /** 家长数量 */
  parentNumber = '';

  /** 教师数量 */
  teacherNumber = '';
}

export class SystemUser {
  /** 是否管理员 */
  admin = false;

  /** 头像 */
  avatarUrl = '';

  /** 所在分组code */
  groupCode = '';

  /** 所在分组id */
  groupId = undefined;

  /** 分组名称 */
  groupName = '';

  /** 分组昵称 */
  groupNickName = '';

  /** 所在分组公告 */
  groupNotice = '';

  /** 分组数量 */
  groupNum = undefined;

  /** 是否拥有者 */
  owner = false;

  /** 手机号码 */
  phoneNumber = '';

  /** 分组数量统计 */
  statisticalGroupMemberNumber = new StatisticalGroupMemberNumber();

  /** 用户id */
  userId = undefined;
}
