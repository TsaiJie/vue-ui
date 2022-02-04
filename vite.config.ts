// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import path from 'path';
import md  from './plugin/md';

// https://vitejs.dev/config

export default defineConfig({
    plugins: [vue(), md()],
    resolve: {
        alias: {
            '@': path.resolve('src'),
        },
    },
});
