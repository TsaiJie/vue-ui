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
<div class="features">
	<svg class="icon" aria-hidden="true">
		<use xlink:href="#icon-vue"></use>
	</svg>
	<svg class="icon" aria-hidden="true">
		<use xlink:href="#icon-ts"></use>
	</svg>
	<svg class="icon" aria-hidden="true">
		<use xlink:href="#icon-light"></use>
	</svg>
</div>
</template>

<style lang="less" scoped>
@green: #02bcb0;
@border-radius: 4px;
@color: #007974;
.top-nav-and-banner {
    background: linear-gradient(
        145deg,
        rgba(227, 255, 253, 1) 0%,
        rgba(183, 233, 230, 1) 100%
    );
    clip-path: ellipse(80% 60% at 50% 40%);
}
.features {
    > svg {
        width: 64px;
        height: 64px;
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
