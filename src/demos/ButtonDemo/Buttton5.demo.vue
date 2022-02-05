<script lang="ts" setup>
import Button from '@/lib/Button.vue';
const click = () => {
    console.log(1111);
};
</script>

<template>
    <Button @click="click" loading>加载中</Button>
    <Button @click="click">加载完毕</Button>
</template>
<demo>
loading按钮
</demo>
