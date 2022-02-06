import { createApp } from 'vue';
// @ts-ignore
import router from '@/router';
import '@/tsai.less';
import '@/index.less';
import App from '@/App.vue';
import '@/assets/svg';
const app = createApp(App);
app.use(router);
app.mount('#app');
