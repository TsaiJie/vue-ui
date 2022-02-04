<script lang="ts" setup>
import TopNav from '../components/TopNav.vue';
</script>
<template>
<div class="top-nav-and-banner">
	<TopNav />
	<div class="banner">
		<h1>Tsai-UI</h1>
		<h2>一个简单&用于学习的UI框架</h2>
		<p class="actions">
			<a href="">GitHub</a>
			<router-link to="/doc">开始</router-link>
		</p>
	</div>
</div>
</template>

<style lang="less" scoped>
.top-nav-and-banner {
    background: linear-gradient(
        145deg,
        rgba(227, 255, 253, 1) 0%,
        rgba(183, 233, 230, 1) 100%
    );
}
.banner {
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
            background: #fff;
            display: inline-block;
            height: 28px;
            line-height: 28px;
            border-radius: 14px;
            padding: 0 8px;
        }
    }
}
</style>
