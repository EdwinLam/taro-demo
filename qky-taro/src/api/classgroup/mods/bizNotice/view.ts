import fetch from '../../../../utils/fetch';

/**
 * @desc 根据id获取信息
 */
export function request(data) {
  return fetch({
    url: '/bizNotice/view',
    method: 'get',
    header: {
      'Content-Type': 'application/json',
    },
    data,
  });
}
