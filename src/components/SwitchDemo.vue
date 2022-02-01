<script lang="ts" setup>
import Switch from '@/lib/Switch.vue';
import { ref } from 'vue';
const checked = ref(true);
const checked1 = ref(true);
const beforeChange = () => {
    return new Promise((resolve) => {
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
    <div>
        <Switch v-model:checked="checked" />
        <hr />
        <Switch
            v-model:checked="checked"
            active-color="#13ce66"
            inactive-color="#ff4949"
        />
        <hr />
        <Switch
            v-model:checked="checked"
            active-text="Open"
            active-color="#13ce66"
            inactive-color="#ff4949"
        />
        <hr />
        <Switch
            v-model:checked="checked"
            inactive-text="Close"
            active-color="#13ce66"
            inactive-color="#ff4949"
        />
        <hr />
        <Switch
            v-model:checked="checked"
            active-text="Open"
            inactive-text="Close"
            active-color="#13ce66"
            inactive-color="#ff4949"
        />
        <hr />
        <Switch
            v-model:checked="checked"
            active-text="Open"
            inactive-text="Close"
            active-color="#13ce66"
            inactive-color="#ff4949"
            inline-prompt
        />
        <hr />
        <Switch
            v-model:checked="checked"
            active-text="开启"
            inactive-text="关闭"
            active-color="#13ce66"
            inactive-color="#ff4949"
            inline-prompt
        />
        <hr />
        <Switch
            v-model:checked="checked1"
            active-text="开启"
            inactive-text="关闭"
            active-color="#13ce66"
            inactive-color="#ff4949"
            inline-prompt
            disabled
        />
        <Switch
            v-model:checked="checked1"
            active-text="开启"
            inactive-text="关闭"
            active-color="#13ce66"
            inactive-color="#ff4949"
            inline-prompt
            disabled
        />
        <Switch
            v-model:checked="checked1"
            active-text="开启"
            inactive-text="关闭"
            active-color="#13ce66"
            inactive-color="#ff4949"
            inline-prompt
            disabled
            loading
        />
        <Switch
            v-model:checked="checked1"
            active-text="开启"
            inactive-text="关闭"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :before-change="beforeChange"
            inline-prompt
        />
        <hr/>
        <Switch
            v-model:checked="checked1"
            active-text="开启"
            inactive-text="关闭"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :before-change="beforeChange2"
            inline-prompt
        />
    </div>
</template>

<style scoped></style>
