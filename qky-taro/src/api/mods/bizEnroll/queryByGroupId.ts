import fetch from '../../../utils/fetch';
/**
 * 根据分组Id查询通知信息
 * @param {Object} option - foo
 * @param {String} option.pageNumber - bar
 * @param {Number} option.sort - baz
 */
export default function queryByGroupId({
  pageNumber,
  pageSize,
  sort,
  order,
  groupId,
  options,
}: {
  /** 页号*/ pageNumber: number;
  /** 页面大小*/ pageSize: number;
  /** 排序字段*/ sort: string;
  /** 排序方式 asc/desc*/ order: string;
  /** 分组id*/ groupId: number;
  /** 请求配置参数*/ options?: Qky.http.options;
}) {
  const fetchOption = Object.assign(
    {
      url: '/biz/enroll/queryByGroupId',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
      data: { pageNumber, pageSize, sort, order, groupId },
    },
    options,
  );
  return fetch.request(fetchOption);
}

queryByGroupId({pageNumber:0,groupId:1,order:'d',pageSize:1,sort:'2'})
