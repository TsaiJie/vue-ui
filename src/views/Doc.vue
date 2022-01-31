<script lang="ts" setup>
import TopNav from '../components/TopNav.vue';
import { inject, Ref } from 'vue';

const asideVisible = inject<Ref<boolean>>('asideVisible');
</script>

<template>
    <div>
        <TopNav />
        <div class="content">
            <aside v-show="asideVisible">
                <h2>组件列表</h2>
                <ol>
                    <li>
                        <router-link to="/doc/switch">Switch 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/button">Button 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/dialog">Dialog 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs">Tabs 组件</router-link>
                    </li>
                </ol>
            </aside>

            <router-view class="main" />
        </div>
    </div>
</template>

<style scoped lang="less">
aside {
    background: lightblue;
    width: 150px;
    position: fixed;
    //top: 0;
    //left: 0;
    padding: 20px 16px 0;

    > h2 {
        margin-bottom: 4px;
    }

    > ol {
        > li {
            padding: 4px 0;
        }
    }
}
.main {
    margin-left: 150px;
}
@media (max-width: 500px) {
    .main {
        margin-left: 0;
    }
}

</style>
