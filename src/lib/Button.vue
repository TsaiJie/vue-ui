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
    level?: string;
    disabled?: boolean;
    loading?: boolean;
}
const props = withDefaults(defineProps<ButtonProps>(), {
    theme: 'default',
    size: 'normal',
    level: 'default',
    disabled: false,
    loading: false,
});
const { theme, size, level, disabled, loading } = toRefs(props);
const attrs = useAttrs();

const { ...rest } = attrs;
const classes = computed(() => {
    return {
        [`tsai-theme-${theme.value}`]: theme.value,
        [`tsai-size-${size.value}`]: size.value,
        [`tsai-level-${level.value}`]: level.value,
    };
});
</script>

<template>
    <button
        v-bind="rest"
        class="tsai-button"
        :class="classes"
        :disabled="disabled"
    >
        <span class="loading" v-if="loading"></span>
        <slot></slot>
    </button>
</template>

<style lang="less">
@h: 32px;
@border-color: #d9d9d9;
@color: #333;
@blue: #40a9ff;
@radius: 4px;
@dangerColor: #f36161;
@warningColor: #e8ac58;
@successColor: #5cba33;
@defaultColor: #646b75;
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
    color: @defaultColor;
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
    &.tsai-theme-default {
        &[disabled] {
            cursor: not-allowed;
            color: grey;
            &:hover {
                border-color: @border-color;
            }
        }
        &.tsai-level-primary {
            background-color: @blue;
            color: white;
            border-color: @blue;
            &:hover,
            &:focus {
                background-color: darken(@blue, 10%);
                border-color: darken(@blue, 10%);
            }
            &[disabled] {
                cursor: not-allowed;
                background-color: lighten(@blue, 20%);
                border-color: lighten(@blue, 20%);
            }
        }
        &.tsai-level-danger {
            background-color: @dangerColor;
            color: white;
            border-color: @dangerColor;
            &:hover,
            &:focus {
                background-color: darken(@dangerColor, 10%);
                border-color: darken(@dangerColor, 10%);
            }
            &[disabled] {
                cursor: not-allowed;
                background-color: lighten(@dangerColor, 20%);
                border-color: lighten(@dangerColor, 20%);
            }
        }
        &.tsai-level-success {
            background-color: @successColor;
            color: white;
            border-color: @successColor;
            &:hover,
            &:focus {
                background-color: darken(@successColor, 10%);
                border-color: darken(@successColor, 10%);
            }
            &[disabled] {
                cursor: not-allowed;
                background-color: lighten(@successColor, 20%);
                border-color: lighten(@successColor, 20%);
            }
        }
        &.tsai-level-warning {
            background-color: @warningColor;
            color: white;
            border-color: @warningColor;
            &:hover,
            &:focus {
                background-color: darken(@warningColor, 10%);
                border-color: darken(@warningColor, 10%);
            }
            &[disabled] {
                cursor: not-allowed;
                background-color: lighten(@warningColor, 20%);
                border-color: lighten(@warningColor, 20%);
            }
        }
    }
    &.tsai-theme-link {
        border-color: transparent;
        box-shadow: none;
        &.tsai-level-default {
            color: @defaultColor;
            &:hover,
            &:focus {
                color: darken(@defaultColor, 15%);
            }
        }
        &.tsai-level-primary {
            color: @blue;
            &:hover,
            &:focus {
                color: darken(@blue, 15%);
            }
        }
        &.tsai-level-danger {
            color: @dangerColor;
            &:hover,
            &:focus {
                color: darken(@dangerColor, 15%);
            }
        }
        &.tsai-level-success {
            color: @successColor;
            &:hover,
            &:focus {
                color: darken(@successColor, 15%);
            }
        }
        &.tsai-level-warning {
            color: @warningColor;
            &:hover,
            &:focus {
                color: darken(@warningColor, 15%);
            }
        }
        &[disabled] {
            cursor: not-allowed;
            color: grey;
            &:hover,
            &:focus {
                color: grey;
            }
        }
    }
    &.tsai-theme-text {
        border-color: transparent;
        box-shadow: none;
        color: @defaultColor;
        &:hover,
        &:focus {
            background-color: darken(white, 5%);
        }
        &.tsai-level-primary {
            color: @blue;
            &:hover,
            &:focus {
                color: darken(@blue, 15%);
                background-color: lighten(@blue, 30%);
            }
        }
        &.tsai-level-success {
            color: @successColor;
            &:hover,
            &:focus {
                color: darken(@successColor, 15%);
                background-color: lighten(@successColor, 30%);
            }
        }
        &.tsai-level-danger {
            color: @dangerColor;
            &:hover,
            &:focus {
                color: darken(@dangerColor, 15%);
                background-color: lighten(@dangerColor, 30%);
            }
        }
        &.tsai-level-warning {
            color: @warningColor;
            &:hover,
            &:focus {
                color: darken(@warningColor, 15%);
                background-color: lighten(@warningColor, 30%);
            }
        }
        &[disabled] {
            cursor: not-allowed;
            color: grey;
            &:hover,
            &:focus {
                color: grey;
                background-color: transparent;
            }
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
    > .loading {
        width: 10px;
        height: 10px;
        display: inline-block;
        margin-right: 4px;
        border-radius: 8px;
        border-color: @blue @blue @blue transparent;
        border-style: solid;
        border-width: 2px;
        animation: spin 1s infinite linear;
    }
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
}
</style>
