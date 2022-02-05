<script setup lang="ts">
import Switch from '@/lib/Switch.vue';
import { ref } from 'vue';
const checked = ref(false);
</script>

<template>
    <Switch
        v-model:checked="checked"
        active-text="Open"
        inactive-text="Close"
        active-color="#13ce66"
        inactive-color="#ff4949"
        inline-prompt
    />
    <br />
    <Switch
        v-model:checked="checked"
        active-text="开启"
        inactive-text="关闭"
        active-color="#13ce66"
        inactive-color="#ff4949"
        inline-prompt
    />
</template>
<demo>
Switch显示文字，只能显示第一个文字
</demo>
