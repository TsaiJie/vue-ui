<script lang="ts" setup>
import Button1Demo from './ButtonDemo/Buttton1.demo.vue';
import Button2Demo from './ButtonDemo/Buttton2.demo.vue';
import Button3Demo from './ButtonDemo/Buttton3.demo.vue';
import Button4Demo from './ButtonDemo/Buttton4.demo.vue';
import Button5Demo from './ButtonDemo/Buttton5.demo.vue';
import Demo from '@/components/Demo.vue';
</script>
<template>
    <div>
        <h1>Button 组件示例</h1>
        <Demo :comp="Button1Demo" />
        <Demo :comp="Button2Demo" />
        <Demo :comp="Button3Demo" />
        <Demo :comp="Button4Demo" />
        <Demo :comp="Button5Demo" />
    </div>
</template>
