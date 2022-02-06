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

### vue3 setup如何使用 `inheritAttrs`以及如何获取`$attrs`
1. `<script setup>` 可以和普通的 `<script>` 一起使用。普通的 `<script>` 在有这些需要的情况下或许会被使用到：
无法在 `<script setup>` 声明的选项，例如 `inheritAttrs` 或通过插件启用的自定义的选项。


2. `vue3`默认所有的属性都绑定在根元素上，`inheritAttrs` 可以取消默认绑定，使用`useAttrs()`可以获取所有的属性。`useAttrs()` 和 `props`的区别：`props`需要声明之后才能取值，并且不包含事件，在`props`中声明过的属性不会再`useAttrs()`中出现。


```vue
<script lang="ts">
// 普通 <script>, 在模块范围下执行(只执行一次)
// 声明额外的选项
export default {
    inheritAttrs: false,
    customOptions: {}
}
</script>
<script setup lang="ts">
import {  useAttrs } from 'vue';
// 在 setup() 作用域中执行 (对每个实例皆如此)
// 获取默认原生传入的attrs
const attrs = useAttrs();
const { ...rest } = attrs;
</script>
<!--绑定属性-->
<button v-bind="rest"></button>>
```

#### vue3 createApp以及h函数的使用

createApp返回一个提供应用上下文的应用实例。应用实例挂载的整个组件树共享同一个上下文。render可以控制渲染的虚拟dom， h函数就是生成虚拟dom的

```ts
import {createApp, h as creatElement} from 'vue';
import Dialog from '@/lib/Dialog.vue';
interface DialogProps {
    title: string | object;
    content: string | object;
    ok?: () => boolean;
    cancel?: () => boolean;
    closeOnClickOverlay?: boolean;
}
export default (props: DialogProps) => {
    const { title, content, ok, cancel, closeOnClickOverlay } = props;
    const divEl = document.createElement('div');
    document.body.appendChild(divEl);
    const handleClose = () => {
        app.unmount();
        divEl.remove();
    };
    const app = createApp({
        render() {
            return creatElement(
                Dialog,
                {
                    visible: true,
                    'onUpdate:visible': (newValue: boolean) => {
                        if (!newValue) {
                            handleClose();
                        }
                    },
                    closeOnClickOverlay,
                    ok,
                    cancel,
                },
                {
                    title: () => title,
                    content: () => content,
                }
            );
        },
    });
    app.mount(divEl);
};

```

#### template ref的使用

```vue
<template>
  <div ref="root">This is a root element</div>
 <div v-for="(item, i) in list" :ref="el => { if (el) divs[i] = el }">
    {{ item }}
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  const root = ref(null);
  const divs = ref([]);
  onMounted(() => {
        // DOM 元素将在初始渲染后分配给 ref
        console.log(root.value) // <div>This is a root element</div>
  })
  // 确保在每次更新之前重置ref
  onBeforeUpdate(() => {
        divs.value = []
  })
</script>
```

#### teleport
可以把元素传送挂载到特定的位置
```vue
<teleport to="#modals">
<div>A</div>
</teleport>
<teleport to="#modals">
<div>B</div>
</teleport>

<!-- result-->
<div id="modals">
<div>A</div>
<div>B</div>
</div>

```

### 编写vite2组件(v2.7.2)

实现md文件的解析

```js
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
const fileRegex = /\.(md)$/;
//将md文件解析成vue能识别的组件

import compileSFC from '@vue/compiler-sfc';
import compileDOM from '@vue/compiler-dom';
//解析md文件
import { parse } from 'marked';
export default function md() {
    return {
        //插件名字
        name: 'markdown-loader',
        transform(src, id) {
            //判断是不是md结尾的文件
            if (fileRegex.test(id)) {
                //将md文件内容转成html
                const html = parse(src);
                //生成vue能解析的格式
                const ret = compileSFC.parse(
                    `<template><div class="tsai-md">${html}</div></template>`
                );
                const code = compileDOM.compile(
                    ret.descriptor.template.content,
                    { mode: 'module' }
                ).code;
                const render = `${code};
                let __script = {};
                __script.render = render;
                  export default __script;`;
                return {
                    code: render,
                    map: null,
                };
            }
        },
    };
}

```



实现在特定的组件上，添加信息。（自定义块）

```ts
// @ts-ignore
import fs from 'fs';
import { baseParse } from '@vue/compiler-core';
const requestRegex = /vue&type=demo/;
const demoCodePlugin = () => {
    return {
        name: 'demoCode',
        transform(code, id: string) {
            // 判断请求是否是vue&type=demo自定义块儿请求
            if (!requestRegex.test(id)) return;
            // 获取该请求的路径
            const path = id.split('?')[0];
            // 读取该路径下的文件
            const file = fs.readFileSync(path).toString();
            // 解析该文件, 找到子元素的
            const parsed = baseParse(file).children.find(
                // @ts-ignore
                n => n?.tag === 'demo'
            );
            // 获取demo部分的代码，以它为分隔进行分隔（除去demo部分的代码），然后进行连接
            const main = file.split(parsed.loc.source).join('').trim();
            // 包装成函数进行导出，挂载到组件上
            return `export default Comp => {
              Comp.__demoTitle = ${JSON.stringify(code)};
              Comp.__demoSourceCode = ${JSON.stringify(main)};
          }`;
        },
    };
};
export default demoCodePlugin;

```



### 使用vite2打包组件库(v2.7.2)

```js
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import path from 'path';
import md from './plugin/md';
import demoCode from './plugin/demoCode';
// https://vitejs.dev/config
const lib = defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve('src'),
        },
    },
    // 打包配置
    build: {
        lib: {
            // 入口文件
            entry: path.resolve(__dirname, 'src/lib/index.ts'),
            // 设置名字
            name: 'tsai-vue-ui',
            // 打包后的名字
            fileName: () => `tsai-vue-ui.js`,
        },
        outDir: 'dist_lib',
        sourcemap: true,
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        }
    },
});
const project = defineConfig({
    base: './',
    plugins: [vue(), md(), demoCode()],
    resolve: {
        alias: {
            '@': path.resolve('src'),
        },
    },
    // 打包配置
    build: {
        outDir: 'dist_website',
    },
});

export default ({ mode }) => {
    const url = loadEnv(mode, process.cwd()).VITE_BASEURL;
    if (url === 'lib') {
        return lib;
    } else {
        return project;
    }
};

```

另外需要配置 

`.env` `.env.lib` `.env.project` 文件

```js
VITE_BASEURL=./
```

```js
VITE_BASEURL=lib
```

```js
VITE_BASEURL=nf-rollup-tool
```

