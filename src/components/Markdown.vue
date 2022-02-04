<script setup lang="ts">
import { defineProps, ref, VNode } from 'vue';
interface MarkdownProps {
    path: string;
}
const props = withDefaults(defineProps<MarkdownProps>(), {
    path: '',
});
const content = ref<VNode>();
import(props.path).then(result => {
    content.value = result.default.render() as VNode;
});
</script>
<template>
    <component :is="content" :key="content"></component>
</template>
