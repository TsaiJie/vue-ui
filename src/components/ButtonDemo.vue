<script lang="ts" setup>
import Button from '@/lib/Button.vue';
const click = () => {
    console.log(1111);
};
</script>

<template>
    <div>
        <Button @click="click" size="111">你好</Button>
    </div>
</template>

<style scoped></style>
