<script lang="ts" setup>
import Button from '@/lib/Button.vue';
const click = () => {
    console.log(1111);
};
</script>

<template>
    <div>
        <Button @click="click">你好</Button>
        <Button @click="click">你好</Button>
        <Button @click="click" theme="link">你好</Button>
        <Button @click="click" theme="text">你好</Button>
        <Button @click="click">你好</Button>
        <Button @click="click">你好</Button>
    </div>
</template>

<style scoped lang="less">

</style>
