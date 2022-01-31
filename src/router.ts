import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Doc from '@/views/Doc.vue';
import Switch from '@/components/Switch.vue';
import Button from '@/components/Button.vue';
import Dialog from '@/components/Dialog.vue';
import Tabs from '@/components/Tabs.vue';
import Default from '@/components/default.vue';

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
                    path: '',
                    component: Default,
                },
                {
                    path: 'switch',
                    component: Switch,
                },
                {
                    path: 'button',
                    component: Button,
                },
                {
                    path: 'dialog',
                    component: Dialog,
                },
                {
                    path: 'tabs',
                    component: Tabs,
                },
            ],
        },
    ],
});
export default router;
