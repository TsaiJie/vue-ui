<script lang="ts" setup>
import Button from '@/lib/Button.vue';
const click = () => {
    console.log(1111);
};
</script>

<template>
    <Button @click="click" theme="link">你好</Button>
    <Button @click="click" theme="link" level="primary">你好</Button>
    <Button @click="click" theme="link" level="danger">你好</Button>
    <Button @click="click" theme="link" level="warning">你好</Button>
    <Button @click="click" theme="text">你好</Button>
    <Button @click="click" theme="text" level="primary">你好</Button>
    <Button @click="click" theme="text" level="danger">你好</Button>
    <Button @click="click" theme="text" level="warning">你好</Button>
</template>
<demo>
link和text按钮
</demo>
