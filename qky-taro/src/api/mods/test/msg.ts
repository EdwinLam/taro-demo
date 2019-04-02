import fetch from '../../../utils/fetch';
/**
 * 测试短信发送接口
 */
export default function msg({
  options,
}: {
  /** 请求配置参数*/ options?: Qky.http.options;
}) {
  const fetchOption = Object.assign(
    {
      url: '/test/msg',
      method: 'get',
      header: {
        'Content-Type': 'application/json',
      },
    },
    options,
  );
  return fetch.request(fetchOption);
}
