import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Doc from '@/views/Doc.vue';
import Switch from '@/demos/SwitchDemo.vue';
import Button from '@/components/ButtonDemo.vue';
import Dialog from '@/components/DialogDemo.vue';
import Tabs from '@/components/TabsDemo.vue';
import Default from '@/components/Default.vue';
import Markdown from '@/components/Markdown.vue';
import { h as createElement } from 'vue';
const md = (fileName: string) =>
    createElement(Markdown, {
        path: `../markdown/${fileName}.md`,
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
                    component: Default,
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
