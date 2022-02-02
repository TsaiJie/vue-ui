<script setup lang="ts">
import { inject, Ref } from 'vue';

const asideVisible = inject<Ref<boolean>>('asideVisible') as Ref<boolean>;
const toggleAside = () => {
    asideVisible.value = !asideVisible.value;
};
</script>
<template>
    <div class="top-nav">
        <div class="logo">LOGO</div>
        <ul class="menu">
            <router-link to="/">首页</router-link>
            <li>菜单2</li>
        </ul>
        <span class="toggleAsideButton" @click="toggleAside">
            <i class="iconfont iconfont-menu">&#xe655;</i>
        </span>
    </div>
</template>

<style scoped lang="less">
.top-nav {
    background: pink;
    display: flex;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    justify-content: center;
    align-items: center;

    > .logo {
        max-width: 6em;
        //flex + margin-right:auto 可以把相邻的元素忘右边推
        margin-right: auto;
    }

    > .menu {
        display: flex;
        //文字不换行
        white-space: nowrap;
        flex-wrap: nowrap;

        > li {
            margin: 0 1em;
        }
    }

    > .toggleAsideButton {
        width: 24px;
        height: 24px;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);

        &:hover {
            cursor: pointer;
        }
        > .iconfont-menu {
            font-size: 30px;
        }
    }

    //大于500像素就不显示
    @media (max-width: 500px) {
        > .menu {
            display: none;
        }

        > .logo {
            margin: 0 auto;
        }

        > .toggleAsideButton {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>
