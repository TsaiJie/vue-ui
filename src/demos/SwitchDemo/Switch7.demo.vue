<script setup lang="ts">
import Switch from '@/lib/Switch.vue';
import { ref } from 'vue';
const checked = ref(false);
const beforeChange = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            return resolve(true);
        }, 1000);
    });
};

const beforeChange2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return reject(false);
        }, 1000);
    });
};
</script>

<template>
    <Switch
        v-model:checked="checked"
        active-text="开启"
        inactive-text="关闭"
        active-color="#13ce66"
        inactive-color="#ff4949"
        :before-change="beforeChange"
        inline-prompt
    />
    <br />
    <Switch
        v-model:checked="checked"
        active-text="开启"
        inactive-text="关闭"
        active-color="#13ce66"
        inactive-color="#ff4949"
        :before-change="beforeChange2"
        inline-prompt
    />
</template>
<demo>
根据before-change返回值来决定是否是转换状态
</demo>
