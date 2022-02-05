<script lang="ts" setup>
import Switch from '@/lib/Switch.vue';
import SwitchDemo1 from './SwitchDemo/Switch1.demo.vue';
import SwitchDemo2 from './SwitchDemo/Switch2.demo.vue';
import Button from '@/lib/Button.vue';
import { ref } from 'vue';
const checked = ref(true);
const checked1 = ref(true);
const beforeChange = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            return resolve(true);
        }, 1000);
    });
};

const beforeChange2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return reject(false);
        }, 1000);
    });
};
console.dir(SwitchDemo1.__demoSourceCode);
</script>
<template>
    <div>
        <h1>Switch 组件示例</h1>
        <div class="demo">
            <h2>常规用法</h2>
            <div class="demo-component">
                <SwitchDemo1 />
            </div>
            <div class="demo-actions">
                <Button>显示代码</Button>
            </div>
            <div class="demo-code">
                <pre v-text="SwitchDemo1.__demoSourceCode"></pre>
            </div>
        </div>
        <div class="demo">
            <h2>自定义颜色</h2>
            <div class="demo-component">
                <SwitchDemo2 />
            </div>
            <div class="demo-actions">
                <Button>显示代码</Button>
            </div>
            <div class="demo-code">
                <pre v-text="SwitchDemo2.__demoSourceCode"></pre>
            </div>
        </div>

        <hr />
        <Switch
            v-model:checked="checked"
            active-text="Open"
            active-color="#13ce66"
            inactive-color="#ff4949"
        />
        <hr />
        <Switch
            v-model:checked="checked"
            inactive-text="Close"
            active-color="#13ce66"
            inactive-color="#ff4949"
        />
        <hr />
        <Switch
            v-model:checked="checked"
            active-text="Open"
            inactive-text="Close"
            active-color="#13ce66"
            inactive-color="#ff4949"
        />
        <hr />
        <Switch
            v-model:checked="checked"
            active-text="Open"
            inactive-text="Close"
            active-color="#13ce66"
            inactive-color="#ff4949"
            inline-prompt
        />
        <hr />
        <Switch
            v-model:checked="checked"
            active-text="开启"
            inactive-text="关闭"
            active-color="#13ce66"
            inactive-color="#ff4949"
            inline-prompt
        />
        <hr />
        <Switch
            v-model:checked="checked1"
            active-text="开启"
            inactive-text="关闭"
            active-color="#13ce66"
            inactive-color="#ff4949"
            inline-prompt
            disabled
        />
        <Switch
            v-model:checked="checked1"
            active-text="开启"
            inactive-text="关闭"
            active-color="#13ce66"
            inactive-color="#ff4949"
            inline-prompt
            disabled
        />
        <Switch
            v-model:checked="checked1"
            active-text="开启"
            inactive-text="关闭"
            active-color="#13ce66"
            inactive-color="#ff4949"
            inline-prompt
            disabled
            loading
        />
        <Switch
            v-model:checked="checked1"
            active-text="开启"
            inactive-text="关闭"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :before-change="beforeChange"
            inline-prompt
        />
        <hr />
        <Switch
            v-model:checked="checked1"
            active-text="开启"
            inactive-text="关闭"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :before-change="beforeChange2"
            inline-prompt
        />
    </div>
</template>

<style scoped lang="less">
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
