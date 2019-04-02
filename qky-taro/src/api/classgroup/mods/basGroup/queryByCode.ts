import fetch from '../../../../utils/fetch';

/**
 * @desc 登录接口
 */
export function request(data) {
  return fetch({
    url: '/basGroup/queryByCode',
    method: 'get',
    header: {
      'Content-Type': 'application/json',
    },
    data,
  });
}
