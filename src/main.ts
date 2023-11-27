import './design/index.scss';
import { createApp } from 'vue';
import { setupStore } from './stores';
import ElementPlus from 'element-plus';
import { setupI18n } from './locale';
import 'element-plus/dist/index.css';
import router from './router';
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
