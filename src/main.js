import { createApp } from "vue";
import { VueShowdownPlugin } from "vue-showdown";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";

createApp(App)
  .use(VueShowdownPlugin, {
    flavor: "github",
    options: {
      emoji: false,
    },
  })
  .use(router)
  .mount("#app");
