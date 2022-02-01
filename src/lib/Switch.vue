<script lang="ts" setup>
import { toRefs } from 'vue';

const props = withDefaults(defineProps<{ checked: boolean }>(), {
    checked: false,
});

const { checked } = toRefs(props);
const emits = defineEmits(['update:checked']);

const toggle = () => {
    emits('update:checked', !checked.value);

};
</script>
<template>
    <button :class="{ checked }" @click="toggle">
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
