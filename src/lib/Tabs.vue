<script lang="ts" setup>
import {
    computed,
    toRefs,
    useSlots,
    ref,
    watchEffect,
    ComponentPublicInstance,
} from 'vue';
import Tab from './Tab.vue';
interface TabsProps {
    selected: string;
}
const props = withDefaults(defineProps<TabsProps>(), {
    selected: '',
});
const selectedItem = ref<Element | null | ComponentPublicInstance>(null);
const indicatorRef = ref<HTMLDivElement | null>(null);
const containerRef = ref<HTMLDivElement | null>(null);

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
watchEffect(() => {
    if (indicatorRef.value && containerRef.value && selectedItem.value) {
        const { width, left: resultLeft } = (
            selectedItem.value as HTMLDivElement
        ).getBoundingClientRect();
        const { left: containerLeft } =
            containerRef.value.getBoundingClientRect();
        const left = resultLeft - containerLeft;
        indicatorRef.value.style.width = width + 'px';
        indicatorRef.value.style.left = left + 'px';
    }
});
</script>

<template>
    <div class="tsai-tabs">
        <div class="tsai-tabs-nav" ref="containerRef">
            <div
                class="tsai-tabs-nav-item"
                v-for="item in defaultSlots"
                :class="{ selected: item.props?.title === selected }"
                :key="item.props?.title"
                :ref="
                    el => {
                        if (el && item.props?.title === selected)
                            selectedItem = el;
                    }
                "
                @click="handClick(item.props?.title)"
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
            transition: all 250ms;
        }
    }
    &-content {
        padding: 8px 0;
    }
}
</style>
