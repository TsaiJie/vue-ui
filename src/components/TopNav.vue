<template>
    <div class="top-nav">
        <router-link class="logo" to="/">LOGO</router-link>
        <ul class="menu">
            <li>菜单1</li>
            <li>菜单2</li>
        </ul>
    </div>
</template>

<style scoped lang="less">
.top-nav {
    background: pink;
    display: flex;
    padding: 16px;
    position: relative;
    z-index: 10;
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
}
</style>
