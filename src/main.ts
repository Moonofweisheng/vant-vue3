import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Notify } from "vant";
process.env.NODE_ENV === "development" && require("./mock/mock");
const app = createApp(App);
app.config.warnHandler = err => err;
app
  .use(store)
  .use(router)
  .use(Notify)
  .mount("#app");
