import { Notify, Search, Sidebar, SidebarItem, Swipe, SwipeItem } from "vant";
import { reactive, ref } from "vue";
import { Options, setup, Vue } from "vue-class-component";

function channelSider() {
  // 侧边栏列表
  const channelList = reactive([
    { title: "标签1" },
    { title: "标签2" },
    { title: "标签3" },
    { title: "标签4" },
    { title: "标签5" },
    { title: "标签6" },
    { title: "标签7" },
    { title: "标签8" }
  ]);
  // 激活的选项
  const activeKey = ref(0);

  /**
   * 切换激活选项回调
   * @param index key
   */
  function doChange(index: number) {
    Notify({ type: "primary", message: index });
  }
  return { channelList, activeKey, doChange };
}
@Options({
  components: {
    [Search.name]: Search,
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  }
})
export default class Channel extends Vue {
  keyWord: string = ""; // 搜索关键字
  siderInfo = setup(() => channelSider());
}
