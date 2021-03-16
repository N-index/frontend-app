import { createApp } from 'vue';

import App from './App.vue';

import router from './routers';

import 'animate.css';
import 'css-doodle';

createApp(App)
  .use(router)
  .mount('#app');
