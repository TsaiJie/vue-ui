<script lang="ts" setup>
import { useSlots } from 'vue';
import Tab from './Tab.vue';
//获取slots
const defaultSlots = useSlots().default?.();
//判断子组件的类型
defaultSlots?.forEach(tag => {
    if (tag.type !== Tab) {
        throw new Error('Tabs 的子组件必须是Tab');
    }
});
</script>

<template>
<slot></slot>
</template>

<style scoped></style>
