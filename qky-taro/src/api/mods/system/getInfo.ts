import fetch from '../../../utils/fetch';
/**
 * 获取登录用户相关信息
 */
export default function getInfo({
  options,
}: {
  /** 请求配置参数*/ options?: Qky.http.options;
}) {
  const fetchOption = Object.assign(
    {
      url: '/system/getInfo',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    },
    options,
  );
  return fetch.request(fetchOption);
}
