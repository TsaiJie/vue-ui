<script lang="ts" setup>
import { onMounted, ref, toRefs, watch } from 'vue';
interface SwitchProps {
    checked: boolean;
    activeColor?: string;
    inactiveColor?: string;
}
const props = withDefaults(defineProps<SwitchProps>(), {
    checked: false,
    activeColor: '#3894ff',
    inactiveColor: '#d7dae2',
});
const emits = defineEmits(['update:checked']);
const { checked, inactiveColor, activeColor } = toRefs(props);
const buttonRef = ref<HTMLButtonElement | null>(null);
// 组件挂载
onMounted(() => {
    const buttonEl = buttonRef.value;
    if (buttonEl) {
        const { className } = buttonEl;
        className.includes('checked')
            ? (buttonEl.style.backgroundColor = activeColor.value)
            : (buttonEl.style.backgroundColor = inactiveColor.value);
    }
});
watch(
    checked,
    newValue => {
        const buttonEl = buttonRef.value;
        buttonEl &&
            (newValue
                ? (buttonEl.style.backgroundColor = activeColor.value)
                : (buttonEl.style.backgroundColor = inactiveColor.value));
    },
    { immediate: true }
);
const toggle = () => {
    emits('update:checked', !checked.value);
};
</script>
<template>
    <button :class="{ checked }" @click="toggle" ref="buttonRef">
        <span></span>
    </button>
    <div>{{ checked }}</div>
</template>

<style scoped lang="less">
@buttonH: 22px;
@spanH: @buttonH - 4px;
button {
    height: @buttonH;
    width: @buttonH * 2;
    border: none;
    background: #d7dae2;
    border-radius: (@buttonH / 2);
    position: relative;
    &.checked > span {
        left: calc(100% - @spanH - 2px);
    }
    &.checked {
        background: #3894ff;
    }
    &:focus {
        outline: none;
    }
}
span {
    position: absolute;
    top: 2px;
    left: 2px;
    background: white;
    height: @spanH;
    width: @spanH;
    border-radius: (@spanH / 2);
    transition: left 250ms;
}
</style>
