<script setup lang="ts">
import Tabs from '@/lib/Tabs.vue';
import Tab from '@/lib/Tab.vue';
import { ref } from 'vue';
const selected = ref('导航222222');
</script>

<template>
    <Tabs v-model:selected="selected">
        <Tab title="导航1">内容1</Tab>
        <Tab title="导航222222">内容2</Tab>
        <Tab title="导航3">内容3</Tab>
    </Tabs>
</template>

<demo>
导航切换
</demo>
