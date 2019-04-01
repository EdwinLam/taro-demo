import fetch from '../../../utils/fetch';

export default function statisticalGroupMemberNumber({
  groupId,
  options,
}: {
  /** 分组id*/ groupId: string;
  /** 请求配置参数*/ options?: Qky.http.options;
}) {
  const fetchOption = Object.assign(
    {
      url: '/basGroup/statisticalGroupMemberNumber',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
      data: { groupId },
    },
    options,
  );
  return fetch.request(fetchOption);
}
