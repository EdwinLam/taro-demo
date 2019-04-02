import fetch from '../../../utils/fetch';
/**
 * 切换用户分组
 */
export default function switchGroup({
  userId,
  options,
}: {
  /** 用户id*/ userId: string;
  /** 请求配置参数*/ options?: Qky.http.options;
}) {
  const fetchOption = Object.assign(
    {
      url: '/system/switchGroup',
      method: 'post',
      header: {
        'Content-Type': 'application/json',
      },
      data: { userId },
    },
    options,
  );
  return fetch.request(fetchOption);
}
