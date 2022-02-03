<script lang="ts" setup>
import { computed, toRefs, useSlots, onMounted, reactive, ref } from 'vue';
import Tab from './Tab.vue';
interface TabsProps {
    selected: string;
}
const props = withDefaults(defineProps<TabsProps>(), {
    selected: '',
});
const navItems = reactive<HTMLDivElement[]>([]);
const indicatorRef = ref<HTMLDivElement | null>(null);
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

onMounted(() => {
    const result = navItems.filter(nav =>
        nav.classList.contains('selected')
    )[0];
    const { width } = result.getBoundingClientRect();
    console.log( indicatorRef.value);
    indicatorRef.value && (indicatorRef.value.style.width = width + 'px');
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
			v-for="(item, i) in defaultSlots"
			:class="{ selected: item.props?.title === selected }"
			:key="item"
			@click="handClick(item.props?.title)"
			:ref="
				el => {
					if (el) navItems[i] = el;
				}
			"
		>
			{{ item.props?.title }}
		</div>
		<div class="tsai-tabs-nav-indicator" ref="indicatorRef"></div>
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
        position: relative;
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
        &-indicator {
            position: absolute;
            height: 3px;
            width: 100px;
            background-color: @blue;
            left: 0;
            bottom: -1px;
        }
    }
    &-content {
        padding: 8px 0;
    }
}
</style>
