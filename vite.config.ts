// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import path from 'path';
import md from './plugin/md';
import demoCode from './plugin/demoCode';
// https://vitejs.dev/config
const lib = defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve('src'),
        },
    },
    // 打包配置
    build: {
        lib: {
            // 入口文件
            entry: path.resolve(__dirname, 'src/lib/index.ts'),
            // 设置名字
            name: 'tsai-vue-ui',
            // 打包后的名字
            fileName: format => `lib/tsai-vue-ui.${format}.js`,
        },
        outDir: 'dist_lib',
        sourcemap: true,
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
});
const project = defineConfig({
    base: './',
    plugins: [vue(), md(), demoCode()],
    resolve: {
        alias: {
            '@': path.resolve('src'),
        },
    },
    // 打包配置
    build: {
        outDir: 'dist_website'
    }

});

export default ({ mode }) => {
    const url = loadEnv(mode, process.cwd()).VITE_BASEURL;
    if (url === 'lib') {
        return lib;
    } else {
        return project;
    }
};
