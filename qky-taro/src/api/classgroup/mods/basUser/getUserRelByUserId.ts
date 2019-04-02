import fetch from '../../../../utils/fetch';

/**
 * @desc 获取用户拥有的分组
 */
export function request(data) {
  return fetch({
    url: '/basUser/getUserRelByUserId',
    method: 'get',
    header: {
      'Content-Type': 'application/json',
    },
    data,
  });
}
