import fetch from '../../../../utils/fetch';

/**
 * @desc 根据分组Id查询通知信息
 */
export function request(data) {
  return fetch({
    url: '/bizNotice/queryByGroupId',
    method: 'get',
    header: {
      'Content-Type': 'application/json',
    },
    data,
  });
}
