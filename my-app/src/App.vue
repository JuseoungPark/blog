<template>
    <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    }
  },
}
</script>

<style>
html {
  height: 100%;
}
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app {
  display: flex;
  flex-flow: column wrap;
  min-height: 100%;
  background-color: #ffffff;
}
</style>
