import SaleItem from "@/model/example/SaleItem";
import { Options, props } from "vue-class-component";

const Props = props({
  saleItem: {
    type: SaleItem,
    required: true,
    default: function() {
      return new SaleItem();
    }
  }
});

@Options({
  name: "FlashCard",
  components: {}
})
export default class Home extends Props {
  doClick() {
    this.$emit("click", this.saleItem.uuid);
  }
}
