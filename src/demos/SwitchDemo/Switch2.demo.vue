<script setup lang="ts">
import Switch from '@/lib/Switch.vue';
import { ref } from 'vue';
const checked = ref(false);
</script>

<template>
    <Switch
        v-model:checked="checked"
        active-color="#13ce66"
        inactive-color="#ff4949"
    />
</template>
