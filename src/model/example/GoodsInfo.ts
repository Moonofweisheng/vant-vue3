export default class GoodsInfo {
  code: string = ""; // 商品码
  name: string = ""; // 商品名
  weight: string = ""; // 重量
  oldPrice: number = 0; // 原价
  newPrice: number = 0; // 优惠价
  swipeList: string[] = []; // 轮播图列表
  description: string = ""; // 描述
}
