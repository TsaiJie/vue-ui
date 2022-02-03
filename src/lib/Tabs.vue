<script lang="ts" setup>
import { computed, toRefs, useSlots, watch } from 'vue';
import Tab from './Tab.vue';
interface TabsProps {
    selected: string;
}
const props = withDefaults(defineProps<TabsProps>(), {
    selected: '',
});
const { selected } = toRefs(props);
const emits = defineEmits(['update:selected']);
//获取slots
const defaultSlots = useSlots().default?.();
//判断子组件的类型
defaultSlots?.forEach(tag => {
    if (tag.type !== Tab) {
        throw new Error('Tabs 的子组件必须是Tab');
    }
});
const current = computed(
    () => defaultSlots?.filter(item => item.props?.title === selected.value)[0]
);
const handClick = (title: string) => {
    emits('update:selected', title);
};
</script>

<template>
<div class="tsai-tabs">
	<div class="tsai-tabs-nav">
		<div
			class="tsai-tabs-nav-item"
			:class="{ selected: item.props?.title === selected }"
			v-for="item in defaultSlots"
			:key="item"
			@click="handClick(item.props?.title)"
		>
			{{ item.props?.title }}
		</div>
	</div>
	<div class="tsai-tabs-content">
		<component
			class="tsai-tabs-content-item"
			:is="current"
			:key="current"
		/>
	</div>
</div>
</template>

<style lang="less">
@blue: #40a9ff;
@color: #333;
@border-color: #d9d9d9;
.tsai-tabs {
    &-nav {
        display: flex;
        color: @color;
        border-bottom: 1px solid @border-color;
        &-item {
            padding: 8px 0;
            margin: 0 16px;
            cursor: pointer;
            &:first-child {
                margin-left: 0;
            }
            &.selected {
                color: @blue;
            }
        }
    }
    &-content {
        padding: 8px 0;
    }
}
</style>
