<script lang="ts" setup>
import Button from '@/lib/Button.vue';
const click = () => {
    console.log(1111);
};
</script>

<template>
    <div>
        <div>
            <h2>示例一</h2>
            <Button @click="click">你好</Button>
            <Button @click="click" size="small">你好</Button>
            <Button @click="click" size="big">你好</Button>
        </div>
        <div>
            <h2>示例二</h2>
            <Button @click="click" theme="link">你好</Button>
            <Button @click="click" theme="link" size="small">你好</Button>
            <Button @click="click" theme="link" size="big">你好</Button>
        </div>
        <div>
            <h2>示例三</h2>
            <Button @click="click" theme="text">你好</Button>
            <Button @click="click" theme="text" size="small">你好</Button>
            <Button @click="click" theme="text" size="big">你好</Button>

        </div>
    </div>

</template>

<style scoped lang="less"></style>
