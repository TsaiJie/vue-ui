<script lang="ts" setup>
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import Button from '@/lib/Button.vue';
import { computed, DefineComponent } from 'vue';
interface DemoProps {
    comp: DefineComponent;
}
const { comp } = withDefaults(defineProps<DemoProps>(), {});
const html = computed(() =>
    Prism.highlight(comp.__demoSourceCode, Prism.languages.html, 'html')
);
</script>
<template>
    <div>
        <div class="demo">
            <h2>{{ comp.__demoTitle }}</h2>
            <div class="demo-component">
                <component :is="comp" :key="comp"></component>
            </div>
            <div class="demo-actions">
                <Button>显示代码</Button>
            </div>
            <div class="demo-code">
                <pre class="language-html" v-html="html"></pre>
            </div>
        </div>
    </div>
</template>
<style lang="less">
@border-color: #d9d9d9;
.demo {
    border: 1px solid @border-color;
    margin: 16px 0 32px;
    > h2 {
        font-size: 20px;
        padding: 8px 16px;
        border-bottom: 1px solid @border-color;
    }
    &-component {
        padding: 16px;
    }
    &-actions {
        padding: 8px 16px;
        border-top: 1px dashed @border-color;
    }
    &-code {
        padding: 8px 16px;
        border-top: 1px dashed @border-color;
        > pre {
            line-height: 1.1;
            font-family: Consolas, 'Courier New', Courier, monospace;
            margin: 0;
        }
    }
}
</style>
