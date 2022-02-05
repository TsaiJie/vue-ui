<script lang="ts" setup>
import Dialog1Demo from './DialogDemo/Dialog1.demo.vue';
import Dialog2Demo from './DialogDemo/Dialog2.demo.vue';
import Dialog3Demo from './DialogDemo/Dialog3.demo.vue';

import Demo from '@/components/Demo.vue';
</script>
<template>
    <div>
        <h1>Dialog 组件示例</h1>
        <Demo :comp="Dialog1Demo" />
        <Demo :comp="Dialog2Demo" />
        <Demo :comp="Dialog3Demo" />
    </div>
</template>
