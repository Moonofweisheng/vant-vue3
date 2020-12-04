import { ref } from "vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  setup() {
    const test = ref(0);
    return test;
  }
})
export default class Cart extends Vue {
  active: number = 0;
}
