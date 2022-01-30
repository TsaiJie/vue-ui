<script setup lang="ts">
import { provide, ref } from 'vue';

const asideVisible = ref(false);
provide('asideVisible', asideVisible);

</script>

<template>
    <router-view />
</template>
