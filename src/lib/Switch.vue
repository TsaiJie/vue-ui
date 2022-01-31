<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue';

const { value } = defineProps({
    value: {
        type: Boolean,
        required: true
    },
});
const emits = defineEmits(['input']);
const checked = ref(value);

const toggle = () => {
    checked.value = !checked.value;
    emits('input', checked.value);
};
</script>
<template>
    <button :class="{ checked }" @click="toggle">
        <span></span>
    </button>
    <div>{{ value }}</div>
</template>

<style scoped lang="less">
@buttonH: 22px;
@spanH: @buttonH - 4px;
button {
    height: @buttonH;
    width: @buttonH * 2;
    border: none;
    background: gray;
    border-radius: (@buttonH / 2);
    position: relative;
    &.checked > span {
        left: calc(100% - @spanH - 2px);
    }
    &.checked {
        background: blue;
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
