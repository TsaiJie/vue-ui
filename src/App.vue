<script setup lang="ts">
import { onMounted, onUnmounted, provide, ref, watch } from 'vue';
import router from './router';
//获取页面的宽度
const width = ref(document.documentElement.clientWidth);
const asideVisible = ref(width.value > 500);
watch(width, () => {
    asideVisible.value = width.value > 500;
});
provide('asideVisible', asideVisible);

onMounted(() => {
    window.onresize = () => {
        width.value = document.documentElement.clientWidth;
    };
});
onUnmounted(() => {
    window.onresize = null;
});
//每次路由切换
router.afterEach(() => {
    if (width.value <= 500) {
        asideVisible.value = false;
    }
});
</script>

<template>
    <router-view />
</template>
