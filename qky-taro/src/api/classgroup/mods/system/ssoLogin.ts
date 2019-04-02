import fetch from '../../../../utils/fetch';

/**
 * @desc 微信单点登录接口
 */
export function request(data) {
  return fetch({
    url: '/system/ssoLogin',
    method: 'post',
    header: {
      'Content-Type': 'application/json',
    },
    data,
  });
}
