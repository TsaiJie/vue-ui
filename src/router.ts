import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Doc from '@/views/Doc.vue';
import Switch from '@/components/Switch.vue';
import Button from '@/components/Button.vue';
import Dialog from '@/components/Dialog.vue';
import Tabs from '@/components/Tabs.vue';

const history = createWebHashHistory();
const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc',
            component: Doc,
            children: [
                {
                    path: '/doc/switch',
                    component: Switch,
                },
                {
                    path: '/doc/button',
                    component: Button,
                },
                {
                    path: '/doc/dialog',
                    component: Dialog,
                },
                {
                    path: '/doc/tabs',
                    component: Tabs,
                },
            ],
        },
    ],
});
export default router;