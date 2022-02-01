<script lang="ts">
// 声明额外的选项,主要是为了解决属性继承的问题
export default {
    inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { useAttrs } from 'vue';

const attrs = useAttrs();
const { ...rest } = attrs;
</script>

<template>
    <div>
        <button v-bind="rest">
            <slot></slot>
        </button>
    </div>
</template>

<style lang="less" scoped>
div {
    border: 1px solid red;
}
</style>
