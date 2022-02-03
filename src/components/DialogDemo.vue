<script setup lang="ts">
import Dialog from '@/lib/Dialog.vue';
import Button from '@/lib/Button.vue';
import { ref, watch } from 'vue';
const visible = ref(false);
const visible1 = ref(false);
watch(visible, () => {
    console.log(visible.value);
});
const handleOk = () => {
    return true;
};
const handleCancel = () => {
    return false;
};
</script>

<template>
    <div>
        <div>
            <h2>示例1</h2>
            <Dialog
                v-model:visible="visible"
                :ok="handleOk"
                :cancel="handleCancel"
            >
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
        </div>
        <div>
            <h2>示例2</h2>
            <Dialog v-model:visible="visible1" closeOnClickOverlay></Dialog>
            <Button @click="visible1 = !visible1">toggle</Button>
        </div>
    </div>
</template>

<style scoped></style>
