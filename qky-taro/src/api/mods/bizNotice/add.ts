import fetch from '../../../utils/fetch';
import { defs } from '~/api/api';
/**
 * 新增通知
 */
export default function add({
  bizNotice,
  options,
}: {
  /** bizNotice*/ bizNotice: defs.BizNotice;
  /** 请求配置参数*/ options?: Qky.http.options;
}) {
  const fetchOption = Object.assign(
    {
      url: '/bizNotice/add',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      data: { bizNotice },
    },
    options,
  );
  return fetch.request(fetchOption);
}
