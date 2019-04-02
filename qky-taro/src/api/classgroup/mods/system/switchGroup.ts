import fetch from '../../../../utils/fetch';

/**
 * @desc 切换用户分组
 */
export function request(data) {
  return fetch({
    url: '/system/switchGroup',
    method: 'post',
    header: {
      'Content-Type': 'application/json',
    },
    data,
  });
}
