<script lang="ts" setup>
import Button from '@/lib/Button.vue';
const click = () => {
    console.log(1111);
};
</script>

<template>
    <Button @click="click" disabled>你好</Button>
    <Button @click="click" level="warning" disabled>警告按钮</Button>
    <Button @click="click" level="primary" disabled>主要按钮</Button>
    <Button @click="click" level="danger" disabled>危险按钮</Button>
    <Button @click="click" level="danger" theme="link" disabled>
        危险按钮
    </Button>
    <Button @click="click" level="danger" theme="text" disabled>
        危险按钮
    </Button>
</template>
<demo>
禁用disabled按钮
</demo>
