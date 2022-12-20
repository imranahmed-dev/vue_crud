import { createApp  } from "vue";
import { createPinia } from 'pinia'
import { createWebHistory, createRouter } from "vue-router";
import App from "./App.vue";
import routes from "./routes";

const pinia = createPinia();

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount("#app");
