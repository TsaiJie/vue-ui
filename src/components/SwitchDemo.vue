<script lang="ts" setup>
import Switch from '@/lib/Switch.vue';
import { ref } from 'vue';
const checked = ref(true);
</script>
<template>
    <div>
        <Switch v-model:checked="checked" />
        <hr/>
        <Switch
            v-model:checked="checked"
            active-color="#13ce66"
            inactive-color="#ff4949" />
        <hr/>
        <Switch
            v-model:checked="checked"
            active-text="Open"
            active-color="#13ce66"
            inactive-color="#ff4949" />
        <hr/>
        <Switch
            v-model:checked="checked"
            inactive-text="Close"
            active-color="#13ce66"
            inactive-color="#ff4949" />
        <hr/>
        <Switch
            v-model:checked="checked"
            active-text="Open"
            inactive-text="Close"
            active-color="#13ce66"
            inactive-color="#ff4949" />
    </div>
</template>

<style scoped></style>
