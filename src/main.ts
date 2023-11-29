import './design/index.scss';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import { setupStore } from './stores';
import { setupI18n } from './locale';
import ElementPlus from 'element-plus';
import router from './router';
import { createApp } from 'vue';
import App from './App.vue';

async function bootstrap() {
  const app = createApp(App);
  app.use(ElementPlus);
  app.use(router);
  setupStore(app);
  await setupI18n(app);
  app.mount('#app');
}
bootstrap();
