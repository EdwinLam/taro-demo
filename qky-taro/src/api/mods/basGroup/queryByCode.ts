import fetch from '../../../utils/fetch';
/**
 * 登录接口
 */
export default function queryByCode({
  groupCode,
  options,
}: {
  /** 分组code*/ groupCode: string;
  /** 请求配置参数*/ options?: Qky.http.options;
}) {
  const fetchOption = Object.assign(
    {
      url: '/basGroup/queryByCode',
      method: 'get',
      header: {
        'Content-Type': 'application/json',
      },
      data: { groupCode },
    },
    options,
  );
  return fetch.request(fetchOption);
}
