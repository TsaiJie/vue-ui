<script setup lang="ts">
import { inject, Ref } from 'vue';

const asideVisible = inject<Ref<boolean>>('asideVisible') as Ref<boolean>;
const toggleAside = () => {
    asideVisible.value = !asideVisible.value;
};
</script>
<template>
    <div class="top-nav">
        <router-link to="/" class="logo">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-cai"></use>
            </svg>
        </router-link>
        <ul class="menu">
            <router-link to="/doc/intro">文档</router-link>
        </ul>
        <span class="toggleAsideButton" @click="toggleAside">
            <i class="iconfont iconfont-menu">&#xe655;</i>
        </span>
    </div>
</template>

<style scoped lang="less">
@color: #007974;
.top-nav {
    background: linear-gradient(145deg, #e3fffd 0%, #b7e9e6 100%);
    display: flex;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    justify-content: center;
    align-items: center;
    color: @color;
    > .logo {
        max-width: 6em;
        //flex + margin-right:auto 可以把相邻的元素忘右边推
        margin-right: auto;
        > svg {
            width: 32px;
            height: 32px;
        }
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
        display: none;
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
