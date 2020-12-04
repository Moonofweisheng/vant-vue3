import { Options, Vue } from "vue-class-component";
import { Tabbar, TabbarItem } from "vant";

@Options({
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
})
export default class Index extends Vue {}
