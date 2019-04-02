import fetch from '../../../../utils/fetch';

/**
 * @desc 获取登录用户相关信息
 */
export function request() {
  return fetch({
    url: '/system/getInfo',
    method: 'get',
    header: {
      'Content-Type': 'application/json',
    },
  });
}
