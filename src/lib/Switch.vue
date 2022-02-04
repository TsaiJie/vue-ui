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
    beforeChange?: () => Promise<boolean>;
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
    beforeChange,
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
    if (beforeChange && beforeChange.value instanceof Function) {
        const buttonEl = buttonRef.value;
        if (buttonEl) {
            const loadingEl = buttonEl.querySelector(
                '.icon-loading'
            ) as HTMLElement;
            const { className } = buttonEl;
            buttonEl.className = `${className} tsai-disabled`;
            loadingEl.style.display = 'inline-block';
            const shouldToggle = beforeChange.value();
            console.log(loadingEl);
            shouldToggle
                .then(result => {
                    if (result) {
                        loadingEl.style.display = 'none';
                        buttonEl.className = `${className}`;
                        handleChange();
                    }
                })
                .catch(e => {
                    loadingEl.style.display = 'none';
                    buttonEl.className = `${className}`;
                    console.error(e);
                    alert('失败');
                });
        }
    } else {
        handleChange();
    }
};
const handleChange = () => {
    !disabled.value && emits('update:checked', !checked.value);
};
const handleTextLength = (text: string) => {
    return text.slice(0, 1);
};
//背景颜色设置
const initBackgroundColor = (buttonEl: HTMLButtonElement) => {
    const { className } = buttonEl;
    //背景颜色设置
    className.includes('tsai-checked')
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
    <div class="tsai-switch-wrapper">
        <span v-if="inactiveText && !inlinePrompt">{{ inactiveText }}</span>
        <button
            class="tsai-switch"
            :class="{ 'tsai-checked': checked, 'tsai-disabled': disabled }"
            @click="toggle"
            ref="buttonRef"
        >
            <!--开始-->
            <span
                v-show="checked && inactiveText && inlinePrompt"
                style="margin-left: -14px"
            >
                {{ handleTextLength(activeText) }}
            </span>
            <span class="circle">
                <i class="loading" v-show="loading"></i>
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

<style lang="less">
@buttonH: 22px;
@spanH: @buttonH - 4px;
@blue: #40a9ff;
@keyframes circle {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}
.tsai-switch-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    .tsai-switch {
        height: @buttonH;
        width: @buttonH * 2;
        border: none;
        background-color: #d7dae2;
        border-radius: (@buttonH / 2);
        position: relative;
        transition: background-color 250ms;
        &.tsai-checked > span {
            left: calc(100% - @spanH - 2px);
        }
        &.tsai-checked {
            background: #3894ff;
        }
        &:focus {
            outline: none;
        }
        &:hover {
            cursor: pointer;
        }
        &.tsai-disabled {
            opacity: 0.7;
        }
        &.tsai-disabled:hover {
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
        > .loading {
            width: 10px;
            height: 10px;
            border-radius: 8px;
            border-color: grey grey gray transparent;
            border-style: solid;
            border-width: 2px;
            animation: circle 1s infinite linear;
        }
    }
}
</style>
