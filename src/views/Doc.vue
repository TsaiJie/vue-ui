<script lang="ts" setup>
import TopNav from '../components/TopNav.vue';
import { inject, Ref } from 'vue';

const asideVisible = inject<Ref<boolean>>('asideVisible');
</script>

<template>
    <div class="layout">
        <TopNav class="top-nav" />
        <div class="content">
            <transition>
                <aside v-show="asideVisible">
                    <h2>文档</h2>
                    <ol>
                        <li>
                            <router-link to="/doc/intro">介绍</router-link>
                        </li>
                        <li>
                            <router-link to="/doc/install">安装</router-link>
                        </li>
                        <li>
                            <router-link to="/doc/start">开始使用</router-link>
                        </li>
                    </ol>
                    <h2>组件列表</h2>
                    <ol>
                        <li>
                            <router-link to="/doc/switch"
                                >Switch 组件</router-link
                            >
                        </li>
                        <li>
                            <router-link to="/doc/button"
                                >Button 组件</router-link
                            >
                        </li>
                        <li>
                            <router-link to="/doc/dialog"
                                >Dialog 组件</router-link
                            >
                        </li>
                        <li>
                            <router-link to="/doc/tabs">Tabs 组件</router-link>
                        </li>
                    </ol>
                </aside>
            </transition>

            <main>
                <router-view class="main" />
            </main>
        </div>
    </div>
</template>

<style scoped lang="less">
@-webkit-keyframes slide-in-left {
    0% {
        -webkit-transform: translateX(-1000px);
        transform: translateX(-1000px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
    }
}
@keyframes slide-in-left {
    0% {
        -webkit-transform: translateX(-1000px);
        transform: translateX(-1000px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
    }
}
.v-enter-active {
    -webkit-animation: slide-in-left 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
        both;
    animation: slide-in-left 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.v-leave-active {
    -webkit-animation: slide-in-left 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
        both reverse;
    animation: slide-in-left 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
        reverse;
}
main {
    overflow: auto;
}

.layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
    transition: all 1s;
    > .top-nav {
        flex-shrink: 0;
    }
    > .content {
        flex-grow: 1;
        padding-top: 60px;
        padding-left: 156px;
        > main {
            flex-grow: 1;
            background: #ffffff;
            padding: 16px;
        }
        @media (max-width: 500px) {
            padding-left: 0;
        }
    }
}

aside {
    background: #baebe9;
    width: 150px;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
    height: 100%;
    z-index: 9;

    > h2 {
        margin-bottom: 4px;
        padding: 0 16px;
    }

    > ol {
        > li {
            > a {
                display: block;
                padding: 4px 16px;
                &:hover {
                    text-decoration: none;
                }
            }
            .router-link-active {
                background: white;
                &:hover {
                    text-decoration: none;
                }
            }
        }
    }
}
</style>
