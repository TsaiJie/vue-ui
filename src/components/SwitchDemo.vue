<script lang="ts" setup>
import Switch from '@/lib/Switch.vue';
import { ref } from 'vue';
const checked = ref(true);
</script>
<template>
    <div>
        <Switch v-model:checked="checked" />
        <Switch
            v-model:checked="checked"
            active-color="#13ce66"
            inactive-color="#ff4949" />
    </div>
</template>

<style scoped></style>
