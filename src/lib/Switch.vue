<script lang="ts" setup>
import { onMounted, ref, toRefs, watch } from 'vue';
interface SwitchProps {
    checked: boolean;
    activeColor?: string;
    inactiveColor?: string;
    activeText?: string;
    inactiveText?: string;
    inlinePrompt?: boolean;
    disabled?: boolean;
    loading?: boolean;
}
const props = withDefaults(defineProps<SwitchProps>(), {
    checked: false,
    activeColor: '#3894ff',
    inactiveColor: '#d7dae2',
    activeText: '',
    inactiveText: '',
    inlinePrompt: false,
    disabled: false,
    loading: false,
});
const emits = defineEmits(['update:checked']);
const {
    checked,
    inactiveColor,
    activeColor,
    inactiveText,
    activeText,
    inlinePrompt,
    disabled,
    loading,
} = toRefs(props);
const buttonRef = ref<HTMLButtonElement | null>(null);
// 组件挂载
onMounted(() => {
    const buttonEl = buttonRef.value;
    if (buttonEl) {
        const { value: inactiveTextValue } = inactiveText;
        const { value: activeTextValue } = activeText;
        // 背景颜色设置
        initBackgroundColor(buttonEl);
        // 文本间距设置
        initTextMargin(buttonEl, inactiveTextValue, activeTextValue);
    }
});
//监听checked的变化
watch(
    checked,
    newValue => {
        const buttonEl = buttonRef.value;
        if (buttonEl) {
            changeBackground(newValue, buttonEl);
            changeTextColor(buttonEl, newValue);
        }
    },
    { immediate: true }
);
const toggle = () => {
    !disabled.value && emits('update:checked', !checked.value);
};
const handleTextLength = (text: string) => {
    return text.slice(0, 1);
};
//背景颜色设置
const initBackgroundColor = (buttonEl: HTMLButtonElement) => {
    const { className } = buttonEl;
    //背景颜色设置
    className.includes('checked')
        ? (buttonEl.style.backgroundColor = activeColor.value)
        : (buttonEl.style.backgroundColor = inactiveColor.value);
};
const initTextMargin = (
    buttonEl: HTMLButtonElement,
    inactiveTextValue: string,
    activeTextValue: string
) => {
    // 如果有文字，文字间距设置
    inactiveTextValue && activeTextValue
        ? (buttonEl.style.margin = '0 5px')
        : '';

    inactiveTextValue && activeTextValue === ''
        ? (buttonEl.style.marginLeft = '5px')
        : '';

    activeTextValue && inactiveTextValue === ''
        ? (buttonEl.style.marginRight = '5px')
        : '';
};
const changeBackground = (flag: boolean, buttonEl: HTMLButtonElement) => {
    flag
        ? (buttonEl.style.backgroundColor = activeColor.value)
        : (buttonEl.style.backgroundColor = inactiveColor.value);
};
const changeTextColor = (buttonEl: HTMLButtonElement, flag: boolean) => {
    const inactiveTextEl = buttonEl.previousElementSibling as HTMLSpanElement;
    const activeTextEl = buttonEl.nextElementSibling as HTMLSpanElement;

    inactiveTextEl &&
        (!flag
            ? (inactiveTextEl.style.color = activeColor.value)
            : (inactiveTextEl.style.color = 'black'));
    activeTextEl &&
        (flag
            ? (activeTextEl.style.color = activeColor.value)
            : (activeTextEl.style.color = 'black'));
};
</script>
<template>
    <div class="switch">
        <span v-if="inactiveText && !inlinePrompt">{{ inactiveText }}</span>
        <button :class="{ checked, disabled }" @click="toggle" ref="buttonRef">
            <!--开始-->
            <span
                v-show="checked && inactiveText && inlinePrompt"
                style="margin-left: -14px"
            >
                {{ handleTextLength(activeText) }}
            </span>
            <span class="circle">
                <i class="iconfont icon-loading" v-if="loading"></i>
            </span>
            <!--关闭-->
            <span
                v-show="!checked && inactiveText && inlinePrompt"
                style="margin-right: -14px"
            >
                {{ handleTextLength(inactiveText) }}
            </span>
        </button>
        <span v-if="activeText && !inlinePrompt">{{ activeText }}</span>
    </div>
    <div>{{ checked }}</div>
</template>

<style scoped lang="less">
@buttonH: 22px;
@spanH: @buttonH - 4px;
@keyframes circle {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}
.switch {
    position: relative;
    display: flex;
    align-items: center;
    button {
        height: @buttonH;
        width: @buttonH * 2;
        border: none;
        background-color: #d7dae2;
        border-radius: (@buttonH / 2);
        position: relative;
        transition: background-color 250ms;
        &.checked > span {
            left: calc(100% - @spanH - 2px);
        }
        &.checked {
            background: #3894ff;
        }
        &:focus {
            outline: none;
        }
        &:hover {
            cursor: pointer;
        }
        &.disabled {
            opacity: 0.7;
        }
        &.disabled:hover {
            cursor: not-allowed;
        }
    }
    .circle {
        display: flex;
        position: absolute;
        top: 2px;
        left: 2px;
        background: white;
        height: @spanH;
        width: @spanH;
        border-radius: (@spanH / 2);
        transition: left 250ms;
        justify-content: center;
        align-items: center;
        .icon-loading {
            animation: circle infinite 1.5s linear;
        }
    }
   
}
</style>
