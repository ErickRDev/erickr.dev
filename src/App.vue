<template>
  <div>
      <nav-bar></nav-bar>
      <div id="app-content" class="stack">
          <img id="avatar-pic" src="./assets/imgs/no.jpg">
          <terminal></terminal>
          <div id="canvas"></div>
      </div>
  </div>
</template>

<script>
import Terminal from './components/Terminal.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Terminal
  }
}
</script>