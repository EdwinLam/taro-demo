import fetch from '../../../../utils/fetch';

/**
 * @desc 统计分组各种人员数量
 */
export function request(data) {
  return fetch({
    url: '/basGroup/statisticalGroupMemberNumber',
    method: 'get',
    header: {
      'Content-Type': 'application/json',
    },
    data,
  });
}
