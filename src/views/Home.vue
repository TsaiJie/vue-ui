<script lang="ts" setup>
import { inject, Ref } from 'vue';
import TopNav from '../components/TopNav.vue';
import Doc from './Doc.vue';
const asideVisible = inject<Ref<boolean>>('asideVisible');
</script>
<template>
    <div class="top-nav-and-banner">
        <TopNav />
        <div class="banner">
            <h1>Tsai-UI</h1>
            <h2>一个简单&用于学习的UI框架</h2>
            <p class="actions">
                <a href="">GitHub</a>
                <router-link to="/doc/intro">开始</router-link>
            </p>
        </div>
    </div>
    <!-- <Doc class="doc" v-if="asideVisible"></Doc> -->
    <div class="features">
        <ul>
            <li>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-vue"></use>
                </svg>
                <h3>基于vue 3.2.25</h3>
                <p>使用了Composition API setup语法糖</p>
            </li>
            <li>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-ts"></use>
                </svg>
                <h3>基于typescript 4.4.4</h3>
                <p>使用了Composition API setup语法糖</p>
            </li>
            <li>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-light"></use>
                </svg>
                <h3>代码简洁易读</h3>
                <p>组件的代码都非常简洁易懂</p>
            </li>
        </ul>
    </div>
</template>

<style lang="less" scoped>
@green: #02bcb0;
@border-radius: 4px;
@color: #007974;
.doc {
    position: fixed;
}
.top-nav-and-banner {
    background: linear-gradient(
        145deg,
        rgba(227, 255, 253, 1) 0%,
        rgba(183, 233, 230, 1) 100%
    );
    clip-path: ellipse(80% 60% at 50% 40%);
}
.features {
    margin: 64px auto;
    padding: 0 16px;
    @media (min-width: 800px) {
        width: 800px;
        > ul {
            > li {
                width: 50%;
            }
        }
    }
    @media (min-width: 1200px) {
        width: 1200px;
        > ul {
            > li {
                width: 25%;
            }
        }
    }
    > ul {
        display: flex;
        flex-wrap: wrap;
        > li {
            margin: 16px 0;
            display: grid;
            justify-content: start;
            align-content: space-between;
            grid-template-areas:
                'icon title'
                'icon text';
            grid-template-columns: 80px auto;
            grid-template-rows: 1fr auto;
            > svg {
                grid-area: icon;
                width: 64px;
                height: 64px;
            }
            > h3 {
                grid-area: title;
                font-size: 28px;
            }
            > p {
                grid-area: text;
            }
        }
    }
}
.banner {
    color: @color;
    padding: 100px 0;
    display: flex;
    //居中
    justify-content: center;
    align-items: center;
    //纵向排列
    flex-direction: column;

    > .actions {
        padding: 8px 0;

        a {
            margin: 0 8px;
            color: white;
            background: @green;
            display: inline-block;
            border-radius: @border-radius;
            padding: 8px 24px;
            &:hover {
                text-decoration: none;
            }
        }
    }
}
</style>
