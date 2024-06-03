import "@/assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

//import VueLazyload from "vue-lazyload";
import piniaPersistentState from "pinia-plugin-persistedstate";

const app = createApp(App);

app.use(createPinia().use(piniaPersistentState));
app.use(router);
//app.use(VueLazyload);

app.mount("#app");
