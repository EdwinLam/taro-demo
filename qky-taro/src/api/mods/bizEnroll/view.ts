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
      url: '/biz/enroll/view',
      method: 'get',
      header: {
        'Content-Type': 'application/json',
      },
      data: { id },
    },
    options,
  );
  return fetch.request(fetchOption);
}
