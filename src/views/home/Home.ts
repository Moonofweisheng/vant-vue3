import { onMounted, reactive, Ref, ref } from "vue";
import { Options, setup, Vue } from "vue-class-component";
import { Image, Search, Swipe, SwipeItem, Icon, Grid, GridItem, CountDown } from "vant";
import ExampleApi from "@/http/exampleApi/ExampleApi";
import HomeInit from "@/model/example/HomeInit";
import BaseResponse from "@/model/common/BaseResponse";
import ChannelItem from "@/model/example/ChannelItem";
import FlashSale from "@/model/example/FlashSale";
import FlashCard from "./cmp/FlashCard.vue";

@Options({
  components: {
    [Search.name]: Search,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Image.name]: Image,
    [Icon.name]: Icon,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [CountDown.name]: CountDown,
    FlashCard
  }
})
export default class Home extends Vue {
  info = setup(() => {
    return initInfo();
  }); // 初始化信模块
  search = setup(() => searchModule()); // 搜索模块

  /**
   * 限时抢购商品点击事件
   * @param code 限时抢购商品code
   */
  doFlashClick(code: string) {
    this.$router.push({
      path: "/goodsDetail",
      query: {
        code: code
      }
    });
  }
}

/**
 * 初始化模块
 */
function initInfo() {
  const swipe: Ref<string[]> = ref([]); // 轮播图列表
  const channel: Ref<ChannelItem[]> = ref([]); // 频道列表
  const flashSale: FlashSale = reactive(new FlashSale()); // 限时抢购列表
  // 初始化
  async function doGetInit() {
    const { data: info }: BaseResponse<HomeInit> = await ExampleApi.getInit()
      .then(resp => resp)
      .catch(error => error);
    if (info) {
      swipe.value = info.swipeList;
      channel.value = info.channelList;
      flashSale.saleList = info.flashSale.saleList;
      flashSale.time = info.flashSale.time;
    }
  }
  onMounted(() => {
    doGetInit();
  });

  return {
    swipe,
    channel,
    flashSale
  };
}

/**
 * 搜索模块
 */
function searchModule() {
  const keyWord: Ref<string> = ref(""); // 搜索关键词
  /**
   * 搜索方法
   * @param keyWord 关键词
   */
  function doSearch(keyWord: string) {
    console.log(keyWord);
  }
  return { keyWord, doSearch };
}
