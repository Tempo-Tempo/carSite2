import { createApp } from "vue";
import App from "./App.vue";
import components from "./components";
import YmapPlugin from "vue-yandex-maps";
import router from "@/components/router/router.js";

const settings = {
  apiKey: "31916e9c-7b93-48f2-b783-02f8c1978ab3", // Индивидуальный ключ API
  lang: "ru_RU", // Используемый язык
  coordorder: "latlong", // Порядок задания географических координат
  debug: false, // Режим отладки
  version: "2.1", // Версия Я.Карт
};
const app = createApp(App);

app.use(router);
components.forEach((component) => {
  app.component(component.name, component);
});
app.use(YmapPlugin, settings);
app.mount("#app");
