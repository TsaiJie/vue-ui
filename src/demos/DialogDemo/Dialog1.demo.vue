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
    <Dialog v-model:visible="visible" :ok="handleOk" :cancel="handleCancel">
        <!--            ts-ignore-->
        <template v-slot:title>
            <strong>我是大标题</strong>
        </template>
        <template v-slot:content>
            <div>
                <p>111</p>
                <p>222</p>
                <p>333</p>
            </div>
        </template>
    </Dialog>
    <Button @click="visible = !visible">toggle</Button>
</template>

<demo>
普通用法
</demo>
