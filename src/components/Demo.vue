<script lang="ts" setup>
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import Button from '@/lib/Button.vue';
import { computed, DefineComponent, ref } from 'vue';
interface DemoProps {
    comp: DefineComponent;
}
const { comp } = withDefaults(defineProps<DemoProps>(), {});
// 给html上色
const html = computed(() =>
    Prism.highlight(comp.__demoSourceCode, Prism.languages.html, 'html')
);
const codeVisible = ref(false);
const buttonText = computed(() =>
    codeVisible.value ? '隐藏代码' : '显示代码'
);
const toggleCodeShow = () => {
    codeVisible.value = !codeVisible.value;
};
</script>
<template>
    <div>
        <div class="demo">
            <h2>{{ comp.__demoTitle }}</h2>
            <div class="demo-component">
                <component :is="comp" :key="comp" />
            </div>
            <div class="demo-actions" @click="toggleCodeShow">
                <Button>{{ buttonText }}</Button>
            </div>
            <transition>
                <div class="demo-code" v-if="codeVisible">
                    <pre class="language-html" v-html="html"></pre>
                </div>
            </transition>
        </div>
    </div>
</template>
<style lang="less" scoped>
@border-color: #d9d9d9;

.demo {
    border: 1px solid @border-color;
    margin: 16px 0 32px;
    overflow: hidden;
    > h2 {
        font-size: 20px;
        padding: 8px 16px;
        border-bottom: 1px solid @border-color;
    }
    &-component {
        padding: 16px;
    }
    &-actions {
        text-align: right;
        padding: 8px 16px;
        border-top: 1px dashed @border-color;
    }
    &-code {
        padding: 8px 16px;
        border-top: 1px dashed @border-color;
        overflow: hidden;
        > pre {
            line-height: 1.1;
            font-family: Consolas, 'Courier New', Courier, monospace;
            margin: 0;
        }
    }
    .v-enter-active {
        animation: spin 0.3s ease-out both;
    }
    .v-leave-active {
        animation: spin 0.3s ease-out both reverse;
    }
    @keyframes spin {
        from {
            transform: translateX(-100px);
        }
        to {
            transform: translateX(0px);
        }
    }
}
</style>
