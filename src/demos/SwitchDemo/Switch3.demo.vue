<script setup lang="ts">
import Switch from '@/lib/Switch.vue';
import { ref } from 'vue';
const checked = ref(false);
</script>

<template>
    <Switch
        v-model:checked="checked"
        active-text="Open"
        active-color="#13ce66"
        inactive-color="#ff4949"
    />
    <Switch
        v-model:checked="checked"
        inactive-text="Close"
        active-color="#13ce66"
        inactive-color="#ff4949"
    />
    <Switch
        v-model:checked="checked"
        active-text="Open"
        inactive-text="Close"
        active-color="#13ce66"
        inactive-color="#ff4949"
    />
</template>
<demo>
激活文字高亮
</demo>
