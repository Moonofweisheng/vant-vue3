import { Options, setup, Vue } from "vue-class-component";
import { Image, Swipe, SwipeItem, SubmitBar } from "vant";
import { onMounted, reactive } from "vue";
import GoodsInfo from "@/model/example/GoodsInfo";
import ExampleApi from "@/http/exampleApi/ExampleApi";
import BaseResponse from "@/model/common/BaseResponse";

@Options({
  components: {
    [Image.name]: Image,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [SubmitBar.name]: SubmitBar
  }
})
export default class GoodsDetail extends Vue {
  goodsInfo = setup(() => initGoodsInfo()); // 搜索模块
}

function initGoodsInfo() {
  const goodsInfo: GoodsInfo = reactive(new GoodsInfo());
  // 初始化
  async function doGetInit() {
    const { data: info }: BaseResponse<GoodsInfo> = await ExampleApi.getGoodsInfo()
      .then(resp => resp)
      .catch(error => error);
    if (info) {
      goodsInfo.code = info.code;
      goodsInfo.name = info.name;
      goodsInfo.swipeList = info.swipeList;
      goodsInfo.weight = info.weight;
      goodsInfo.oldPrice = info.oldPrice;
      goodsInfo.newPrice = info.newPrice;
      goodsInfo.description = info.description;
    }
  }

  onMounted(() => {
    doGetInit();
  });

  return goodsInfo;
}
