import fetch from '../../../../utils/fetch';

/**
 * @desc 测试短信发送接口
 */
export function request() {
  return fetch({
    url: '/test/msg',
    method: 'get',
    header: {
      'Content-Type': 'application/json',
    },
  });
}
