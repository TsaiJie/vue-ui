<script setup lang="ts">
import { provide, ref } from 'vue';
//获取页面的宽度
const width = document.documentElement.clientWidth;
const asideVisible = ref(width > 500);
provide('asideVisible', asideVisible);

</script>

<template>
    <router-view />
</template>
