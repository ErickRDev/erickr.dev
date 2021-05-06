<template>
    <nav-bar></nav-bar>
    <h1 style="text-align: center;">Hello, World</h1>
    <div style="text-align: center;">Welcome my blog :)</div>
</template>

<script>
import NavBar from '../components/NavBar.vue'

export default {
    name: 'Blog',
    components: {
        NavBar
    }
}
</script>