import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Doc from '@/views/Doc.vue';
import Switch from '@/demos/SwitchDemo.vue';
import Button from '@/demos/ButtonDemo.vue';
import Dialog from '@/demos/DialogDemo.vue';
import Tabs from '@/demos/TabsDemo.vue';
import Markdown from '@/components/Markdown.vue';
import { h as createElement } from 'vue';
const md = (fileName: string) =>
    createElement(Markdown, {
        path: fileName,
        key: fileName,
    });
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
                    redirect: '/doc/intro',
                },
                {
                    path: 'intro',
                    component: md('intro'),
                },
                {
                    path: 'install',
                    component: md('install'),
                },
                {
                    path: 'start',
                    component: md('start'),
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
