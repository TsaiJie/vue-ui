import { createApp } from 'vue';
import App from './App.vue';
import { createWebHashHistory, createRouter } from 'vue-router';
import Tsai from './components/Tsai.vue';
import Tsai2 from './components/Tsai2.vue';
const history = createWebHashHistory();
const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Tsai },
        { path: '/xxx', component: Tsai2 },
    ],
});
const app = createApp(App);
app.use(router);
app.mount('#app');
