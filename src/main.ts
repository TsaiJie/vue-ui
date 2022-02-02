import { createApp } from 'vue';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import router from '@/router';
import '@/tsai.less';
import '@/index.less';

import App from '@/App.vue';

const app = createApp(App);
app.use(router);
app.mount('#app');
