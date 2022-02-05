<script setup lang="ts">
import Button from '@/lib/Button.vue';
import Dialog from '@/lib/Dialog.vue';
import { ref } from 'vue';
const visible = ref(false);
const handleOk = () => {
    return true;
};
const handleCancel = () => {
    return false;
};
</script>

<template>
    <Dialog
        v-model:visible="visible"
        closeOnClickOverlay
        :ok="handleOk"
        :cancel="handleCancel"
    ></Dialog>
    <Button @click="visible = !visible">toggle</Button>
</template>

<demo>
点击蒙层关闭
</demo>
