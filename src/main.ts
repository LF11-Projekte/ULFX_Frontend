import "@/assets/main.css";

import { createApp } from "vue";


import App from "./App.vue";
import router from "./router";

// Plugins for vuejs
//import VueLazyload from "vue-lazyload";
import { createPinia } from "pinia";
import piniaPersistentState from "pinia-plugin-persistedstate";
import Markdown from "vue3-markdown-it";

// Import markdown style
import "@/assets/md/github-markdown-dark.css";

const app = createApp(App);

app.use(createPinia().use(piniaPersistentState));
app.use(router);
//app.use(VueLazyload);
app.use(Markdown);

app.mount("#app");
