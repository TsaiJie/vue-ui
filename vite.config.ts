// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import path from 'path';
import md from './plugin/md';
import demoCode from './plugin/demoCode';
// https://vitejs.dev/config

export default defineConfig({
    base: './',
    plugins: [vue(), md(), demoCode()],
    resolve: {
        alias: {
            '@': path.resolve('src'),
        },
    },
});
