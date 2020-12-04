import SaleItem from "./SaleItem";

export default class FlashSale {
  time: number = 0; // 限时倒计时
  saleList: SaleItem[] = []; // 商品列表
}
