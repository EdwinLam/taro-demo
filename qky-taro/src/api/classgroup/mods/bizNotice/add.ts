import fetch from '../../../../utils/fetch';

/**
 * @desc 新增通知
 */
export function request(data) {
  return fetch({
    url: '/bizNotice/add',
    method: 'post',
    header: {
      'Content-Type': 'application/json',
    },
    data,
  });
}
