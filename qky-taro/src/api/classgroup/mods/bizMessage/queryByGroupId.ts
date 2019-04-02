import fetch from '../../../../utils/fetch';

/**
 * @desc 根据分组Id查询分组信息
 */
export function request(data) {
  return fetch({
    url: '/bizMessage/queryByGroupId',
    method: 'get',
    header: {
      'Content-Type': 'application/json',
    },
    data,
  });
}
