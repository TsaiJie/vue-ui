<script lang="ts" setup>
import Button from '@/lib/Button.vue';
const click = () => {
    console.log(1111);
};
</script>

<template>
    <Button @click="click">你好</Button>
    <Button @click="click" level="primary">主要按钮</Button>
    <Button @click="click" level="success">成功按钮</Button>
    <Button @click="click" level="danger">危险按钮</Button>
    <Button @click="click" level="warning">警告按钮</Button>
</template>
<demo>
不同主题的按钮
</demo>
