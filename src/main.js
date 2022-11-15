import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import App from "./App.vue";
import routes from "./routes";

const router = createRouter({
    history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
