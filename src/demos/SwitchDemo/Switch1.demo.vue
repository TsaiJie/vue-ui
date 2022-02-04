<script setup lang="ts">
import Switch from '@/lib/Switch.vue';
import { ref } from 'vue';
const checked = ref(false);
</script>

<template>
    <Switch v-model:checked="checked" />
</template>
