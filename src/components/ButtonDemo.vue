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
            <Button @click="click" disabled>你好</Button>
            <Button @click="click" size="small">你好</Button>
            <Button @click="click" size="big">你好</Button>
            <Button @click="click" size="big" level="primary">主要按钮</Button>
            <Button @click="click" size="big" level="success">成功按钮</Button>
            <Button @click="click" size="big" level="danger">危险按钮</Button>
            <Button @click="click" level="warning" disabled>警告按钮</Button>
            <Button @click="click" level="primary" disabled>主要按钮</Button>
            <Button @click="click" level="danger" disabled>危险按钮</Button>
        </div>
        <div>
            <h2>示例二</h2>
            <Button @click="click" theme="link">你好</Button>
            <Button @click="click" theme="link" level="primary">你好</Button>
            <Button @click="click" theme="link" level="success">你好</Button>
            <Button @click="click" theme="link" level="danger">你好</Button>
            <Button @click="click" theme="link" level="warning">你好</Button>
            <Button @click="click" theme="link" size="small">你好</Button>
            <Button @click="click" theme="link" size="big">你好</Button>
        </div>
        <div>
            <h2>示例三</h2>
            <Button @click="click" theme="text">你好</Button>
            <Button @click="click" theme="text" level="primary">你好</Button>
            <Button @click="click" theme="text" level="success">你好</Button>
            <Button @click="click" theme="text" level="danger">你好</Button>
            <Button @click="click" theme="text" level="warning">你好</Button>
            <Button @click="click" theme="text" size="small">你好</Button>
            <Button @click="click" theme="text" size="big">你好</Button>
        </div>
        <div>
            <h2>示例四</h2>
            <Button disabled>禁用按钮</Button>
            <Button theme="link" disabled>禁用链接按钮</Button>
            <Button theme="text" disabled>禁用按钮</Button>
        </div>
        <div>
            <Button @click="click"  loading>加载中</Button>
            <Button @click="click" >加载完毕</Button>
        </div>
    </div>
</template>

<style scoped lang="less"></style>
