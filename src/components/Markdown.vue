<script setup lang="ts">
import { ref, VNode } from 'vue';
interface MarkdownProps {
    path: string;
}
const props = withDefaults(defineProps<MarkdownProps>(), {
    path: '',
});
const content = ref<VNode>();
import(`../markdown/${props.path}.md`).then(result => {
    content.value = result.default.render() as VNode;
});
console.log('111');
</script>
<template>
    <component :is="content" :key="content" />
</template>
