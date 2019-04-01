import fetch from '../../../utils/fetch';
/**
 * 根据id获取信息
 */
export default function view({
  id,
  options,
}: {
  /** id*/ id: number;
  /** 请求配置参数*/ options?: Qky.http.options;
}) {
  const fetchOption = Object.assign(
    {
      url: '/bizNotice/view',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
      data: { id },
    },
    options,
  );
  return fetch.request(fetchOption);
}