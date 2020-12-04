import ChannelItem from "./ChannelItem";
import FlashSale from "./FlashSale";

export default class HomeInit {
  channelList: ChannelItem[] = []; // 频道列表
  swipeList: string[] = []; // 轮播图列表
  flashSale: FlashSale = new FlashSale(); // 限时抢购
}
