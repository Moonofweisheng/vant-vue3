export default class BaseResponse<T> {
  // 响应码
  code: number = 0;
  // 结果信息
  msg: string = "";
  // 响应数据
  data: T | undefined;
  // 总数
  total: number = 0;
  //
  more: Nullable<boolean> = null;
  //
  success: Nullable<boolean> = null;
  // 提示信息
  fields: any;
}
