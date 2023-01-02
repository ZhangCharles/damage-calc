import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import ElementPlus from "element-plus";
import 'element-plus/theme-chalk/index.css';
import 'element-plus/theme-chalk/display.css';
import 'element-plus/theme-chalk/dark/css-vars.css'
import router from "./router";

import i18n from "./i18n"

const pinia = createPinia();
const app = createApp(App);
app.use(i18n);
app.use(ElementPlus).use(router).use(pinia).mount("#app");
