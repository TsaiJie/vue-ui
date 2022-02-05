<script lang="ts" setup>
import Button from '@/lib/Button.vue';
const click = () => {
    console.log(1111);
};
</script>

<template>
    <Button @click="click">你好</Button>
    <Button @click="click" size="small">你好</Button>
    <Button @click="click" size="big">你好</Button>
</template>
<demo>
不同大小的按钮
</demo>
