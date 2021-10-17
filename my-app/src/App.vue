<template>
  <Fragment>
    <Gnb transparent />
    <Cover count="2" count_total="3333" title="기록" />
    <Container>
      <template v-slot:content>
        <span>컨텐츠</span>
      </template>
    </Container>
  </Fragment>
</template>

<script>
import Gnb from './components/Gnb'
import Cover from './components/Cover'
import Container from './components/Container'

export default {
  name: 'App',
  components: {
    Gnb,
    Cover,
    Container,
  },
  data() {
    return {
      // transparent: true,
    }
  }
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
</style>
