<script lang="ts" setup>
import Switch from '@/lib/Switch.vue';
import { ref } from 'vue';
const value = ref(true);
</script>
<template>
    <div>
        <Switch :value="value" @input="value = $event"></Switch>
    </div>
</template>

<style scoped></style>
