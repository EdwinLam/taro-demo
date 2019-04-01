import fetch from '../../../utils/fetch';
/**
 * 微信单点登录接口
 */
export default function login({
  code,
  id,
  creator,
  createDate,
  lastModifier,
  lastModDate,
  status,
  openid,
  unionid,
  nickName,
  avatarUrl,
  gender,
  city,
  province,
  country,
  phoneNumber,
  purePhoneNumber,
  countryCode,
  username,
  password,
  groupNum,
  groupNickName,
  options,
}: {
  /** 登录凭证*/ code: string;
  /** 唯一标识*/ id: number;
  /** 创建者*/ creator: string;
  /** 创建时间*/ createDate: number;
  /** 更新者*/ lastModifier: string;
  /** 更新时间*/ lastModDate: number;
  /** 状态 0-启用，1-停用*/ status: number;
  /** 用户唯一标识*/ openid: string;
  /** 开放平台的唯一标识符*/ unionid: string;
  /** 用户昵称*/ nickName: string;
  /** 用户头像，最后一个数值代表正方形头像大小（有0、46、64、96、132数值可选，0代表640*640正方形头像），用户没有头像时该项为空。若用户更换头像，原有头像URL将失效。*/ avatarUrl: string;
  /** 用户的性别，值为1时是男性，值为2时是女性，值为0时是未知*/ gender: number;
  /** 用户所在城市*/ city: string;
  /** 用户所在省份*/ province: string;
  /** undefined*/ country: string;
  /** 用户绑定的手机号（国外手机号会有区号）*/ phoneNumber: string;
  /** 没有区号的手机号*/ purePhoneNumber: string;
  /** undefined*/ countryCode: string;
  /** 用户名*/ username: string;
  /** 密码*/ password: string;
  /** 分组数量*/ groupNum: number;
  /** 分组昵称*/ groupNickName: string;
  /** 请求配置参数*/ options?: Qky.http.options;
}) {
  const fetchOption = Object.assign(
    {
      url: '/system/ssoLogin',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        code,
        id,
        creator,
        createDate,
        lastModifier,
        lastModDate,
        status,
        openid,
        unionid,
        nickName,
        avatarUrl,
        gender,
        city,
        province,
        country,
        phoneNumber,
        purePhoneNumber,
        countryCode,
        username,
        password,
        groupNum,
        groupNickName,
      },
    },
    options,
  );
  return fetch.request(fetchOption);
}
