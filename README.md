# Vite创建项目
1. `yarn create vite`
2. 配置`prettier` `yarn add eslint eslint-plugin-vue --dev`
3. 配置`eslint` `npx eslint --init`
# Vue 3 + Typescript + Vite
1.inject和provide
1. 使用`inject`和`provide`完成属性的透传，后代组件可以改变这个属性的值，更改完，使用到这个属性的组件都会进行更新。
2. `react`中使用的是`context`实现的，但是有些不一样，`react`中的属性和修改这个属性的方法必须同时传递过来，然后进行修改。

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.
