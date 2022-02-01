# Vite创建项目
1. `yarn create vite`
2. 配置`prettier` `yarn add eslint eslint-plugin-vue --dev`
3. 配置`eslint` `npx eslint --init`
# Vue 3 + Typescript + Vite
1.inject和provide
1. 使用`inject`和`provide`完成属性的透传，后代组件可以改变这个属性的值，更改完，使用到这个属性的组件都会进行更新。
2. `react`中使用的是`context`实现的，但是有些不一样，`react`中的属性和修改这个属性的方法必须同时传递过来，然后进行修改。

## vue3组件通信（v3.2.25）

`defineProps` `defineEmits` `withDefaults` 这些函数不用再导入了。

1. `defineProps` 是用来接收props的。**注意接收来的属性最好不要直接解构！！！**。

   ```js
   //bad 这样使用会断开响应式
   const { count } =  defineProps({
       count: {
           type: Number,
           required: true,
       },
   }); 
   
   //good
   const props =  defineProps({
       count: {
           type: Number,
           required: true,
       },
   }); 
   // 这样可以保持响应式，如果需要解构的话要使用toRefs，不使用toRefs的话，也可以直接使用props.count
   const { count } = toRefs(props);
   ```

   1. `defineProps` 两种写法，第一种传统的vue写法，限制类型并且设置默认值是否必须传入等。

      ```js
      const { count } =  defineProps({
          count: {
              type: Number,
              required: true,
          },
      }); 
      const { count } = toRefs(props);
      ```

      

   2. 第二种ts写法， 借助 withDefaults来设置默认值，使用ts限制类型。

      ```js
      const props = withDefaults(defineProps<{ count: number }>(), {
          count: 0,
      });
      const { count } = toRefs(props);
      ```

2. `defineEmits`是用来触发自定义函数的相当于（v2）中的`this.$emit()`。
3. `withDefaults` 是用来配置属性默认值的。

#### 1 第一种 使用传统的自定义函数来进行通信

```vue
// 父组件
<script setup lang="ts">
import { ref } from 'vue';
import Child from './components/Child.vue';
const count = ref(0);
const changeCount = (p:number) => {
    count.value = p;
}
</script>

<template>
     <Child :count="count" @changeCount ="changeCount"/>
</template>
```

```vue
// 子组件
<script setup lang="ts">
import { toRefs } from 'vue';
// 接收参数使用
const props = defineProps({
    count: {
        type: Number,
        required: true,
    },
});

const { count } = toRefs(props);
// 接收事件
const emmits = defineEmits(['changeCount']);

const change = () => {
     emits('changeCount', count.value++);
};
</script>

<template>
    <h1>{{ count }}</h1>
    <button @click="change">+1</button>
</template>


```

#### 2 第二种 使用update进行通信
```vue
// 父组件
...
<template>
     <Child :count="count" @update:count ="changeCount"/>
</template>
```

```vue
// 子组件
<script setup lang="ts">
...
// 这样来接收事件
const emmits = defineEmits(['update:count']);

const change = () => {
     emits('update:count', count.value++);
};
</script>

```

#### 3 第三种 使用v-model进行通信

```vue
// 父组件 这样写 子组件是第二种update的方式
...
<template>
     <Child v-model:count="count"/>
</template>
```

####  ts踩坑

如果使用了`eslint`可能会出现报错，

1. 解决`defineProps` `defineEmits` `withDefaults`不引入直接使用会报错
2. 解决`v-model:count="count"`报错`'v-model' directives require no argument.(vue/no-v-model-argument)`

```js
env: {
    'vue/setup-compiler-macros': true,
},
rules: {
    'vue/no-v-model-argument': 'off',
 }
```

