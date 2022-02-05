<script setup lang="ts">
import Button from '@/lib/Button.vue';
import Dialog from '@/lib/Dialog.vue';
//@ts-ignore
import openDialog from '@/lib/openDialog';
import { h } from 'vue';
const handleOk = () => {
    return true;
};
const handleCancel = () => {
    return false;
};
const showDialog = () => {
    openDialog({
        title: h('strong', '我是大标题'),
        content: '我是内容',
        ok: handleOk,
        cancel: handleCancel,
        closeOnClickOverlay: true,
    });
};
</script>

<template>
    <Button @click="showDialog">toggle</Button>
</template>

<demo>
以函数的形式打开
</demo>
