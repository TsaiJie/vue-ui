<script lang="ts" setup>
import Tabs from '@/lib/Tabs.vue';
import Tab from '@/lib/Tab.vue';
import { ref } from 'vue';
const selected = ref('导航1');
</script>

<template>
<div>
	<Tabs v-model:selected="selected">
		<Tab title="导航1">内容1</Tab>
		<Tab title="导航2">内容2</Tab>
		<Tab title="导航3">内容3</Tab>
	</Tabs>
	
</div>
</template>

<style scoped></style>
