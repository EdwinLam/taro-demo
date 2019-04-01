import fetch from '../../../utils/fetch';
/**
 * 获取用户拥有的分组
 */
export default function getUserRelByUserId({
  userId,
  options,
}: {
  /** 用户id*/ userId: string;
  /** 请求配置参数*/ options?: Qky.http.options;
}) {
  const fetchOption = Object.assign(
    {
      url: '/basUser/getUserRelByUserId',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
      data: { userId },
    },
    options,
  );
  return fetch.request(fetchOption);
}
