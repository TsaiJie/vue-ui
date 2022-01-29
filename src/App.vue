<script setup lang="ts">
    import Tsai from './components/Tsai.vue';
</script>

<template>
    <router-link to="/">Go to Tsai</router-link>
    |
    <router-link to="/xxx">Go to Tsai2</router-link>
    <hr />
    <router-view />
</template>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
