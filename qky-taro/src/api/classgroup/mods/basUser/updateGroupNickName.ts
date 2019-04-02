import fetch from '../../../../utils/fetch';

/**
 * @desc 更新用户分组姓名
 */
export function request(data) {
  return fetch({
    url: '/basUser/updateGroupNickName',
    method: 'post',
    header: {
      'Content-Type': 'application/json',
    },
    data,
  });
}
