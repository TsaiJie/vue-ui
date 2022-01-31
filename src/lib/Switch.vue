<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref(false);
const toggle = () => {
    checked.value = !checked.value;
};
</script>
<template>
    <button :class="{ checked }" @click="toggle">
        <span></span>
    </button>
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
    &.checked{
        background: blue;
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
}
</style>
