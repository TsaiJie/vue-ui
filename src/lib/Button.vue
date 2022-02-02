<script lang="ts">
// 声明额外的选项,主要是为了解决属性继承的问题
export default {
    inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { computed, toRefs, useAttrs } from 'vue';
interface ButtonProps {
    theme?: string;
    size?: string;
}
const props = withDefaults(defineProps<ButtonProps>(), {
    theme: 'default',
    size: 'normal',
});
const { theme, size } = toRefs(props);
const attrs = useAttrs();
const { ...rest } = attrs;
const classes = computed(() => {
    return {
        [`tsai-theme-${theme.value}`]: theme.value,
        [`tsai-size-${size.value}`]: size.value,
    };
});
</script>

<template>
    <button v-bind="rest" class="tsai-button" :class="classes">
        <slot></slot>
    </button>
</template>

<style lang="less">
@h: 32px;
@border-color: #d9d9d9;
@color: #333;
@blue: #40a9ff;
@radius: 4px;
.tsai-button {
    box-sizing: border-box;
    height: @h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background-color: white;
    color: @color;
    border: 1px solid @border-color;
    border-radius: @radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
    & + & {
        margin-left: 8px;
    }
    &:hover,
    &:focus {
        color: @blue;
        border-color: @blue;
    }
    &:focus {
        outline: none;
    }
    &::-moz-focus-inner {
        border: 0;
    }
    &.tsai-theme-link {
        border-color: transparent;
        box-shadow: none;
        color: @blue;
        &:hover,
        &:focus {
            color: lighten(@blue, 20%);
        }
    }
    &.tsai-theme-text {
        border-color: transparent;
        box-shadow: none;
        color: inherit;
        &:hover,
        &:focus {
            background-color: darken(white, 5%);
        }
    }
    &.tsai-size-big {
        font-size: 24px;
        height: 48px;
        padding: 0 16px;
    }
    &.tsai-size-small {
        font-size: 12px;
        height: 20px;
        padding: 0 4px;
    }
}
</style>
