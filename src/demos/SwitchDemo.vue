<script lang="ts" setup>
import Switch1Demo from './SwitchDemo/Switch1.demo.vue';
import Switch2Demo from './SwitchDemo/Switch2.demo.vue';
import Switch3Demo from './SwitchDemo/Switch3.demo.vue';
import Switch4Demo from './SwitchDemo/Switch4.demo.vue';
import Switch5Demo from './SwitchDemo/Switch5.demo.vue';
import Switch6Demo from './SwitchDemo/Switch6.demo.vue';
import Switch7Demo from './SwitchDemo/Switch7.demo.vue';
import Demo from '@/components/Demo.vue';
</script>
<template>
    <div>
        <h1>Switch 组件示例</h1>
        <Demo :comp="Switch1Demo" />
        <Demo :comp="Switch2Demo" />
        <Demo :comp="Switch3Demo" />
        <Demo :comp="Switch4Demo" />
        <Demo :comp="Switch5Demo" />
        <Demo :comp="Switch6Demo" />
        <Demo :comp="Switch7Demo" />
    </div>
</template>

<style scoped lang="less"></style>
