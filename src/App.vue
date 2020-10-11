<template>
  <div id="app" :class="[$style.moduleStyle]">  <!-- Using array syntax because it creates class="" in inspector rather than not showing class at all. It's just for presentation. Doing :class="$style.moduleStyle" is fine also -->
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style module lang="scss">
.moduleStyle {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: red;
}
</style>
