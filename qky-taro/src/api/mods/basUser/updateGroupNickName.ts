import fetch from '../../../utils/fetch';
/**
 * 更新用户分组姓名
 */
export default function updateGroupNickName({
  userId,
  groupId,
  nickName,
  options,
}: {
  /** 用户id*/ userId: string;
  /** 分组id*/ groupId: string;
  /** 群组昵称*/ nickName: string;
  /** 请求配置参数*/ options?: Qky.http.options;
}) {
  const fetchOption = Object.assign(
    {
      url: '/basUser/updateGroupNickName',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      data: { userId, groupId, nickName },
    },
    options,
  );
  return fetch.request(fetchOption);
}
