import FilterParam from "./FilterParam";
import SortParam from "./SortParam";

export default class QueryParam {
  // 开始位置
  start: number = 0;
  // 页面大小
  limit: number = 0;
  //
  filters: FilterParam[] = [];
  //
  sorters: SortParam[] = [];
  // 扩展信息
  fetchParts: string[] = [];
}
