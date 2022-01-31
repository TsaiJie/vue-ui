<script lang="ts" setup>
import Switch from '@/lib/Switch.vue';
import { ref } from 'vue';
const checked = ref(true);

</script>
<template>
    <div>
        <Switch v-model:checked="checked"  />
    </div>
</template>

<style scoped></style>
