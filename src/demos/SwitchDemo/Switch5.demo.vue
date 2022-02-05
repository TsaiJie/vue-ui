<script setup lang="ts">
import Switch from '@/lib/Switch.vue';
import { ref } from 'vue';
const checked = ref(false);
const checked1 = ref(true);
</script>

<template>
    <Switch
        v-model:checked="checked"
        active-text="开启"
        inactive-text="关闭"
        active-color="#13ce66"
        inactive-color="#ff4949"
        inline-prompt
        disabled
    />
    <br />
    <Switch
        v-model:checked="checked1"
        active-text="开启"
        inactive-text="关闭"
        active-color="#13ce66"
        inactive-color="#ff4949"
        inline-prompt
        disabled
    />
</template>
<demo>
disabled状态
</demo>
